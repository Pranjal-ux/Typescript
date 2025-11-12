 //Interface
interface User{
    name: string,
    email: string,
    password:number
    gender?:string  // question-mark mean optional hai batana ho toh warna mate batao
}
 function abc(obj:User) {
obj.name
 }
 abc({name:"Harsh",email:"lodu@gand.com",password:10})

 //Extend Interface

 interface Developer{
    id:number
    age:number
    experience:number
 }
 interface Admin extends Developer{
Admin:string
 }
 function harsh(obj:Admin) {
    obj.Admin
    
 }
 
 //Type alias => type assign karna apne hishab se
 type value  =  string | number | null
  let a : value

  // | => This is called union

  //Intersection Type
type User1 = {
    name: string
    age:number
}
type Admin1 = User1 &{
    getDetails(user:string):void
}
function Jian(obj:Admin1) {
    obj.getDetails
}

// Basis diff b/w Interface and Intersection Type
 
// In interface this is allow
 
//Interface merge it 

// interface abc = string
// interface abc = number


// type show error

// type abc = string
// type abc = number
