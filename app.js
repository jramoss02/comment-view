const likeBtn = document.querySelector('.icon');
const likes = document.querySelector('.likesCounter');

let likesCounter = Number.parseInt(likes.textContent, 10);
let isLiked = false;

likeBtn.onclick = function(){
  likeBtn.classList.toggle('active');
} 

const likeClick = () => {
  if (!isLiked) {
    likeBtn.classList.add('isLiked');
    likesCounter++;
    likes.textContent = likesCounter;
    isLiked = !isLiked;
  } else {
    likeBtn.classList.remove('isLiked');
    likesCounter--;
    likes.textContent = likesCounter;
    isLiked = !isLiked;
  }
};

likeBtn.addEventListener('click', likeClick);