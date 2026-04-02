const API_URL = "https://jsonplaceholder.typicode.com/posts";
const postList = document.getElementById("postList");
const titleInput = document.getElementById("title");
const bodyInput = document.getElementById("body");
const formError = document.getElementById("formError");

// получить все посты
async function getPost() {
  postList.innerHTML = "загрузочка";
  try {
    const response = await fetch(API_URL);
    const post = await response.json();
    showPosts(post.slice(0, 5));
  } catch (error) {
    postList.innerHTML = "ашiбочка";
    console.log("ашiбочка", error);
  }
}

function showPosts(post) {
  let html = "";
  for (let pos of post) {
    html += `
    <div class="post" id="post-${pos.id}">
    <h3>${pos.title}</h3>
    <p>${pos.body}</p>
    <button onclick="editPost(${pos.id})">редактировать</button>
    <button onclick="deletePost(${pos.id})">заблокировать</button>
    </div>`;
  }
  postList.innerHTML = html;
}
