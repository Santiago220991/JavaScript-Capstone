import "./styles.css";
import * as api from "./modules/api-functions.js"

const section=document.querySelector(".moviediv")

const apiurl="https://api.tvmaze.com/search/shows?q=comedy"

let imgurl
const myPromise = new Promise((resolve) => {
    resolve(api.getdata(apiurl))
});

myPromise.then(result => { 
    imgurl=api.getimg(result)
    console.log(imgurl)
    imgurl.forEach((element,index)=>{
        section.innerHTML+=`<div class="item">
        <img class="poster" src="${element}" alt="Italian Trulli">
        <div class="title"><p>${result[index].name}</p>
        <div>
        <img class="like" src="./peace_img.png">
        <p>5 likes</p>
        </div>
        </div>
        <p class="comments">Comments</p>
        <p class="reservations">Reservations</p>  
        </div>`
    })

})



