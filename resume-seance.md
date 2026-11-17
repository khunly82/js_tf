# JavaScript - Cours complet par fichiers

Ce document reprend le cours dans l’ordre réel des exercices :

1. [1_hello.js](./1_hello.js)
2. [2_variables.js](./2_variables.js)
3. [3_date.js](./3_date.js)
4. [4_conditional_structure.js](./4_conditional_structure.js)

## Chapitre 1 : Premier script JavaScript

Le premier fichier affiche un simple message dans la console.

```js
console.log('hello world !!')
```

L’objectif ici est de vérifier que le code exécute bien et d’introduire la syntaxe minimale de JavaScript.

## Chapitre 2 : Les variables

Une variable sert à stocker une valeur.

```js
let ma_super_variable
console.log(ma_super_variable) // undefined

ma_super_variable = 42
console.log(ma_super_variable) // 42
```

### Déclaration et types

```js
let une_autre_variable = 'Khun LY'
let un_booleen = true

console.log(typeof(une_autre_variable)) // string
console.log(typeof(un_booleen)) // boolean
```

On a vu plusieurs types :

- `string`
- `number`
- `boolean`
- `undefined`
- `null`
- `NaN`

### Valeurs falsy

```js
console.log(!!0) // false
console.log(!!42) // true
console.log(!!NaN) // false
```

Les valeurs falsy comprennent :

- `0`
- `''`
- `false`
- `undefined`
- `null`
- `NaN`

## Chapitre 3 : Les opérateurs et le formatage

Le fichier [2_variables.js](./2_variables.js) contient les bases de la logique JavaScript.

### Opérations arithmétiques

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

### Incrémentation

```js
let v1 = 42
v1++
console.log(v1) // 43

v1 += 4
console.log(v1) // 47
```

### Concaténation et template strings

```js
let nom = 'Khun'
console.log('☺' + nom + '♥')
console.log(`☺${nom}♥`)
```

### Conversion

```js
let v2 = '42'
console.log(parseInt(v2) + 17) // 59
console.log(+v2 + 17) // 59

let pi = 3.1415
console.log(pi.toFixed(2)) // 3.14
```

## Chapitre 4 : Les dates

Le fichier [3_date.js](./3_date.js) permet de manipuler une date et de calculer des écarts entre dates.

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

On a aussi vu :

- `getDate()`
- `getMonth()`
- `getFullYear()`
- `getDay()`
- `setDate()`

### Exercices du fichier

- calcul approximatif de l’âge
- calcul du nombre de jours avant l’anniversaire
- calcul du temps restant avant la pause

## Chapitre 5 : Les structures conditionnelles

Le fichier [4_conditional_structure.js](./4_conditional_structure.js) introduit le cœur de la logique de programmation.

### `if` / `else`

```js
let v = ''

if (v) {
    console.log('🧀')
} else {
    console.log('🫒')
    console.log('🥚')
}
```

### Opérateur ternaire

```js
let age = 44
let age_type = age < 18 ? 'Mineur' : 'Majeur'
console.log(age_type)
```

### `??` et coalescing

```js
let nom = null
console.log(nom ?? 'Nom n\'est pas défini')
```

### Exercices du fichier

- année bissextile
- calcul de l’âge selon l’anniversaire
- récupération du jour de la semaine
- logique conditionnelle avancée

## Chapitre 6 : Ce qu’on a appris

Au terme de cette séance, nous avons vu :

- le fonctionnement de base de JavaScript
- les variables et les types
- les opérateurs mathématiques et logiques
- les conversions de types
- le formatage des valeurs
- l’objet `Date`
- les conditions et la logique booléenne

## Chapitre 7 : Prochaine étape

La suite logique du cours est :

- les boucles (`for`, `while`)
- les fonctions
- les tableaux
- les objets
- les projets plus concrets
