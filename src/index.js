import './styles.css';
import * as api from './modules/api-functions.js';
import likeimg from './like_img.png';
import moviesimg from './movies_img.png';
import getmovie from './modules/popup.js';

const section = document.querySelector('.moviediv');
const logo = document.querySelector('header img');
const apiurl = 'https://api.tvmaze.com/search/shows?q=comedy';
const popup = document.querySelector('.modal');
let imgurl;

logo.src = moviesimg;

const myPromise = new Promise((resolve) => {
  resolve(api.getdata(apiurl));
});

myPromise.then((result) => {
  imgurl = api.getimg(result);
  imgurl.forEach((element, index) => {
    section.innerHTML += `<div class="item">
        <img class="poster" src="${element}" alt="Italian Trulli">
        <div class="title"><p>${result[index].name}</p>
        <div>
        <img class="like" src="${likeimg}">
        <p class="like-text">5 likes</p>
        </div>
        </div>
       <button><p class="comments" id="commentid" >Comments</p></button>
        <p class="reservations">Reservations</p>  
        </div>`;
  });
  const commentbutton = document.querySelectorAll('.comments');
  commentbutton.forEach((element, index) => {
    element.addEventListener('click', () => {
      const popupinfo = getmovie(result, popup, index);
      section.append(popupinfo);
      popupinfo.classList.add('active');
      const close = document.querySelector('.close-button');
      close.addEventListener('click', () => {
        popupinfo.remove();
      });
    });
  });
});
