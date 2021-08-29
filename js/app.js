fetch("https://jsonplaceholder.typicode.com/posts")
.then(res => res.json())
.then(data => setPosts(data))


const setPosts = (posts) => {
    const postContainer = document.getElementById('post-container')
    for(const post of posts) {
        const postDiv = document.createElement('div')
        const classesToAdd = ['post', 'p-5', 'm-3', 'bg-light', 'border', 'border-3', 'border-primary']
        // postDiv.classList.add('post', 'p-5', 'm-3', 'bg-light', 'border', 'border-3', 'border-primary')
        postDiv.classList.add(...classesToAdd)
        postDiv.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        <p>Post no: ${post.id}</p>
        `
        postContainer.appendChild(postDiv)
    }
}