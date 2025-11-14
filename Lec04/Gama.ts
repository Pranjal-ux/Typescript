class Student{
    name  = "Niranjan";
    age = 19;
    city = "Lucknow";
}
let S1 = new Student();
let S2 = new Student();
console.log(S1)
console.log(S2)

// Constructor

// Example => 1

class Humans{
    age=0
    constructor(public name:string, public Year:number){

    }
}
let obj = new Humans("Pranjal",2005)
console.log(obj)
let a = new Humans("Harsh",2006)
console.log(a)

// Example=>2

class BottleMaker{
    constructor(public brand:string,public price:number,public color:string){

    }
}
let obj2 =  new BottleMaker("Milton",1200,"white")
console.log(obj2)
let obj1 =  new BottleMaker("Cello",1300,"blue")
console.log(obj1)
