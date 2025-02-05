// slå dig løs her... 

//eksempel på at udskrive alle overskrifter i services i konsollen:
services.forEach(service => console.log(service.headline))


let heroImg = document.createElement("div")
heroImg.classList.add("heroImg")
heroImg.innerHTML = `
<img src="${hero.image}" alt="lady in Steph rose (thats a colour i have proof)">
`

document.body.append(heroImg)

let exploreBox = document.createElement("div")
exploreBox.classList.add("exploreBox")
exploreBox.innerHTML = `
<h1>${hero.headline}</h1>
<p>${hero.copy}</p>
`

document.body.append(exploreBox)