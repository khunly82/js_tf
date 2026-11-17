# JavaScript - Cours de base et structures conditionnelles

Ce cours reprend les notions déjà vues et complète la base avec les structures conditionnelles, notamment les `if`, les ternaires, les opérateurs logiques courts et la gestion des valeurs nulles.

## Fichiers du cours

- [hello.js](./hello.js) : premier script JavaScript.
- [variables.js](./variables.js) : types, variables, opérateurs de calcul et conversion.
- [date.js](./date.js) : manipulation des dates.
- [conditional_structure.js](./conditional_structure.js) : logique conditionnelle et tests booléens.

## Chapitre 1 : Les variables et les types

Les variables servent à conserver des données dans le programme.

```js
let ma_super_variable
console.log(ma_super_variable) // undefined

ma_super_variable = 42
console.log(ma_super_variable) // 42
```

On a aussi testé :

```js
let nom = 'Khun LY'
let un_booleen = true
```

Les principaux types rencontrés sont :

- `string`
- `number`
- `boolean`
- `undefined`
- `null`

On peut vérifier le type avec :

```js
console.log(typeof(ma_super_variable)) // number
console.log(typeof(nom)) // string
console.log(typeof(un_booleen)) // boolean
```

## Chapitre 2 : Les conditions

Les conditions permettent d’exécuter un bloc de code seulement si une condition est vraie.

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

Les valeurs suivantes sont considérées comme fausses en JavaScript :

- `0`
- `''`
- `false`
- `null`
- `undefined`
- `NaN`

C’est pour cela que `if (v)` est très utile : il vérifie si une valeur est “truthy” ou “falsy”.

### Structure complète

```js
if (condition1) {
    // code 1
} else if (condition2) {
    // code 2
} else {
    // code 3
}
```

## Chapitre 3 : L’opérateur ternaire

Le ternaire est une écriture plus courte pour une condition.

```js
let age = 44
let age_type

age_type =
    age < 12 ? 'Enfant' :
    age < 18 ? 'Ado' :
    'Adulte'

console.log(age_type)
```

La syntaxe est :

```js
condition ? valeur_si_vrai : valeur_si_faux
```

Il est particulièrement pratique pour remplacer un `if` simple.

## Chapitre 4 : Les opérateurs logiques courts

### `&&` (et)

```js
let v = 'bonjour'
v && console.log('🧀')
```

Le code à droite ne s’exécute que si la condition de gauche est vraie.

### `||` (ou)

```js
let nom = null
console.log(nom || 'Nom n\'est pas défini')
```

`||` retourne la première valeur vraie, sinon la seconde.

### `??` (nullish coalescing)

```js
let nom = null
console.log(nom ?? 'Nom n\'est pas défini')
```

`??` est très utile pour gérer `null` et `undefined` sans considérer `0` ou `''` comme étant “vide”.

## Chapitre 5 : Les opérateurs de comparaison

On a vu plusieurs comparaisons :

```js
console.log(42 == 42) // true
console.log('42' == 42) // true
console.log(0 == false) // true

console.log('42' === 42) // false
console.log(0 === false) // false
```

### À retenir

- `==` compare avec conversion implicite
- `===` compare la valeur et le type

## Chapitre 6 : Les exercices proposés

### 1. Année bissextile

Une année est bissextile si elle est divisible par 4, sauf si elle est divisible par 100, sauf si elle est divisible par 400.

```js
let annee = 2000

if ((annee % 4 === 0 && annee % 100 !== 0) || annee % 400 === 0) {
    console.log('bissextile')
} else {
    console.log('pas bissextile')
}
```

### 2. Jour de la semaine

On a vu que l’on peut récupérer le jour actuel avec `getDay()` et ensuite afficher un libellé en français.

```js
let date = new Date()
let jour = date.getDay()
```

### 3. Calcul de l’âge

Le calcul de l’âge peut être amélioré en vérifiant si l’anniversaire est déjà passé dans l’année en cours.

```js
let aujourdhui = new Date()
let anniversaire = new Date(1982, 4, 6)
```

### 4. Registre national belge

C’est un exercice avancé de logique conditionnelle et de calcul. L’idée est de vérifier un format ou une règle selon la date et les calculs de modulo.

## Chapitre 7 : Les bases déjà vues avant les conditions

Avant d’aborder les conditions, on a aussi travaillé sur :

- les variables
- les types de données
- les opérateurs arithmétiques
- les chaînes de caractères
- les conversions (`parseInt`, `+x`, `toString`, `toFixed`)
- les arrondis (`Math.round`, `Math.floor`, `Math.ceil`)
- les objets `Date`

## Chapitre 8 : Ce qu’on a appris

À la fin de cette séance, on sait :

- créer et utiliser des variables
- vérifier les valeurs vraies ou fausses
- utiliser `if`, `else if` et `else`
- écrire des conditions courtes avec le ternaire
- utiliser `&&`, `||` et `??`
- appliquer des logiques de calcul sur des cas concrets
- structurer un raisonnement en fonction des données

## Chapitre 9 : Prochaine étape

La suite du cours pourra aborder :

- les boucles (`for`, `while`)
- les fonctions
- les tableaux (`array`)
- les objets
- les exercices plus avancés avec logique métier et dates

