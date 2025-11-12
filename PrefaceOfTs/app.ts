// Prmitives and Refrence

//Refrence => {} [] () jaha ye bracket aagaye usse hmm refrence bolenge ge

//Premitive types(number,string,boolean)
//   let b = 10;
//  let c = "sting"
//  let d = true
//Array
 let a = [1,3,4,5,6,"harsh"]

 //Tuples => konsi jagh per konsi value aayegi ye phele hi bata deta hai
  let b :[string,number] = ["pra",33]

  //enum => inme predefined data hote hai
  enum UserRole{
    ADMIN = "Pranjal",
    Guest = "guest",
    Super_Admin = "super_admin"
  }
  UserRole.ADMIN

  //Any , Unknown , Void , Null, Undefined,Never

  //Any => type batana pehle se agar koi type nhi hoga toh woh any type hoga
  //NOTE => Makesure karna hai ki koi bhi data any na ho
  let v: number;
 v = 12

 //Void => Function kuch bhi return na kere toh woh void funcion hoga
 function abs():void {
    console.log("hello")
 }