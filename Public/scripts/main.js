/*burger menu*/

const burgerMenuWrapper = document.querySelector(".burgerIcon__wrapper")
let bars = document.querySelectorAll(".bar")
const mobileNav = document.querySelector(".mobileNav")


burgerMenuWrapper.addEventListener("click", () => {

    bars.forEach((bar) => {
        bar.classList.toggle("active")
    })

    mobileNav.classList.toggle("active")

})

//BACK TO TOP ANCHOR------------------------------------------------------------    
const toTop = document.querySelector(".to__top")

//si on scroll vers le bas on affiche le bouton, sinon il disparait
window.addEventListener("scroll", () => {
    if(window.pageYOffset > 300) {
        toTop.classList.add("active")
    } else {
        toTop.classList.remove("active")
    }
})

/*coloration des liens nav actifs*/
const homeLinks = document.querySelectorAll('.homeLink')
const jobLinks = document.querySelectorAll(".job__link")
const techLinks = document.querySelectorAll(".tech__link")

if(location.search == "?page=accueil" || location.search == "") {
    homeLinks.forEach((homeLink) => {
        homeLink.style.color = "#93592b"
    })

} else {
    homeLinks.forEach((homeLink) => {
        homeLink.style.color = "#303030"
    })
}
if(location.search == "?page=paysan-boulanger") {
    jobLinks.forEach((jobLink) => {
        jobLink.style.color = "#93592b"
    })

} else {
    jobLinks.forEach((jobLink) => {
        jobLink.style.color = "#303030"
    })
}
if(location.search == "?page=techniques") {
    techLinks.forEach((techLink) => {
        techLink.style.color = "#93592b"
    })

} else {
    techLinks.forEach((techLink) => {
        techLink.style.color = "#303030"
    })
}

//sous menu paysan boulanger, mobileNav
const JobUnderMenu = document.querySelector(".job__under__menu")
const JobUnderMenuIcon = document.querySelector(".job__under__menu__icon")
let underMenuLinks = document.querySelectorAll(".job__under__menu a")

JobUnderMenuIcon.addEventListener("click", () => {
    JobUnderMenu.classList.toggle("active")
    JobUnderMenuIcon.classList.toggle("fa-angle-down")
    JobUnderMenuIcon.classList.toggle("fa-angle-up")
});

underMenuLinks.forEach((underMenuLink) => {
    underMenuLink.addEventListener("click", () => {
        bars.forEach((bar) => {
            bar.classList.toggle("active")
        })
        mobileNav.classList.toggle("active")
    })
})

const techUnderMenu = document.querySelector(".tech__under__menu")
const techUnderMenuIcon = document.querySelector(".tech__under__menu__icon")
let underMenuTechLinks = document.querySelectorAll(".tech__under__menu a")

techUnderMenuIcon.addEventListener("click", () => {
    techUnderMenu.classList.toggle("active")
    techUnderMenuIcon.classList.toggle("fa-angle-down")
    techUnderMenuIcon.classList.toggle("fa-angle-up")
});

underMenuTechLinks.forEach((underMenuTechLink) => {
    underMenuTechLink.addEventListener("click", () => {
        bars.forEach((bar) => {
            bar.classList.toggle("active")
        })
        mobileNav.classList.toggle("active")
    })
})






