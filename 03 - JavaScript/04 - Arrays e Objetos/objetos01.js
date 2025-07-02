const obj1 = {
    nome: "Guilherme",
    idade: 20
}
const obj2 = new Object()
obj2.nome = "Guilherme"
obj2["idade"] = 20
console.log(obj1)
console.log(obj2)

const str1 = "minha string"
const str2 = new String("minha string")
console.log(str1)
console.log(str2)

const date1 = Date()
const date2 = new Date()
console.log(date1)
console.log(date2)
console.log(typeof date1)
console.log(typeof date2)