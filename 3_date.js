let date = new Date() // date du jour
console.log(date)

console.log(date.toLocaleString('fr-BE'))

let annif = new Date(1982, 4, 6) // 06/05/1982
console.log(annif)
console.log(annif.toDateString())

console.log(annif.getMonth()) // le mois de l'annif
console.log(annif.getDate()) 
// le jour du mois de l'annif // 06
console.log(annif.getDay()) // le jour de la semaine

console.log(annif.getFullYear()) // donne l'année de naissance

let date_emprunt = new Date(2027, 1, 24)
let date_retour = date_emprunt
date_retour.setDate(
    date_retour.getDate() + 21
)

console.log(date_emprunt)
console.log(date_retour)

// 1. creer une date avec l'anniversaire 
// de votre voisin
// déterminer son age (aproximatif)
// Bonus: le nombre de jours avant son annif

annif = new Date(1998, 10, 24)
let today = new Date()
let current_year = today.getFullYear()

console.log(`Votre voisin a ${current_year - annif.getFullYear()} ans`)

let future_bd = annif
future_bd.setFullYear(2026)

let diff = annif - today
let nbJours = Math.ceil(diff / 1000 / 60 / 60 / 24)
console.log(`l'annif de votre voisin est dans ${nbJours} jours`)

// 2. les pauses sont à 12h / 15h // afficher il reste 
// x minutes avant la prochaine pause

const BREAK_TIME = 15
let current_hour = today.getHours()
let current_minutes = today.getMinutes()

let remaining = (BREAK_TIME - current_hour) * 60 - current_minutes
console.log(`Il reste ${remaining} minutes avant la pause`)
