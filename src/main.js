const menuBtn = document.querySelector(".header-button");
const closeMenuBtn = document.querySelector(".modal-close-btn");
const modalMemu = document.querySelector(".modal")
const modalMenuLinks = document.querySelectorAll(".modal-item-menu")
menuBtn.addEventListener("click", ()=>{
    modalMemu.classList.add("is-open")
})
closeMenuBtn.addEventListener("click", ()=>{
    modalMemu.classList.remove("is-open")
})

modalMenuLinks.forEach(value => {
    value.addEventListener("click", ()=>{
        modalMemu.classList.remove("is-open")
    })
})