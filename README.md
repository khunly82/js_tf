# JavaScript - Cours de base

Ce dossier suit l’ordre logique du cours :

1. [1_hello.js](./1_hello.js)
2. [2_variables.js](./2_variables.js)
3. [3_date.js](./3_date.js)
4. [4_conditional_structure.js](./4_conditional_structure.js)

## Chapitre 1 : Premier script

Le premier fichier montre comment afficher un message dans la console.

```js
console.log('hello world !!')
```

Cela permet de vérifier que le code s’exécute correctement et de commencer à comprendre le fonctionnement de JavaScript.

## Chapitre 2 : Les variables et les types

On apprend à stocker des valeurs dans des variables et à vérifier leur type.

```js
let ma_super_variable
console.log(ma_super_variable) // undefined

ma_super_variable = 42
console.log(ma_super_variable) // 42
```

### Types vus

- `string`
- `number`
- `boolean`
- `undefined`
- `null`
- `NaN`

### Exemple

```js
let une_autre_variable = 'Khun LY'
let un_booleen = true

console.log(typeof(une_autre_variable)) // string
console.log(typeof(un_booleen)) // boolean
```

## Chapitre 3 : Opérateurs et conversions

On a travaillé sur :

- les opérations mathématiques : `+`, `-`, `*`, `/`, `%`, `**`
- les arrondis : `Math.round()`, `Math.floor()`, `Math.ceil()`
- les opérateurs d’incrémentation : `++`, `--`, `+=`, `-=`
- les comparaisons : `==`, `===`, `<`, `>`
- la conversion : `parseInt()`, `+variable`, `toString()`, `toFixed()`

Exemple :

```js
let v2 = '42'
console.log(parseInt(v2) + 17) // 59
console.log(+v2 + 17) // 59

let pi = 3.1415
console.log(pi.toFixed(2)) // 3.14
```

## Chapitre 4 : Les dates

Le fichier [3_date.js](./3_date.js) introduit l’objet `Date`.

```js
let date = new Date()
console.log(date)
console.log(date.toLocaleString('fr-BE'))
```

### Ce qu’on a appris

- créer une date
- récupérer le jour, le mois, l’année
- modifier une date avec `setDate()`
- calculer un écart en jours

## Chapitre 5 : Les structures conditionnelles

Le fichier [4_conditional_structure.js](./4_conditional_structure.js) introduit les conditions.

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

### Opérateurs logiques courts

```js
let nom = null
console.log(nom ?? 'Nom n\'est pas défini')
```

On a aussi vu :

- `&&`
- `||`
- `??`
- les valeurs truthy / falsy

## Chapitre 6 : Exercices du cours

Les exercices abordés incluent :

- calcul de l’âge
- année bissextile
- numéro de jour de la semaine
- logique conditionnelle plus avancée

## Conclusion

Ce cours a permis de couvrir les bases de JavaScript :

- affichage dans la console
- variables et types
- opérations mathématiques
- dates
- conditions et logique

La prochaine étape logique sera :

- les boucles (`for`, `while`)
- les fonctions
- les tableaux
- les objets
