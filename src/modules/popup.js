const getmovie = (result, popup, index) => {
  result = result[index];
  popup.innerHTML = `<div id="modal-pop-up-${result.id}" class="modal-pop-up">
        <div class="cont-pop-up">
          <div class="modal-header">  <button data-id='${result.id}' class="close-button">&times;</button> </div>
            <img class="modal-pop-img" src="${result.image.original}">
            <h2 class="movie-title">${result.name}</h2>
            <div class="movie-info">
                <div class="movie-info1">
                    <p>Rating: ${result.rating.average}</p>
                    <p>Type: ${result.type}</p> 
                </div>
                <div class="movie-info2">
                    <p>Runtime: ${result.runtime}</p>
                    <p>Language: ${result.language}</p>
                </div>
            </div>
            <h4 class="comment-${result.id}"></h4>
            <ul class="comment-list-${result.id} comment-list"></ul>
            <form class="comment-form">
                <h4 class="addcom">Add comment</h4>
                <input type="text" id="username-${result.id}" class="username" placeholder="Your name" required><br>
                <textarea type="text" id="insight-${result.id}" class="insight" placeholder="Your insight" required></textarea><br>
                <button type="submit" id="addnew" data-id='${result.id}' class="addnew-btn">Comment</button>
            </form>
        </div>
    </div>`;
  return popup;
};

const postComments = async (commenturl, id) => {
  (await fetch(commenturl, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      item_id: `${id}`,
      username: document.getElementById(`username-${id}`).value,
      comment: document.getElementById(`insight-${id}`).value,
    }),
  })).json();
};

export { getmovie, postComments };