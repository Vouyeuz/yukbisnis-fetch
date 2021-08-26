fetch(`https://randomuser.me/api/`)
  .then((res) => res.json())
  .then((res) => {
    const users = res.results[0];
    console.log(users);

    const card = showCards(users);

    const usersContainer = document.querySelector(".card");
    usersContainer.innerHTML = card;
  });

function showCards(users) {
  return `<div class="card__details">
  <img
    class="card__userPhoto"
    src="${users.picture.large}"
  />
  <p class="card__userIntro">Hi, My name is</p>
  <p class="card__userName">${users.name.first}</p>
</div>`;
}
