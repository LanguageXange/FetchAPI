
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
  var input, filter, li, h1, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  li = document.getElementsByTagName("li");

  for (let i = 0; i < li.length; i++) {
    h1 = li[i].getElementsByTagName("h1")[0];
    txtValue = h1.textContent || h1.innerText;
    li[i].style.display =
      txtValue.toUpperCase().indexOf(filter) > -1 ? "" : "none";
  }
}

