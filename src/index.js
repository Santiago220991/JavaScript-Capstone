import './styles.css';
import * as api from './modules/api-functions.js';
import likeimg from './like_img.png';
import moviesimg from './movies_img.png';

const section = document.querySelector('.moviediv');
const logo = document.querySelector('header img');
const apiurl = 'https://api.tvmaze.com/search/shows?q=comedy';
const likesurl="https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/KnDLmrih7aiYfd0ihv9H/likes/"

let imgurl;
let likesnum;
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
        <p class="like-text"> </p>
        </div>
        </div>
        <p class="comments">Comments</p>
        <p class="reservations">Reservations</p>  
        </div>`;
  });
  const liketext=document.querySelectorAll(".like-text");
  mypromiseb.then(result=>{
    likesnum=api.likes(result)

  liketext.forEach((element,index)=>{
    if(likesnum[index]<=1){
      element.textContent=`${likesnum[index]} like`
    }else{
    element.textContent=`${likesnum[index]} likes`
    }
  })
  })
});

const mypromiseb=new Promise((resolve)=>{
  resolve(api.getlikes(likesurl))
})