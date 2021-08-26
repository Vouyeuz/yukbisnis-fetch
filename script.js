fetch(`https://randomuser.me/api/`)
  .then(res => res.json())
  .then((res) => {
    const user = res.results[0];
    console.log(user);

    const card = showCards(user);

    const usersContainer = document.querySelector(".card");
    usersContainer.innerHTML = card;
  });

// fetch(`https://randomuser.me/api/`)
//   .then(res => res.json())
//   .then((res) => {
//     const nextUser = res.results[0];

//     console.log(nextUser);
//   })



function showCards(user) {
  return `<div class="card__details">
            <div class="card__userPhoto">
              <a href="/" class="card__nextUser">Next</a>
              <img src="${user.picture.large}" />
            </div>
            <p class="card__userIntro">Hi, My name is</p>
            <p class="card__userName">${user.name.first} ${user.name.last}</p>
          </div>`;
}
