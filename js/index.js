//eksempel på at udskrive alle overskrifter i services i konsollen:
services.forEach(service => console.log(service.headline))

/* Hero img */
let heroImg = document.createElement("div")
heroImg.classList.add("heroImg")
heroImg.innerHTML = `
<img src="${hero.image}" alt="lady in Steph rose (thats a colour i have proof)">
`
document.body.append(heroImg)
/* --- */


/* Explore box */
let exploreBox = document.createElement("div")
exploreBox.classList.add("exploreBox")
exploreBox.innerHTML = `
<h1>${hero.headline}</h1>
<p>${hero.copy}</p>
`
document.body.append(exploreBox)
/* --- */


/* HeroIcon */
let heroIcon = document.createElement("div")
heroIcon.classList.add("heroIcon")
heroIcon.innerHTML = `
<button>${hero.icon}</button>
`
document.body.append(heroIcon)