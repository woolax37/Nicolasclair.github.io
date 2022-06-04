const nav = document.querySelector("header");
const footer = document.querySelector("footer");
let lastScroll = 0;

// Section toogle burger menu
function toggle() {
  var header = document.getElementById("header");
  header.classList.toggle("active");
}

// Section scroll navbar
window.addEventListener("scroll", () => {
  if (window.scrollY < lastScroll) {
    nav.style.top = "0";
  } else {
    nav.style.top = "-100px";
  }

  lastScroll = window.scrollY;
  // console.log(lastScroll);
});

// Section dark mode/ light mode // variables

const switchBox = document.querySelector(".switch");
// console.log(switchBox);

const btn = document.querySelector(".btn");
// console.log(btn);

const icone = document.querySelector("#icone");
// console.log(icone);

const accueil = document.getElementById("accueil");

const projet = document.getElementById("projet");

const formation = document.getElementById("formation");

const contact = document.getElementById("contact");

// toggle pour dark/light mode

switchBox.addEventListener("click", function () {
  btn.classList.toggle("btn-change");
  icone.classList.toggle("icone-change");
  icone.classList.toggle("fa-sun");
  switchBox.classList.toggle("switch-change");
  accueil.classList.toggle("section-change");
  projet.classList.toggle("section-change");
  formation.classList.toggle("section-changetwo");
  contact.classList.toggle("section-changetwo");
  nav.classList.toggle("section-changetwo");
  footer.classList.toggle("section-changetwo");
});
