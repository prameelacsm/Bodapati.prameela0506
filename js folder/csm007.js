
console.log("Try programiz.pro");

let str = "Hola soy un string"
console.log(str.length)

let slice_str = str.slice(5,10)
console.log(slice_str)

let substring_str = str.substring(5,10)
console.log(substring_str)

let substr_str  = str.substr(5,10)
console.log(substr_str)

let cadena = "Hola mi nombre es Gorka"
console.log(cadena)

console.log(cadena.replace('Gorka', 'Miguel'))

let texto_largo  = "Tito is not a mono cualquie. A Tito doesn't like climbing "

console.log(texto_largo.replace('climbing', 'eating'))

console.log(texto_largo.replace(/climbing/g, 'eating'))

let input = "ESCORpio"
let db = "escorpio"

console.log(input.toLowerCase())
console.log(input.toUpperCase())
console.log(input.toLowerCase() === db.toLowerCase())
console.log(input.toUpperCase() === db.toUpperCase())

let str_1 = "Hola soy la primera cadena."
let str_2 = "Y yo soy la segunda cadena."

console.log(str_1.concat(" ", str_2))
console.log(str_1 + " " + str_2)
console.log('${str_1} ${str_2}')

let str_3 = "   Hola soy un string con espacios al final.   "
console.log(str_3.length)

console.log(str_3.trim().length)
console.log(str_3.trimStart().length)
console.log(str_3.trimEnd().length)

let str_4 = "Hola soy el string numero 4" // ["H", "o", "l", "a", " ", "s"....... .]

console.log(str_4.charAt(5))
console.log(str_4[5])

let str_5 = "Hola soy Gorka y me gusta el surf. Mi nombre es Gorka y mi apellido es villar"
console.log(str_5.indexOf("Gorka"))
console.log(str_5.charAt(9))
console.log(str_5.lastIndexOf("Gorka"))
