//Basic implementation of generics

function abc<T>(a:T){

}
abc<string>("halua")
abc<number>(12)
abc<boolean>(true)

//Interface generic

interface Kalu <T>{
name:string,
age:number,
key:T
}
function ab(arg:Kalu<string>) {
    
}
ab({name:"Golu",age:12,key:"ywgvfywgfy"})
console.log(ab)

//Class generic

class Bottlemaker<T>{
    constructor(public key:T){

    }
}
let a = new Bottlemaker<string>("hey")
let b = new Bottlemaker<number>(26)
console.log(b)