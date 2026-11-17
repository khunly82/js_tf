let ma_super_variable
console.log(ma_super_variable) // undefined (non définie)

ma_super_variable = 42

console.log(ma_super_variable) // 42
console.log(typeof(ma_super_variable)) // number

// console.log((0.1 * 3).toFixed(2)) //0.

// simple commentaire
/*
un commentaire sur
plusieurs ligne
*/

let une_autre_variable = 'Khun LY'
console.log(typeof(une_autre_variable)) // string

let un_booleen = true
console.log(typeof(un_booleen)) // boolean

console.log(!true) // false
console.log(!!true) // true

// 0 est falsy

console.log(!!0) // false
console.log(!!42) // true

// '' est falsy
// undefined est falsy
// null est falsy
// NaN est falsy

console.log(!!NaN) // false


// operateurs binaires

console.log(42 + 41) // 83
console.log(42 - 41) // 1
console.log(42 * 2) // 84
console.log(42 / 2) // 21
console.log(42 / 0) // infinity
console.log(2 ** 3) // 2³ = 8
// modulo -> reste de la division par 2
console.log(3 % 2) // 1

let nombre = 888888 // represente un certain nombre de secondes
// déterminer le nombre de jours, d'heures, de minutes et de secondes
// 10j 6h 54m 48s

// 122 // 0j 0h 2m 2s
// 7322 // 0j 2h 2m 2s

let n = 27 / 2 // 13.5
console.log(Math.round(n)) // arrondir au plus proche 14
console.log(Math.floor(n)) // arrondir vers le bas 13
console.log(Math.ceil(n)) // arrondir vers le haut 14

// Bonus: afficher 10:06:54:48 // hint: padStart

// correction 

let secondes = nombre % 60
console.log(secondes)

let minutesTotales = (nombre - secondes) / 60
let minutesTotales2 = Math.floor(nombre / 60)
console.log(minutesTotales)
console.log(minutesTotales2)
let minutes = minutesTotales % 60
console.log(minutes)

let heuresTotales = (minutesTotales - minutes) / 60
let heures = heuresTotales % 24

let jours = (heuresTotales - heures) / 24

console.log('hello' + 'world !') // helloworld !
console.log('1' + 42) // 142
console.log(1 + 42) // 43

console.log(
    jours.toString().padStart(2, '0') 
    + ':' + heures.toString().padStart(2, '0') 
    + ':' + minutes.toString().padStart(2, '0') 
    + ':' + secondes.toString().padStart(2, '0')
)

let nom = 'Khun'
console.log('☺' + nom + '♥') // ☺khun♥
console.log(`☺${nom}♥`)

console.log(`
    ${jours.toString().padStart(2, '0')}:${heures.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secondes.toString().padStart(2, '0')}`
)

