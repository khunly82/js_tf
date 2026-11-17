/*
if(cond) {
    // faire qque chose
} else if(autreCond) {
    // faire encore autre chose
} else {
    // faire autre chose
}
*/

let v = ''

// if(v != '' && v != 0 && v != false && v != null && v != undefined && v != NaN) {
if(v) {
    console.log('🧀')
} else {
    console.log('🫒')
    console.log('🥚')
}

// v&&console.log('🧀')
// !v&&console.log('🫒')

let age = 44
let age_type

// if(age < 18) { age_type = 'Mineur' }
// else { age_type = 'Majeur' }

// operateur ternaire
age_type = 
    age < 12 ? 'Enfant' : 
    age < 18 ? 'Ado' :
    'Adulte'

console.log(age_type)


// coalesce
let nom = null
console.log(nom ? nom : 'Nom n\'est pas défini')
console.log(nom ?? 'Nom n\'est pas défini')

// ameliorer le calcul de l'age du voisin 
// en verifiant si son annif est passé ou non

let bd = new Date(1998, 10, 24)
let today = new Date()
let current_year = today.getFullYear()
let annif = new Date(current_year, 10, 24)
let ageVoisin = current_year - bd.getFullYear()
if(today < annif) {
    ageVoisin--
}

console.log(ageVoisin)

// une année est bissexctile si elle est divisible par 4
// et qu'elle n'est pas divible par 100
// mais divisible par 400
// 1997 -> pas bissectile
// 1996 -> bissexctile
// 1900 -> pas bissexctile
// 2000 -> bissexctile

let y = 2400

if(y % 4 === 0 && (y % 100 !== 0 || y % 400 === 0)) {
    console.log('Bissexctile');
} else {
    console.log('Pas Bissexctile');
}

// créer une structure conditionnelle qui affichera
// bissexctile / pas bissexctile en fonction de l'année

// recupérer le jour de la semaine et afficher
// le jour en francais

let day = today.getDay()

switch(day) {
    case 1:
        console.log('Lundi')
        break
    case 2:
        console.log('Mardi')
        break
    case 3:
        console.log('Mercredi')
        break
    case 4:
        console.log('Jeudi')
        break
    case 5:
        console.log('Vendredi')
        break
    case 6:
        console.log('Samedi')
        break
    case 0:
        console.log('Dimanche')
        break
    default:
        console.log('Ca n\'existe pas')
        break
}

// Bonus: vérifier si un registre nationnal belge est valide
// 82050620316 est valide car 97 - (820506203 % 97) = 16 si avant 2000
// 82050620316 est valide car 97 - (2820506203 % 97) = 16 si apres 2000

let ssn = '07041637102'
let control = ssn.slice(-2)
let toControl = ssn.slice(0, 9)
if (97 - +toControl % 97 == control) {
    console.log('valide')
} else if (97 - +('2' + toControl) % 97 == control) {
    console.log('valide')
} else {
    console.log('invalide')
}

console.log('sel,poivre,sucre'.split(',')) 