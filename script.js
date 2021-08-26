// $.ajax({
//     url: 'https://randomuser.me/api/',
//     dataType: 'json',
//     success: function(data) {
//       console.log(data);
//     }
//   });


fetch(`https://randomuser.me/api/`)
  .then((res) => res.json())
  .then((res) => {
    const users = res;
    console.log(users);
});
