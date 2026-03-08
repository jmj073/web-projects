const listItems = document.querySelectorAll("li");

function toggleDone(e) {
  if (!e.target.className) {
    e.target.className = "done";
  } else {
    e.target.className = "";
  }
}

listItems.forEach((item) => {
  item.addEventListener("click", toggleDone);
});

// ========================================================

const myImage = document.querySelector("img");
const src1 = "images/firefox-icon.png";
const src2 = "images/firefox-icon-2.png";

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === src1) {
    myImage.setAttribute("src", src2);
  } else {
    myImage.setAttribute("src", src1);
  }
});

// ========================================================

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function initUserName() {
  const myName = prompt("Please enter your name.");
  if (myName) {
    setUserName(myName);
  } else {
    initUserName();
  }
}

function setUserName(name) {
  localStorage.setItem("name", name);
  myHeading.textContent = `Mozilla is cool, ${name}`;
}

if (!localStorage.getItem("name")) {
  initUserName();
} else {
  setUserName(localStorage.getItem("name"));
}

myButton.addEventListener("click", initUserName);
