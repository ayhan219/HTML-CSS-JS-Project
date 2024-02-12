const signuplink = document.querySelector(".signuplink");
const loginlink = document.querySelector(".loginlink");
const container2 = document.querySelector(".container2");
const container3 = document.querySelector(".container3");

runEvents();

function runEvents() {
  signuplink.addEventListener("click", signup);
  loginlink.addEventListener("click", login);
}

function signup() {
  container3.style.transform = "translateX(100%)";
  container2.style.transform = "translateX(0)";
  container3.style.opacity="0";
  container2.style.opacity="1";
  
  
}
function login() {
  container3.style.transform = "translateX(0)";
  container2.style.transform = "translateX(100%)";
  container3.style.opacity="1";
  container2.style.opacity="0";
  
  
  

}
