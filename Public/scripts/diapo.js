const slides = document.querySelectorAll(".slide")
const nbSlides = slides.length
const next = document.querySelector(".fa-arrow-right-long")
const previous = document.querySelector(".fa-arrow-left-long")
const pointers = document.querySelectorAll(".fa-circle")


let counter = 0

function nextSlide() {
    slides[counter].classList.remove('active')
    pointers[counter].classList.remove("active")
    if(counter < nbSlides - 1) {
        counter ++
    } else {
        counter = 0
    }

    slides[counter].classList.add('active')
    pointers[counter].classList.add("active")
}

function previousSlide() {
    slides[counter].classList.remove('active')
    pointers[counter].classList.remove("active")
    if(counter > 0) {
        counter --
    } else {
        counter = nbSlides - 1
    }

    slides[counter].classList.add('active')
    pointers[counter].classList.add("active")
}

next.addEventListener("click", nextSlide)
previous.addEventListener("click", previousSlide)