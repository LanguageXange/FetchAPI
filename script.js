// XMLHttpRequest

// var request = new XMLHttpRequest();

// request.open("GET", "https://ghibliapi.herokuapp.com/films");

// request.onload = function () {
//   var data = JSON.parse(this.response);
//   if (request.status >= 200 && request.status < 400) {
//     data.forEach((movie) => {
//       console.log(movie.title);
//       console.log(movie.description);
//     });
//   } else {
//     console.log("error", error);
//   }
// };
// request.send();
//////
// Fetch is the new way to do things

fetch("https://ghibliapi.herokuapp.com/films")
  .then((res) => res.json())
  .then((data) => {
    for (let i = 0; i <= data.length; i++) {
      const card = document.createElement("li");
      card.setAttribute("class", "card");
      const h1 = document.createElement("h1");
      const p = document.createElement("p");
      h1.textContent = data[i].title;
      p.textContent = data[i].description.slice(0, 120) + "  ...";
      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p);
    }
  })
  .catch((err) => console.log("Error!!", err));

const app = document.getElementById("root");
const container = document.createElement("ul");
container.setAttribute("class", "container");

app.appendChild(container);

function myFunction() {
  var input, filter, ul, li, h1, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementsByTagName("ul");
  li = document.getElementsByTagName("li");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    h1 = li[i].getElementsByTagName("h1")[0];
    txtValue = h1.textContent || h1.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
