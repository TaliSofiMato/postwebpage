 

const app = async () => {
  let post = await getpostFromDatabase();




  const renderPost = (postObj) => {
    const status = postObj.completed ? 'Complete' : 'Pending';

    const newPost = `<div>${postObj.title}</div><div>${postObj.body}</div><button class='comment'></button>`;
    let data = document.querySelector('.post-container');
    data.innerHTML = data.innerHTML + newPost;
  }
  post.forEach(renderPost);



}
app()