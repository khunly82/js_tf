# JavaScript - Cours complet

## Chapitre 1 — Premier script

### Objectif
Découvrir la syntaxe de base et vérifier que le code JavaScript s’exécute.

### Exemple
```js
console.log('hello world !!')
```

### À retenir
- `console.log()` affiche un message dans la console.
- C’est le plus simple moyen de tester un script.

---

## Chapitre 2 — Les variables

### Objectif
Comprendre comment stocker une valeur et savoir quel type elle a.

### Exemple
```js
let ma_super_variable
console.log(ma_super_variable) // undefined

ma_super_variable = 42
console.log(ma_super_variable) // 42
```

### Notions à retenir
- `let` permet de déclarer une variable.
- Une variable non assignée vaut `undefined`.
- On peut modifier sa valeur plus tard.

### Types de base vus
```js
let une_autre_variable = 'Khun LY'
let un_booleen = true

console.log(typeof(une_autre_variable)) // string
console.log(typeof(un_booleen)) // boolean
```

### Valeurs falsy
```js
console.log(!!0) // false
console.log(!!42) // true
console.log(!!NaN) // false
```

### Exercice
Définir une variable `nom`, puis afficher son type avec `typeof()`.

### Correction
```js
let nom = 'Khun'
console.log(typeof(nom)) // string
```

---

## Chapitre 3 — Opérateurs et conversions

### Objectif
Savoir effectuer des calculs, comparer des valeurs et convertir des données.

### Opérateurs arithmétiques
```js
console.log(42 + 41) // 83
console.log(42 - 41) // 1
console.log(42 * 2) // 84
console.log(42 / 2) // 21
console.log(3 % 2) // 1
console.log(2 ** 3) // 8
```

### Arrondis
```js
let n = 27 / 2
console.log(Math.round(n)) // 14
console.log(Math.floor(n)) // 13
console.log(Math.ceil(n)) // 14
```

### Concaténation
```js
console.log('hello' + 'world !') // helloworld !
console.log('1' + 42) // 142
```

### Template strings
```js
let nom = 'Khun'
console.log(`Bonjour ${nom}`)
```

### Conversion
```js
let v2 = '42'
console.log(parseInt(v2) + 17) // 59
console.log(+v2 + 17) // 59

let pi = 3.1415
console.log(pi.toFixed(2)) // 3.14
```

### À retenir
- `parseInt()` transforme une chaîne en nombre.
- `toFixed()` formate un nombre avec un nombre de décimales.
- Les backticks permettent d’écrire des chaînes dynamiques.

---

## Chapitre 4 — Les dates

### Objectif
Manipuler les dates et calculer rapidement des écarts en temps.

### Exemple
```js
let date = new Date()
console.log(date)
console.log(date.toLocaleString('fr-BE'))
```

### Méthodes importantes
```js
let annif = new Date(1982, 4, 6)
console.log(annif.getDate())
console.log(annif.getMonth())
console.log(annif.getFullYear())
console.log(annif.getDay())
```

### Exercice
Créer une date correspondant à l’anniversaire d’un voisin, puis calculer son âge approximatif.

### Correction
```js
let annif = new Date(1998, 10, 24)
let today = new Date()
let current_year = today.getFullYear()

console.log(`Votre voisin a ${current_year - annif.getFullYear()} ans`)
```

### À retenir
- `new Date()` crée une date.
- `getFullYear()`, `getMonth()`, `getDate()` permettent d’extraire des informations.
- `setDate()` modifie la date.

---

## Chapitre 5 — Les structures conditionnelles

### Objectif
Prendre des décisions selon des conditions.

### Exemple de base
```js
let v = ''

if (v) {
    console.log('🧀')
} else {
    console.log('🫒')
    console.log('🥚')
}
```

### Valeurs vraies et fausses
Les valeurs suivantes sont fausses en JavaScript :

- `0`
- `''`
- `false`
- `null`
- `undefined`
- `NaN`

### Opérateur ternaire
```js
let age = 44
let age_type = age < 18 ? 'Mineur' : 'Majeur'
console.log(age_type)
```

### `&&`, `||`, `??`
```js
let nom = null
console.log(nom ?? 'Nom n\'est pas défini')
```

### Exercice
Écrire une condition pour afficher si une année est bissextile.

### Correction
```js
let annee = 2000

if ((annee % 4 === 0 && annee % 100 !== 0) || annee % 400 === 0) {
    console.log('bissextile')
} else {
    console.log('pas bissextile')
}
```

### À retenir
- `if` permet de tester une condition.
- Le ternaire est une version courte.
- `??` sert à gérer `null` et `undefined`.

---

## Synthèse

Au terme de cette séquence, on sait :

- afficher des informations dans la console
- déclarer des variables et connaître leurs types
- effectuer des calculs
- manipuler des chaînes de caractères
- travailler avec des dates
- prendre des décisions avec des conditions

## Prochaine étape du cours

- les boucles (`for`, `while`)
- les fonctions
- les tableaux
- les objets
