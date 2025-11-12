"use strict";
// Prmitives and Refrence
Object.defineProperty(exports, "__esModule", { value: true });
//Refrence => {} [] () jaha ye bracket aagaye usse hmm refrence bolenge ge
//Premitive types(number,string,boolean)
//   let b = 10;
//  let c = "sting"
//  let d = true
//Array
let a = [1, 3, 4, 5, 6, "harsh"];
//Tuples => konsi jagh per konsi value aayegi ye phele hi bata deta hai
let b = ["pra", 33];
//enum => inme predefined data hote hai
var UserRole;
(function (UserRole) {
    UserRole["ADMIN"] = "Pranjal";
    UserRole["Guest"] = "guest";
    UserRole["Super_Admin"] = "super_admin";
})(UserRole || (UserRole = {}));
UserRole.ADMIN;
//Any , Unknown , Void , Null, Undefined,Never
//Any => type batana pehle se agar koi type nhi hoga toh woh any type hoga
//NOTE => Makesure karna hai ki koi bhi data any na ho
let v;
v = 12;
//Void => Function kuch bhi return na kere toh woh void funcion hoga
function abs() {
    console.log("hello");
}
//# sourceMappingURL=app.js.map