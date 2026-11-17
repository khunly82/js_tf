# JavaScript - Cours de base

Ce dossier regroupe les notions vues en cours : variables, conditions, opérateurs logiques, et calculs conditionnels.

## Fichiers du cours

- [hello.js](./hello.js) : premier script JavaScript.
- [variables.js](./variables.js) : variables, types, opérations et conversions.
- [date.js](./date.js) : manipulation des dates.
- [conditional_structure.js](./conditional_structure.js) : structures conditionnelles, ternaires, `&&`, `||`, `??`.

## Chapitre 1 : Les variables

Une variable permet de stocker une donnée afin de la réutiliser dans le programme.

```js
let ma_super_variable
console.log(ma_super_variable) // undefined

ma_super_variable = 42
console.log(ma_super_variable) // 42
```

### Types de base

```js
let nom = 'Khun LY'
let age = 44
let estConnecte = true
```

On a vu les types suivants :

- `string`
- `number`
- `boolean`
- `undefined`
- `null`

Vérification avec `typeof()` :

```js
console.log(typeof(age)) // number
console.log(typeof(nom)) // string
console.log(typeof(estConnecte)) // boolean
```

## Chapitre 2 : Les structures conditionnelles

Une condition permet de décider quoi faire selon une situation.

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

En JavaScript, certaines valeurs sont considérées comme fausses :

- `0`
- `''`
- `false`
- `null`
- `undefined`
- `NaN`

C’est pourquoi `if (v)` est une manière très simple de tester si une variable contient une valeur utile.

### Version complète

```js
if (cond1) {
    // faire qque chose
} else if (cond2) {
    // autre cas
} else {
    // cas final
}
```

## Chapitre 3 : Les opérateurs ternaires

Le ternaire permet d’écrire une condition de manière courte.

```js
let age = 44
let age_type

age_type =
    age < 12 ? 'Enfant' :
    age < 18 ? 'Ado' :
    'Adulte'

console.log(age_type) // Adulte
```

Le principe est :

```js
condition ? valeur_si_vrai : valeur_si_faux
```

## Chapitre 4 : Les opérateurs logiques courts

### `&&` (et)

```js
v && console.log('🧀')
```

Cela n’exécute `console.log()` que si `v` est vrai.

### `||` (ou)

```js
let nom = null
console.log(nom || 'Nom n\'est pas défini')
```

L’opérateur `||` retourne la première valeur vraie, sinon la seconde.

### `??` (nullish coalescing)

```js
let nom = null
console.log(nom ?? 'Nom n\'est pas défini')
```

`??` sert à gérer les valeurs `null` et `undefined` sans prendre en compte les autres valeurs fausses comme `0` ou `''`.

## Chapitre 5 : Les exercices et exemples du cours

### 1. Calcul de l’âge d’un voisin

On peut améliorer le calcul de l’âge en vérifiant si l’anniversaire est déjà passé dans l’année courante.

```js
let dateAujourdhui = new Date()
let anniversaire = new Date(1982, 4, 6)
```

Le but est de calculer si l’anniversaire est déjà passé ou non avant de déterminer l’âge exact.

### 2. Année bissextile

Une année est bissextile si :

- elle est divisible par 4,
- mais pas divisible par 100,
- sauf si elle est divisible par 400.

Exemples :

- 1997 → non bissextile
- 1996 → bissextile
- 1900 → non bissextile
- 2000 → bissextile

Exemple de structure :

```js
let annee = 2000

if ((annee % 4 === 0 && annee % 100 !== 0) || annee % 400 === 0) {
    console.log('bissextile')
} else {
    console.log('pas bissextile')
}
```

### 3. Jour de la semaine

On peut récupérer le jour de la semaine et l’afficher en français.

```js
let date = new Date()
let jour = date.getDay()
```

### 4. Numéro national belge

Le registre national belge est validé selon une logique spécifique. C’est un exercice de logique conditionnelle et de calcul mathématique.

## Chapitre 6 : Ce qu’on a appris

À la fin de ce module, on sait :

- déclarer des variables et manipuler leurs valeurs
- tester des conditions avec `if`, `else if`, `else`
- écrire des conditions courtes avec le ternaire
- exploiter `&&`, `||`, `??`
- distinguer les valeurs vraies et fausses
- écrire des algorithmes conditionnels simples

## Chapitre 7 : Prochaine étape

La suite du cours abordera :

- les boucles (`for`, `while`)
- les fonctions
- les tableaux
- les objets
- les méthodes de manipulation de chaînes et de dates

