function abcd(name:string,age:number,cb:(args:string)=>void) {
cb("uagfyy")
}
abcd("Pranjal",23,(args:string)=>{
    console.log("Hello")
})

function OptionalParams(name:string,age:number,gender?:string) { // This is the example of optional function

    
}
OptionalParams("Harsh",23,"Male")//Normal calling function
OptionalParams("Harsh",23)//Normal calling function

//  Rest operator

// function sum(...arr:number[]) {
//     console.log(arr[1])
// }
// sum(1,23,3,34,3,44354,54545,4,5,6,3)

//Spread operator

let val1 = [1,3,3,4,56,7,8]
let val2 =[...val1]//Spread operator
console.log(val2)

//Fucntion Overloading 

function abc(name:string):void;
function abc(name:string,age:number):number;

function abc(name:any,age?:any) {
    if (typeof name==="string"&&typeof age===undefined) {
        console.log("Phela chala")
        
    }
    if (typeof name==="string"&&typeof age==="number") {
        return 123;
    }
    else throw new Error("Something is wrong");
    
}
