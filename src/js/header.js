// export default function setMenuNavigation () {
//     const menuBtn = document.querySelector(".header-button");
// const closeMenuBtn = document.querySelector(".modal-close-btn");
// const modalMemu = document.querySelector(".modal")
// const modalMenuLinks = document.querySelectorAll(".modal-item-menu")
// menuBtn.addEventListener("click", ()=>{
//     modalMemu.classList.add("is-open")
// })
// closeMenuBtn.addEventListener("click", ()=>{
//     modalMemu.classList.remove("is-open")
// })

// modalMenuLinks.forEach(value => {
//     value.addEventListener("click", ()=>{
//         modalMemu.classList.remove("is-open")
//     })
// })
// }




// Selecting DOM elements
const btnHeaderMenu = document.querySelector(".header-button");

const btnModalClose = document.querySelector(".modal-close-btn");
const body = document.querySelector("body");
const backdrop = document.querySelector(".backdrop");
const sectionLinks = document.querySelectorAll(".modal-item-menu");
const contentModal = document.querySelector(".modal-content");
let isMouseOnModalClicked = false;


console.log(btnModalClose );
console.log(btnHeaderMenu );

const toggleModal =() =>{
  backdrop.classList.toggle("is-open");
  body.classList.toggle("is-scroll");
}

// Close modal when pressing Escape key
const closeModalByKey = (event) => {
  if (event.key === "Escape") {
    toggleModal();
  }
};

// Close modal when clicking on the backdrop
const closeModalByClickBackdrop = (event) => {
  if (!isMouseOnModalClicked && event.target.classList.contains("backdrop")) {
    toggleModal();
  }
};

// Track mouse click inside the modal content
const mouseClickDown = (event) => {
  if (event.target.closest(".modal-content")) {
    isMouseOnModalClicked = true;
  }
};

const mouseClickUp = () => {
  isMouseOnModalClicked = false;
};



// Adding event listeners
export const setupModalEventListeners = () => {

  sectionLinks.forEach((item) => {
    item.addEventListener("click", toggleModal);
  });
  btnHeaderMenu.addEventListener("click", toggleModal);
  btnModalClose.addEventListener("click", toggleModal);
  document.addEventListener("keydown", closeModalByKey );
  backdrop.addEventListener("click", closeModalByClickBackdrop);
  contentModal.addEventListener("mouseup", mouseClickUp);
  contentModal.addEventListener("mousedown", mouseClickDown);
}