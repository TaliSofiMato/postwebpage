
const app = async () => {
  let post = await getpostFromDatabase();

  const renderPost = (postObj) => {
    const newPost = `<div><h3>${postObj.title}</h3><div>${postObj.body}</div></div>`
    let data = document.querySelector('.post-container')
    data.innerHTML = data.innerHTML + newPost
  }
  post.forEach(renderPost)
}
app()