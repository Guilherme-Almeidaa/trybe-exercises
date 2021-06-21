const socket = window.io();


const addNewPost = (message, likes, stars) => {
    const postElement = document.createElement('artigle');
    postElement.classList.add('media')
    const post = `
 
 <div class="media-left">
   <figure class="image is-64x64">
     <img src="https://semantic-ui.com/images/avatar2/large/matthew.png" alt="Image">
   </figure>
 </div>
 <div class="media-content">
   <div class="content">
     <p>
       <strong>James</strong><small>@jokerjames</small>
       <br>
       ${message}
     </p>
   </div>
   <div class="level-left">
     <a class="level-item">
       <span class="icon is-small likeIcon" ><i class="fas fa-heart"></i></span>
       <span class="likes currentLikes" >${likes}</span>
       <span class="icon is-small starIcon" ><i class="fas fa-star"></i></span>
       <span class="likes currentStars" >${stars}</span>
     </a>
   </div>
 </div>

 `
    postElement.innerHTML = post;

    return postElement;

}

const formPost = document.querySelector('#form-post');
const likeButton = document.getElementsByClassName('likeIcon');
const numberLike = document.getElementsByClassName('currentLikes');
const numberStars = document.getElementsByClassName('currentStars');
const starButton = document.getElementsByClassName('starIcon');

formPost.addEventListener('submit', (e) => {
    e.preventDefault();
    const textPost = document.querySelector('#newPost').value;
    
    socket.emit('newPostMessage', { textPost })
    
})

socket.on('postAdd', ({ textPost, info }) => {
    document.querySelector('.box').append(addNewPost(textPost, info.likes, info.stars));
})





const addLike = () => {
    return Number(numberLike.innerText) + 1;
}

const addStar = () => {
    return Number(numberStars.innerText) + 1;
}

likeButton.addEventListener('click', ({ target }) => {
    socket.emit('responseServerLikes', { like: target.innerText });
})

starButton.addEventListener('click', ({ target }) => {
    socket.emit('responseServerStars', { star: target.innerText })
})

//socket.on('updateLikes', ({ like, star }) => {
  //  numberLike.innerText = Number(like);
   // numberStars.innerText = Number(star);

//})

//socket.on('likePost', () => {
  //  numberLike.innerText = addLike();
//})

//socket.on('starPost', () => {
  //  numberStars.innerText = addStar();
//})