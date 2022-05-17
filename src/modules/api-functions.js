const getdata = async (apiurl) => {
  let response = await fetch(apiurl);
  response = await response.json();
  response = response.map((a) => a.show);
  return response;
};

const getimg = (imgurl) => {
  imgurl = imgurl.map((a) => a.image.original);
  return imgurl;
};

const getlikes = async (likesurl) => {
  let response = await fetch(likesurl);
  response = await response.json();
  return response;
};

const likes = (likesnum) => {
  likesnum = likesnum.map((a) => a.likes);
  return likesnum;
};

const postlike=async (newlikeurl,index)=>{
  await fetch (newlikeurl,{
    method: 'POST',
    body: JSON.stringify({
      "item_id": `item${index+1}`
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
 
}


export {
  getdata, getimg, getlikes, likes, postlike,
};