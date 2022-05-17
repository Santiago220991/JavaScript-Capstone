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
  console.log(response)
  return response
};

const likes=(likesnum)=>{
  likesnum=likesnum.map((a)=>a.likes)
  return likesnum
}

export { getdata, getimg, getlikes, likes };