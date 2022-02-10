const getcommentsFromDatabase = async (file) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/{id}/comments')
    return await response.json()
}
