
const card = document.querySelector(".card");
const container = document.querySelector(".container");

const title = document.querySelector(".title");
const profile = document.querySelector(".profile img");
const contact = document.querySelector(".contact");
const description = document.querySelector(".info h3");
const skills = document.querySelector(".skills");


container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 30;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 30;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//Ani In
container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  title.style.transform = "translateZ(150px)";
  profile.style.transform = "translateZ(200px)";
  description.style.transform = "translateZ(125px)";
  skills.style.transform = "translateZ(100px)";
  contact.style.transform = "translateZ(75px)";
});

//Ani Out
container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;

  //Reset everything
  title.style.transform = "translateZ(0px)";
  profile.style.transform = "translateZ(0px)";
  description.style.transform = "translateZ(0px)";
  skills.style.transform = "translateZ(0px)";
  contact.style.transform = "translateZ(0px)";
});