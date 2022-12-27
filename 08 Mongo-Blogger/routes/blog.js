const express = require("express");
const router = express.Router();

const db = require("../data/database");
const mongoDb = require("mongodb");
const objectId = mongoDb.ObjectId;

router.get("/", getIndex);
router.get("/posts", getPostsList);
router.get("/new-post", getPostEntry);
router.post("/post-entry", postBlogEntry);
router.get("/view-post/:id", getPost);
router.get("/edit-post/:id", editPost);
router.post("/edit-post/:id", savePost);
router.post("/delete-post/:id", deletePost);

function getIndex(request, response) {
  response.redirect("/posts");
}
//In the find we have used projection to select only the required fields.
async function getPostsList(request, response) {
  const blogPosts = await db
    .getDatabase()
    .collection("blogs")
    .find({})
    .project({ title: 1, summary: 1, "author.name": 1 })
    .toArray();
  response.render("posts-list", { blogs: blogPosts });
}

async function getPost(request, response) {
  const blogId = request.params.id;

  const blogData = await db
    .getDatabase()
    .collection("blogs")
    .findOne({ _id: new objectId(blogId) });
  console.log(blogData);
  response.render("post-detail", { blog: blogData });
}

async function getPostEntry(request, response) {
  //const documentCursor = await db.getDatabase().collection("author").find();

  //The above statement will return an pointer. If you want the documents, you will have to apply toArray menthod to it.
  const authorList = await db
    .getDatabase()
    .collection("author")
    .find()
    .toArray();

  console.log(authorList);
  /*
  The above console log will return the follwing
  [
    { id: 1, name: 'Richard Dawkins', email: 'rdawkins@test.com' },
    { id: 2, name: 'Ayn Rand', email: 'iamrand@test.com' },
    { id: 3, name: 'Christopher Hitchens', email: 'hitched@test.com' }
  ]
  */
  response.render("create-post", { authors: authorList });
}

async function postBlogEntry(request, response) {
  console.log(request.body.author);
  const authorId = new objectId(request.body.author);
  const author = await db
    .getDatabase()
    .collection("author")
    .findOne({ _id: authorId });

  const enteredData = {
    title: request.body.title,
    summary: request.body.summary,
    content: request.body.content,
    date: new Date(),
    author: {
      id: authorId,
      name: author.name,
      email: author.email,
    },
  };

  const result = await db
    .getDatabase()
    .collection("blogs")
    .insertOne(enteredData);
  console.log(result);

  response.redirect("/posts");
}

async function editPost(request, response) {
  const [authorList] = await db.query("SELECT * FROM authors");
  const blogId = request.params.id;

  const [blogPosts] = await db.query(
    "SELECT p.id, title, summary, body, date, name FROM blogger.posts p, blogger.authors a WHERE author_id = a.id AND p.id = ?",
    [blogId]
  );
  const postData = {
    //If we don't use the ... operator below, blog post will become one of the nested object and the human readable date will be a property of the outer object.
    //Check RestandSpread.js under JS Refresher for more clarity
    ...blogPosts[0],
    date: blogPosts[0].date.toISOString(),
    humanReadableDate: blogPosts[0].date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
  };
  /*
  The above console log will return the follwing
  [
    { id: 1, name: 'Richard Dawkins', email: 'rdawkins@test.com' },
    { id: 2, name: 'Ayn Rand', email: 'iamrand@test.com' },
    { id: 3, name: 'Christopher Hitchens', email: 'hitched@test.com' }
  ]
  */
  response.render("update-post", { authors: authorList, blog: postData });
}

async function savePost(request, response) {
  const blogId = request.params.id;

  //UPDATE blogger.posts SET title = ?, summmary = ?, body = ?, author_id = ? WHERE id =?;
  const query = `UPDATE blogger.posts SET title = ?, summary = ?, body = ? WHERE id =?`;
  await db.query(query, [
    request.body.title,
    request.body.summary,
    request.body.content,
    blogId,
  ]);

  response.redirect("/posts");
}

async function deletePost(request, response) {
  const blogId = request.params.id;
  const query = `DELETE FROM blogger.posts WHERE id = ?`;
  await db.query(query, [blogId]);
  response.redirect("/posts");
}
module.exports = router;
