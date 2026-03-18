// Variables
// const channelName = "WishInfinite"
// // channelName = "Youtube"
// console.log(channelName)

// let url = "wishinfinite.com"
// url = "www.wishinfinite.com"
// console.log(url)

//================================

// Data Types
// let title = `WishInfinite Youtube`
// console.log(title)

// let age = 5
// console.log(age)

// let isLoggedIn = false
// console.log(isLoggedIn)

// let users = ["Ram", "WishInfinite", "Elon"]
// console.log(users[1])

// const userDetails = {
//     username : "WishInfinite01",
//     password : "pass123",
//     age : 30
// }
// console.log(userDetails.username)
// console.log(userDetails.password)
// console.log(userDetails.age)

//====================================================

//Functions
// function sayHello(){
//     console.log("Hello")
// }

// sayHello()

// const sayHello2 = () =>{
//     console.log("Hello WishInfinite")
// }

// sayHello2()

// const sayHi = (nameValue, age) =>{
//     console.log(`Hi ${nameValue}`)
//     return age
// }
// // sayHi("Wish", 20)


// const getAge = ()=>{
//     const age = 20
//     return age
// }

// const ageVal  = getAge()
// console.log(ageVal)


//=========================================

//Arithmetic Operators
// console.log( 2 + 5)
// console.log( 7 - 3)
// console.log(5 * 7)
// console.log(10 / 3)
// console.log(10 % 2)

//==================================================

// Comparison Operators
// console.log(3 === 3)
// console.log(5 !== 6)
// console.log(86 > 72)
// console.log(73 < 9)
// console.log(73 >= 73)
// console.log(42 <= 8)
// console.log("WishInfinite" === "abc")

//===================================

//Logical Operators
// console.log(3 === 5 && 86>5)
// console.log(3 === 5 || 86>555)
// console.log(! (3 === 3))

//======================================

//Conditions (if / else)

// if(3 === 4){
//     console.log('Numbers are equal')
// }else{
//     console.log('Numbers are not equal')
// }

// const a = 30
// const b = "Test"

// if(a === b){
//     console.log('Numbers are equal')
// }else if(a > b){
//     console.log('Number a is greater')
// }else if(a < b){
//     console.log('Number b is greater')
// }else{
//     console.log('Invalid Condition')
// }

//========================================

//Loops

// for(let i=0; i<= 10; i++){
//     console.log("WishInfinite")
// }

// let users = ["Ram", "WishInfinite", "Tom", 20]

// for(const user of users){
//     console.log(user)
// }

//===================================

//Async & Await

// async function loadData() {
//   await fetch("https://example.com");
// }

//======================================================
//Claases , Methods, Objects and Constructors

// class LoginPage{
//     // a =20
//     constructor(company){
//         this.nameVal = "WishInfinite"
//         this.age = 18
//         this.company = company
//     }

//     login(){
//         console.log("Login Called")
//         console.log(`My Company is ${this.company}`)
//     }

//     sayHello(){

//     }

// }

// const loginPageObject = new LoginPage()
// loginPageObject.login()
// console.log(loginPageObject.age)
// console.log(loginPageObject.company)

// const loginPageObject2 = new LoginPage("YouTube")
// console.log(loginPageObject2.company)
// loginPageObject2.login()

// export default class PracticeImportExport{

//     learn(){
//         console.log('Learning JavaScript')
//     }
// }


const value = "Testing"
const str = 'WishInfinite ' + value + ' - Hi'
const str2 = "WishInfinite " + value + " - Hi"
const str3 = `WishInfinite ${value} - Hi`

console.log(str3)