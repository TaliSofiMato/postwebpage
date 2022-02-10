 
const showcomments = async (event) => {
  let comment = await getcommentsFromDatabase(event.target.id);
  let parent = event.target.parentElement
  
  const renderComments = (commentObj) => {
    const comment = `<div>${commentObj.body}</div>`
    parent.innerHTML = parent.innerHTML + comment
  }
  comment.forEach(renderComments)
}
const app = async () => {
  let post = await getpostFromDatabase();



  const renderPost = (postObj) => {
    const newPost = `<div><h3>${postObj.title}</h3><div>${postObj.body}</div><button id='${postObj.id}' onclick='showcomments(event)' class='comment'>Show Comments</button></div>`;
    let data = document.querySelector('.post-container');
    data.innerHTML = data.innerHTML + newPost;
  }
  post.forEach(renderPost);



}
app()