const express = require("express");
const router = express.Router();

const db = require("../data/database");

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

async function getPostsList(request, response) {
  /*
        the db.query returns an array with two elements. An array of data and meta data.

        We use array destructuring below to get the first element of the outer array.

        An example of array destructuring below.

        var colors = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red"];  
      
        // destructuring assignment  
        var[color1, color2, color3] = colors;  
        console.log(color1); // Violet  
        console.log(color2); // Indigo  
        console.log(color3); // Blue  
  */
  const [blogPosts] = await db.query(
    "SELECT p.id, title, summary, body, date, name FROM blogger.posts p, blogger.authors a WHERE author_id = a.id"
  );
  response.render("posts-list", { blogs: blogPosts });
}

async function getPost(request, response) {
  /*
          the db.query returns an array with two elements. An array of data and meta data.
  
          We use array destructuring below to get the first element of the outer array.
  
          An example of array destructuring below.
  
          var colors = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red"];  
        
          // destructuring assignment  
          var[color1, color2, color3] = colors;  
          console.log(color1); // Violet  
          console.log(color2); // Indigo  
          console.log(color3); // Blue  
    */
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
  console.log(postData);
  response.render("post-detail", { blog: postData });
}

async function getPostEntry(request, response) {
  /*
        the db.query returns an array with two elements. An array of data and meta data.

        We use array destructuring below to get the first element of the outer array.

        An example of array destructuring below.

        var colors = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red"];  
      
        // destructuring assignment  
        var[color1, color2, color3] = colors;  
        console.log(color1); // Violet  
        console.log(color2); // Indigo  
        console.log(color3); // Blue  
    */
  const [authorList] = await db.query("SELECT * FROM authors");
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
  const enteredData = [
    request.body.title,
    request.body.summary,
    request.body.content,
    request.body.author,
  ];

  await db.query(
    "INSERT INTO posts (title, summary, body, author_id) VALUES (?)",
    [enteredData]
  );

  /*
  Another way of providing the values to the insert query is:
  await db.query(
    "INSERT INTO posts (title, summary, body, author_id) VALUES (?,?,?,?)",
    [enteredData[0], enteredData[1], enteredData[2], enteredData[3]]
  );
  */

  response.redirect("/posts");
}

async function editPost(request, response) {
  /*
        the db.query returns an array with two elements. An array of data and meta data.

        We use array destructuring below to get the first element of the outer array.

        An example of array destructuring below.

        var colors = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red"];  
      
        // destructuring assignment  
        var[color1, color2, color3] = colors;  
        console.log(color1); // Violet  
        console.log(color2); // Indigo  
        console.log(color3); // Blue  
    */
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
