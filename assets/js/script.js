// SELECT ELEMENTS 
const header = document.querySelector("header")
const scrollArrow = document.querySelector(".scroll-arrow")
const menuIcon = document.querySelector("#menu-icon")
const navBar = document.querySelector(".navbar")

// NORMAL SCROLL ON WINDOW
window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 0)
})

scrollArrow.addEventListener("click", function() {
    window.scrollTo(0, 0)
})

const hiddenArrow = () => {
    if(window.scrollY > 500) {
        scrollArrow.style.display = "inline-flex"
    }
    else {
        scrollArrow.style.display = "none"
    }
}
window.addEventListener("scroll", hiddenArrow)
hiddenArrow()

menuIcon.addEventListener("click", function() {
    navBar.classList.toggle("active")
    menuIcon.classList.toggle("bx-x")
})

window.addEventListener("scroll", function() {
    navBar.classList.remove("active")
    menuIcon.classList.remove("bx-x")
})

// ANIMATION SCROLL
const sr = ScrollReveal({
    distance: "60px",
    duration: 2500,
    reset: true
})

sr.reveal(".home-content", {delay: 200, origin: "left"})
sr.reveal(".home-image", {delay: 200, origin: "right"})

sr.reveal(".breakfast, .about, .menu, .contact", {delay: 200, origin: "bottom"})