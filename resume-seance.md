# JavaScript - Chapitres de base

## Chapitre 1 : Les variables

Une variable est un conteneur qui permet de stocker une donnée pour la réutiliser plus tard.

```js
let ma_super_variable
console.log(ma_super_variable) // undefined

ma_super_variable = 42
console.log(ma_super_variable) // 42
```

### Exemple de variables

```js
let une_autre_variable = 'Khun LY'
let un_booleen = true
```

Dans cette séance, nous avons vu les types suivants :

- `string`
- `number`
- `boolean`
- `undefined`

Pour vérifier le type d’une valeur, on utilise `typeof()` :

```js
console.log(typeof(ma_super_variable)) // number
console.log(typeof(une_autre_variable)) // string
console.log(typeof(un_booleen)) // boolean
```

## Chapitre 2 : Les opérateurs

### Opérations arithmétiques

```js
console.log(42 + 41) // 83
console.log(42 - 41) // 1
console.log(42 * 2) // 84
console.log(42 / 2) // 21
console.log(3 % 2) // 1
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

### Comparaisons

```js
console.log(42 == 42) // true
console.log('42' == 42) // true
console.log('42' === 42) // false
```

On distingue :

- `==` : comparaison avec conversion implicite
- `===` : comparaison stricte sans conversion

## Chapitre 3 : Les booléens et les valeurs falsy

Les booléens servent à gérer des états logiques.

```js
console.log(!false) // true
console.log(!!true) // true
console.log(!!0) // false
console.log(!!42) // true
```

Les principales valeurs falsy sont :

- `0`
- `false`
- `''`
- `undefined`
- `null`
- `NaN`

## Chapitre 4 : Les chaînes de caractères

Une chaîne est un texte encadré par des guillemets ou des apostrophes.

```js
let nom = 'Khun'
console.log('Bonjour ' + nom)
console.log(`Bonjour ${nom}`)
```

### Template literals

Les backticks permettent d’insérer directement le contenu d’une variable :

```js
console.log(`☺${nom}♥`)
```

## Chapitre 5 : Les conversions de type

JavaScript sait convertir certaines valeurs automatiquement ou via des méthodes.

```js
let v2 = '42'
console.log(v2 + 17) // 4217
console.log(parseInt(v2) + 17) // 59
console.log(+v2 + 17) // 59
```

### Autres conversions

```js
let pi = 3.1415
console.log(pi.toFixed(2)) // 3.14
```

On a aussi vu que `toString()` permet de convertir un nombre en chaîne.

## Chapitre 6 : Les arrondis et le formatage

```js
let n = 27 / 2
console.log(Math.round(n)) // 14
console.log(Math.floor(n)) // 13
console.log(Math.ceil(n)) // 14
```

Le `padStart()` permet d’ajouter des zéros devant une valeur :

```js
console.log('5'.padStart(2, '0')) // 05
```

Cela est très pratique pour afficher une heure ou une date sous forme `HH:MM:SS`.

## Chapitre 7 : Les dates

L’objet `Date` est utilisé pour manipuler la date et l’heure.

```js
let date = new Date()
console.log(date)
console.log(date.toLocaleString('fr-BE'))
```

### Accéder à des éléments de date

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

## Chapitre 8 : Ce que nous avons appris

Nous avons abordé les bases de JavaScript :

- déclarer des variables
- manipuler les types de données
- utiliser les opérateurs
- comparer des valeurs
- travailler avec des chaînes de caractères
- convertir des données
- formater des nombres
- gérer des dates

## Chapitre 9 : Prochaine étape

Les notions à venir sont les suivantes :

- les conditions (`if`, `else`)
- les boucles (`for`, `while`)
- les fonctions
- les tableaux
- les objets

Ces chapitres permettront de passer des bases à la création de programmes plus complets.
