document.getElementById('blogForm').addEventListener('submit', (e)=>{
    e.preventDefault();

    let title = document.getElementById('title').value
    let content = document.getElementById('content').value

    addPost(title, content)
    document.getElementById('blogForm').reset()
})

function addPost(title, content){
    let postContainer = document.getElementById('posts')

    let postElement = document.createElement('div')
    postElement.className = 'card mb-3'

    postElement.innerHTML = `
        <div class='card-body'>
            <h3 clss="card-title">${title}</h3>
            <p class="card-text">${content}</p>
        </div>    
    `
    postContainer.appendChild(postElement)
}

// The content should contain alteast 20 words

// add functionality to edit a post