// DIFF B/W Public and Private and Protected

//public=> HAR JAGHA USE KAR SAKTE HAI CLASS ME BHI AUR KISI DUSRI CLASS ME BHI

// class BottleMaker{
//     constructor(public name:string){
       

//     }
// }
// class MetalBottleMaker extends BottleMaker{
//     constructor(name:string){
//         super(name)

//     }
//     getValue(){
//         console.log(this.name)
//     }
// }
// let obj1 = new MetalBottleMaker("LOHA")
//  console.log(obj)
// obj1.getValue()

// PRIVATE => JO CLASS PRIVATE HAI USSI ME HUM ACCESS KAR SAKTE HAI BAKKI KAHI NHI KAR SAKTE HAI

// class BottleMakerS{
//     constructor(private name:string){

//     }
   
// }
// class MetalBottleMakerS extends BottleMakerS{
//     constructor(name:string){
//         super(name)

//     }
//     getValueS(){
//         console.log(this.name)
//     }
// }
// let obj = new MetalBottleMakerS("LOHA")
//  console.log(obj)
// obj.getValueS()


///PROTECTED => JO CLASS PROTECTED HAI USME USE KAR SAKTE HAI AUR EXTENDED CLASS ME USE KAR SAKTE HAI

// class WaterBottle{
//     protected name = "AppleBottle"
// }


// class LohaBody extends WaterBottle{
// public material = "metal"

// changeName(){
//     this.name = "Cello"
//     console.log(this.name)
    
    
// }
// }
// let obj3 = new LohaBody();
// obj3.changeName()

//READONLY PRROPERTY

// class Animal{
//     constructor(public readonly name:string){

//     }
//     changeName(){
//         this.name = "Sherrr"
//     }
// }
// let a = new Animal("chittta")
// console.log(a)
// a.changeName()
// console.log(a)

//Getter Setter

// This get and set method we generally use in typescript

// class Car{
//     constructor(public _name:string,public age:number) {
        
//     }
//     get name(){
//   return this._name  
//     }
//     set name(value:string){
// this._name=value
//     }
// }
//  let a  =  new Car("Harsh",23)
// a.name="Jian"
// console.log(a.name)


//Static=>We can use our method without creating his instance 
 class School{
   static id =  2200
   static getRandomNumber(){
   return Math.random()
   }
 }
console.log( School.id,School.getRandomNumber())