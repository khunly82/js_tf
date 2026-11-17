# JavaScript - Cours de base

Ce dossier contient une introduction aux bases du JavaScript, organisée en chapitres pour faciliter l’apprentissage.

## Fichiers du cours

- [hello.js](./hello.js) : premier script, affichage dans la console.
- [variables.js](./variables.js) : variables, types, opérateurs et logique de base.
- [date.js](./date.js) : manipulation des dates et des calculs de temps.

## Chapitre 1 : Les variables

Une variable sert à stocker une information afin de la réutiliser dans le programme.

```js
let ma_super_variable
console.log(ma_super_variable) // undefined

ma_super_variable = 42
console.log(ma_super_variable) // 42
```

### Déclaration et affectation

- `let` permet de déclarer une variable.
- Une variable peut être déclarée puis affectée plus tard.
- Si elle n’a pas encore de valeur, elle vaut `undefined`.

### Types de base

```js
let nom = 'Khun'
let age = 42
let estConnecte = true
```

Les types vus :

- `string`
- `number`
- `boolean`
- `undefined`

Pour vérifier un type, on utilise `typeof()` :

```js
console.log(typeof(age)) // number
console.log(typeof(nom)) // string
console.log(typeof(estConnecte)) // boolean
```

## Chapitre 2 : Les opérateurs

### Opérateurs arithmétiques

```js
console.log(42 + 41) // 83
console.log(42 - 41) // 1
console.log(42 * 2) // 84
console.log(42 / 2) // 21
console.log(3 % 2) // 1
console.log(2 ** 3) // 8
```

### Opérateurs d’incrémentation

```js
let v1 = 42
v1++
console.log(v1) // 43

v1 += 4
console.log(v1) // 47

v1--
console.log(v1) // 46
```

### Opérateurs de comparaison

```js
console.log(45 < 2) // false
console.log(42 == 42) // true
console.log('42' == 42) // true
console.log('42' === 42) // false
```

- `==` compare en convertissant les types
- `===` compare aussi le type

## Chapitre 3 : Les valeurs booléennes et les valeurs falsy

Certaines valeurs sont considérées comme fausses dans un contexte logique.

```js
console.log(!false) // true
console.log(!!0) // false
console.log(!!42) // true
console.log(!!NaN) // false
```

Les valeurs falsy courantes :

- `0`
- `false`
- `''`
- `undefined`
- `null`
- `NaN`

## Chapitre 4 : Les chaînes de caractères

Les chaînes de caractères peuvent être concaténées ou interpolées.

```js
let nom = 'Khun'
console.log('Bonjour ' + nom)
console.log(`Bonjour ${nom}`)
```

### Concaténation

```js
console.log('hello' + 'world !')
console.log('1' + 42) // 142
```

### Template strings

Les backticks permettent d’injecter une variable directement dans une chaîne :

```js
console.log(`☺${nom}♥`)
```

## Chapitre 5 : Les conversions

JavaScript permet de convertir des valeurs selon les besoins.

### Conversion de chaîne en nombre

```js
let v2 = '42'
console.log(parseInt(v2) + 17) // 59
console.log(+v2 + 17) // 59
```

### Conversion en chaîne

```js
let v5 = 42
console.log(v5.toString() + 1)
```

### Arrondi

```js
let n = 27 / 2
console.log(Math.round(n)) // 14
console.log(Math.floor(n)) // 13
console.log(Math.ceil(n)) // 14
```

## Chapitre 6 : Le formatage des nombres

On peut formatter les valeurs pour obtenir un affichage plus propre.

```js
console.log('5'.padStart(2, '0')) // 05
```

Ce système est très utile pour afficher des heures, des minutes ou des secondes au format `00`.

## Chapitre 7 : Les dates

JavaScript contient un objet `Date` pour gérer les dates et l’heure.

```js
let date = new Date()
console.log(date)
console.log(date.toLocaleString('fr-BE'))
```

### Obtenir des éléments d’une date

```js
let annif = new Date(1982, 4, 6)
console.log(annif.getDate())
console.log(annif.getMonth())
console.log(annif.getFullYear())
console.log(annif.getDay())
```

### Modifier une date

```js
let date_emprunt = new Date(2027, 1, 24)
date_emprunt.setDate(date_emprunt.getDate() + 21)
console.log(date_emprunt)
```

## Chapitre 8 : Ce qu’on a appris

À la fin de cette séance, on sait :

- créer et utiliser des variables
- identifier les principaux types de données
- utiliser les opérateurs de calcul et de comparaison
- comprendre les valeurs vrai / faux
- manipuler les chaînes de caractères
- convertir des valeurs
- formater des nombres et des dates

## Chapitre 9 : Suite du cours

La suite logique du cours abordera :

- les conditions (`if`, `else`)
- les boucles (`for`, `while`)
- les fonctions
- les tableaux (`array`)
- les objets

C’est la prochaine étape pour passer des bases à la programmation plus avancée.
