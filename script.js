// client-side rendering
fetch(`https://randomuser.me/api/`)
  .then((res) => res.json())
  .then((res) => {
    const user = res.results[0];
    console.log(user);

    const card = showCards(user);

    const usersContainer = document.querySelector(".card");
    usersContainer.innerHTML = card;
  });

// server-side rendering while next link clicked (ajax)
document.addEventListener("click", async function (e) {
  if (e.target.matches(".card__nextUser")) {
    const newUser = await fetch(`https://randomuser.me/api/`)
      .then((res) => res.json())
      .then((res) => res.results[0]);
    // console.log(newUser);

    const nextCard = showCards(newUser);

    const newUserContainer = document.querySelector(".card");
    newUserContainer.innerHTML = nextCard;
  }
});

// infinite scroll - ongoing!

// DOM
function showCards(user) {
  return `<div class="card__details">
            <div class="card__userPhoto">
              <a href="#" class="card__nextUser">Next</a>
              <img src="${user.picture.large}" />
            </div>
            <p class="card__userIntro">Hi, My name is</p>
            <p class="card__userName">${user.name.first} ${user.name.last}</p>
            <br><br><br>
            <p class="card__userIntro">Here's my email</p>
            <p class="card__userName" style="text-transform: lowercase">${user.email}</p>
            <br>
            <p class="card__userIntro">Call me through</p>
            <p class="card__userName">${user.phone}</p>
            <br>
            <p class="card__userIntro">This is where I live</p>
            <p class="card__userName">${user.location.street.name} ${user.location.street.number}, ${user.location.city}, ${user.location.country}</p>

          </div>`;
}
