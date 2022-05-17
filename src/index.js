import './styles.css';
import * as api from './modules/api-functions.js';
import likeimg from './like_img.png';
import moviesimg from './movies_img.png';
import { postComments, getmovie } from './modules/popup.js';

const section = document.querySelector('.moviediv');
const logo = document.querySelector('header img');
const apiurl = 'https://api.tvmaze.com/search/shows?q=comedy';
const popup = document.querySelector('.modal');
const movies = document.querySelector('#movietotal');
const likesurl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/KnDLmrih7aiYfd0ihv9H/likes/';
const newlikeurl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/KnDLmrih7aiYfd0ihv9H/likes/';
const commenturl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/KnDLmrih7aiYfd0ihv9H/comments/';

let likesnum;
let imgurl;
let likescounter;
let itemscounter;
logo.src = moviesimg;

const myPromise = new Promise((resolve) => {
  resolve(api.getdata(apiurl));
});

const mypromiseb = new Promise((resolve) => {
  resolve(api.getlikes(likesurl));
});

myPromise.then((result) => {
  imgurl = api.getimg(result);
  itemscounter = api.totalitems(result);
  movies.textContent = `Movies(${itemscounter})`;
  imgurl.forEach((element, index) => {
    section.innerHTML += `<div class="item">
        <img class="poster" src="${element}" alt="Italian Trulli">
        <div class="title"><p>${result[index].name}</p>
        <div>
        <img class="like" src="${likeimg}">
        <p class="like-text"> </p>
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
        const commenttext = document.querySelectorAll('.addnew-btn');
  commenttext.forEach((element, id) => {
    element.addEventListener('click', (e) => {
      e.preventDefault();
      // api.postlike(newlikeurl, index);
      postComments(commenturl, id);
      document.getElementById(`username-${element.dataset.id}`).value = '';
      document.getElementById(`insight-${element.dataset.id}`).value = '';
    });
  });
      });
    });
  });
  const liketext = document.querySelectorAll('.like-text');
  const likebutton = document.querySelectorAll('.like');
  mypromiseb.then((result) => {
    likesnum = api.likes(result);
    likescounter = likesnum;
    liketext.forEach((element, index) => {
      if (likesnum[index] <= 1) {
        element.textContent = `${likesnum[index]} like`;
      } else {
        element.textContent = `${likesnum[index]} likes`;
      }
    });
    likebutton.forEach((element, index) => {
      element.addEventListener('click', () => {
        api.postlike(newlikeurl, index);
        likescounter[index] += +1;
        liketext.forEach((element, index) => {
          if (likesnum[index] <= 1) {
            element.textContent = `${likescounter[index]} like`;
          } else {
            element.textContent = `${likescounter[index]} likes`;
          }
        });
      });
    });
  });
  
});
