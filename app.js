const menuIcon = document.getElementById("menuIcon");
const closeIcon = document.getElementById("closeIcon");
const nav = document.querySelector(".nav");

menuIcon.addEventListener("click", () => {
  nav.classList.add("active"); // Add active class to show nav
  menuIcon.style.display = "none"; // Hide hamburger
  closeIcon.style.display = "block"; // Show close icon
});

closeIcon.addEventListener("click", () => {
  nav.classList.remove("active"); // Remove active class to hide nav
  menuIcon.style.display = "block"; // Show hamburger
  closeIcon.style.display = "none"; // Hide close icon
});

const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const showAllButton = document.querySelector(".show-all");
const cards = document.querySelector(".cards-job");
let offset = 0;
const card = cards.children[0];
const cardwidth = card.offsetWidth;

const gap = parseFloat(getComputedStyle(cards).gap);
const cardWidth = cardwidth + gap;

const updateTransform = () => {
  cards.style.transform = `translateX(${offset}px)`;
  updateArrowState();
};

const updateArrowState = () => {
  if (cards.classList.contains("wrap")) {
    leftArrow.removeEventListener("click", handleLeftArrowClick);
    rightArrow.removeEventListener("click", handleRightArrowClick);
  } else {
    if (!leftArrow.classList.contains("disabled")) {
      leftArrow.addEventListener("click", handleLeftArrowClick);
    }
    if (!rightArrow.classList.contains("disabled")) {
      rightArrow.addEventListener("click", handleRightArrowClick);
    }
  }
};

const handleRightArrowClick = () => {
  offset -= cardWidth;
  if (offset <= -(cards.children.length * cardWidth)) {
    offset = 0;
  }
  updateTransform();
};

const handleLeftArrowClick = () => {
  offset += cardWidth;
  if (offset > 0) {
    offset = -((cards.children.length - 1) * cardWidth);
  }
  updateTransform();
};

showAllButton.addEventListener("click", () => {
  cards.classList.toggle("wrap");
  leftArrow.classList.toggle("disabled");
  rightArrow.classList.toggle("disabled");
  offset = 0;
  updateTransform();
});

updateArrowState();
