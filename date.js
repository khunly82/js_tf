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
date_emprunt.setDate(
    date_emprunt.getDate() + 21
)

console.log(date_emprunt)

// 1. creer une date avec l'anniversaire 
// de votre voisin
// déterminer son age
// Bonus: le nombre de jours avant son annif

// 2. la pause est à midi // afficher il reste 
// x minutes avant la pause 