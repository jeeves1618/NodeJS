const express = require("express");
const router = express.Router();

const db = require("../data/database");

router.get("/", getIndex);
router.get("/posts", getPostsList);
router.get("/new-post", getPostEntry);
router.post("/post-entry", postBlogEntry);
router.get("/view-post/:id", getPost);

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
  console.log(blogPosts[0]);
  response.render("post-detail", { blog: blogPosts[0] });
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

module.exports = router;
