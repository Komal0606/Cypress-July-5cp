// function createUserName(word){
//     let a = word.split(" ") // ["chinmay","deshpande"]
//     let b = a.map(function(el){  //['c','d']
//       return el[0]
//     })
//     let c = b.join("") //"cd"
//     return c
// }
// createUserName("chinmay deshpande")

let name = "Komal Palke"
let aa = name.split(" ") // ["komal", "palke"]
let aa1 = name.split("a")
console.log(aa)
console.log(aa1)
let bb = aa.map((el)=>{
    return el[0] // [ "k", "p"]
})
console.log(bb)

let cc = bb.join("") // kp
console.log(cc)