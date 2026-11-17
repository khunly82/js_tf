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

// ameliorer le calcul de l'age du voison 
// en verifiant si son annif est passé ou non

// une année est bissexctile si elle est divisible par 4
// et qu'elle n'est pas divible par 100
// mais divisible par 400
// 1997 -> pas bissectile
// 1996 -> bissexctile
// 1900 -> pas bissexctile
// 2000 -> bissexctile

// créer une structure conditionnelle qui affichera
// bissexctile / pas bissexctile en fonction de l'année

// recupérer le jour de la semaine et afficher
// le jour en francais

// Bonus: vérifier si un registre nationnal belge est valide
// 82050620316 est valide car 97 - (820506203 % 97) = 16