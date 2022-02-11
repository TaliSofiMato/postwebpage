const showComment = async (event) => {
  let parent = event.target.parentElement
  let shownComments = parent.querySelectorAll('.shown')
  if (parent.querySelectorAll('.shown').length) {
    if (shownComments[0].style.display === 'none'){
      event.target.innerText = 'Hide Comments'
      shownComments.forEach((com) => {
        com.style.display = 'block'
      })
    } else {
      event.target.innerText = 'Show Comments'
      shownComments.forEach((com) => {
        com.style.display = 'none'
      })
    }
    
  } else {
    event.target.innerText = 'Hide Comments'
    const renderComment = (commentObj) => {
      const newComment = `<div class='shown'>${commentObj.body}</div>`
      parent.innerHTML = parent.innerHTML + newComment
    }
    let comment = await getcommentsFromDatabase(event.target.id);
    comment.forEach(renderComment)
  }
}


const app = async () => {
  let post = await getpostFromDatabase();

  const renderPost = (postObj) => {
    const newPost = `<div><h3>${postObj.title}</h3><div>${postObj.body}</div><button id=${postObj.id} onclick='showComment(event)' >Show Comments</button></div>`
    let data = document.querySelector('.post-container')
    data.innerHTML = data.innerHTML + newPost
  }
  post.forEach(renderPost)
}
app()