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
    .project({ title: 1, summary: 1, author: 1 })
    .toArray();
  console.log(blogPosts);
  response.render("posts-list", { blogs: blogPosts });
}

async function getPost(request, response) {
  const blogId = request.params.id;

  const blogData = await db
    .getDatabase()
    .collection("blogs")
    .findOne({ _id: new objectId(blogId) });

  const humanReadableDate = blogData.date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  console.log(humanReadableDate);
  response.render("post-detail", {
    blog: blogData,
    humanReadableDate: humanReadableDate,
  });
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
  //const documentCursor = await db.getDatabase().collection("author").find();

  //The above statement will return an pointer. If you want the documents, you will have to apply toArray menthod to it.
  const authorList = await db
    .getDatabase()
    .collection("author")
    .find()
    .toArray();
  const blogId = request.params.id;

  const blogData = await db
    .getDatabase()
    .collection("blogs")
    .findOne({ _id: new objectId(blogId) });
  const humanReadableDate = blogData.date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  /*
  The above console log will return the follwing
  [
    { id: 1, name: 'Richard Dawkins', email: 'rdawkins@test.com' },
    { id: 2, name: 'Ayn Rand', email: 'iamrand@test.com' },
    { id: 3, name: 'Christopher Hitchens', email: 'hitched@test.com' }
  ]
  */
  if (!blogData) {
    return response.status("404").render("404");
  }
  response.render("update-post", {
    authors: authorList,
    blog: blogData,
    humanReadableDate: humanReadableDate,
  });
}

async function savePost(request, response) {
  console.log("Getting body as " + request.body.content);
  const blogId = new objectId(request.params.id);
  console.log("Getting " + blogId);
  //UPDATE blogger.posts SET title = ?, summmary = ?, body = ?, author_id = ? WHERE id =?;
  await db
    .getDatabase()
    .collection("blogs")
    .updateOne(
      { _id: blogId },
      {
        $set: {
          title: request.body.title,
          summary: request.body.summary,
          body: request.body.content,
        },
      }
    );

  response.redirect("/posts");
}

async function deletePost(request, response) {
  const blogId = new objectId(request.params.id);
  await db.getDatabase().collection("blogs").deleteOne({ _id: blogId });
  response.redirect("/posts");
}
module.exports = router;
