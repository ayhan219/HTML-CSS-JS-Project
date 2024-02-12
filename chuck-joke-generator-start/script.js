const container = document.querySelector(".container");
const joke = document.querySelector(".joke");
const button = document.querySelector(".btn");

function fetchRandomJoke() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://api.chucknorris.io/jokes/random");

  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const data = JSON.parse(this.responseText);
      joke.innerHTML = data.value;
    }
  };

  xhr.send();
}

button.addEventListener("click", fetchRandomJoke);