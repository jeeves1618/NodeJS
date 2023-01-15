const loadCommentsBtn = document.getElementById("load-comments-btn");
const commentSection = document.getElementById("comments");

function commentListCreation(comments) {
  const commentListElement = document.createElement("ul");
  for (const comment of comments) {
    const listItemElement = document.createElement("li");
    listItemElement.innerHTML = `
    <article class="comment-item">
        <h2>${comment.title}</h2>
        <p>${comment.text}</p>
    </article>`;

    commentListElement.appendChild(listItemElement);
  }

  return commentListElement;
}

//fetch returns a promise
async function fetchComments() {
  //Find out the reason for the space at the end
  const postId = loadCommentsBtn.dataset.postid.substring(0, 24);
  console.log("Triggering for " + postId + " for a length of " + postId.length);
  const response = await fetch(`/posts/${postId}/comments`);
  console.log("After Triggering ");
  //.json will decode the json response from server into JS object
  const responseJson = await response.json();
  //EJS happens in the server. So, this json cannot be passed to EJS
  console.log(responseJson);

  const commentListElement = commentListCreation(responseJson);
  //Remove existing elements under comment section
  commentSection.innerHTML = "";
  commentSection.appendChild(commentListElement);
}
loadCommentsBtn.addEventListener("click", fetchComments);
