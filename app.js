// for loop
 
// while(count <=100){
//     console.log(count)
//     count = count + 1;
// }



// for (let i =1; i<= 20; ++i) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log (` ${i} -> frontend simplified `)
//     }
//     else if (i % 3 === 0) {
//         console.log(`${i} -> frontend`)
//     }
//     else if ( i % 5 === 0) {
//         console.log (` ${i} -> simplified `)
//     }
//     else {
//         console.log (`${i} -> ${i}`)
//     }
    
// }



// for (let i = 1; i<= 20; ++i) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log(` ${i} frontend simplified`)
//     }
//     else if (i % 3 === 0) {
//         console.log( `${i} -> frrontend`)
//     }
//     else if ( i % 5 === 0 ) {
//         console.log( `${i} -> simplified`)
//     }
//     else {
//         console.log( ` ${i} -> ${i}`)
//     }
// }

// const str = ` frontend simplified`
 

// for (let i = 0; i < str.length; ++i) {
//     console.log(str[i])
// }


// function

// function WelcomePersonToFES (name){
//     console.log (`Welcome to frontend simplified, ${name}`)
// }

// WelcomePersonToFES (`David`)
// WelcomePersonToFES (`josh`)
// WelcomePersonToFES (`sam`)
// WelcomePersonToFES (`David`)


// function fn() {
//     return 5
//     console.log (`my function`)
// }

// console.log (fn());


// function SumOfTwoNumbers (num1, num2) {
//     return num1 / num2
// }

// console.log (SumOfTwoNumbers (10, 20));


// function convertcelciusToFahrenheit (num1, num2, num3){
//     return num1 * num2 + num3
// }
// console.log(convertcelciusToFahrenheit (30, 1.8, 32)) 


// function convertcelciusToFahrenheit (celsius){
//     return celsius * 1.8 + 32
//     return fahrenheit
// }
// console.log(convertcelciusToFahrenheit (0)) 
// console.log(convertcelciusToFahrenheit (10)) 
// console.log(convertcelciusToFahrenheit (30)) 


// const convertcelciusToFahrenheit = (celsius) => {
//     return celsius * 1.8 + 32
// }
// console.log(convertcelciusToFahrenheit (0)) 


// array 

// let item1 = 20
// let item2 = 30
// let item3 = 40
// let item4 = 50
// let item5 = 100


// let arr = [20, 30, 40, 50, 100]


// first element of array
// console.log(arr[0])


// // last Element of array 
// console.log(arr [arr.length - 1])

// // add element onto the end of array:
// arr.push(200)


// let newArr = arr.filter((element) => {
//     console.log(element)
//     if (element <= 50) {return true;
//     }
    
// })

// console.log(newArr)


// [20, 30, 40]
// let newArr = arr.filter(element => element < 50) 

// console.log(newArr)


// let grades = [`A+`, `A`, `FAIL`]

// // let newArr = arr.filter( element => element  = 'fail' )

// // console.log(newArr)  

// let goodGrades = grades.filter(element => element !== `FAIL` )

// console.log(goodGrades)

// let grades = [`FAIL`, `FAIL`, `B`,  ]

// let goodGrades = grades.filter(element => element !== `FAIL` )

// console.log(goodGrades);


// let grades = [`FAIL`,]

// let goodGrades = grades.filter(element => element !== `FAIL` )

// console.log(goodGrades);


// let grades = [`A+`, `A`, `FAIL`]

// for (let i = 0; i < grades.length; ++i) {
//     console.log(grades[i] );
// }



// let grades= [`A+`, `A`, `FAIL`]

// let goodGrades = []

// for (let i = 0; i < grades.length; ++i) {
//     if (grades[i] !== `FAIL`){
//         goodGrades.push(grades[i]);
//     }
//  }   

// console.log(goodGrades);  




// let arr = [1, 4, 9, 16]

// let newArray = arr.map((element) => {
//     console.log(element)
//     return undefined;
// })

// console.log(newArray)



// let arr = [1, 4, 9, 16]

// let newArray = arr.map(element => `dog`)

// console.log(newArray)


// let dollars = [1, 5, 10, 3];


// // let cents = dollars.map(element =>  element * 100)

// // console.log(cents)


// let cents = [];

// for (let i = 0; i < dollars.length; ++i) {
//     cents.push(dollars[i] * 100)
// }

// console.log(cents)

// objects

// let userFirstName = `David`
// let userLastName = `bragg`
// let userDiscord = `david Bragg#0001`
// let userSubscriptionStatus = `VIP`

// let user = {
//     username: `david`,
//     email: `david@frontend.com`,
//     subscriptionStatus: `VIP`,
//     discord: `david Bragg#0001`,
//     lessonsCompleted: [0, 1]
// }

// console.log(user.username [0])
// console.log(user.subscriptionStatus)
// console.log(user.lessonsCompleted.map((elem) => elem * 2)  )

// let users = [
//     {
//         username: `david`,
//         email: `david@frontend.com`,
//         password: `Test123`,
//         subscriptionStatus: `VIP`,
//         discord: `david Bragg#0001`,
//         lessonsCompleted: [0, 1]
//     },
//     {
//         username: `mitri`,
//         email: `mitri@frontend.com`,
//         password: `mitri123`, 
//         subscriptionStatus: `VIP`,
//         discord: `mitri#0001`,
//         lessonsCompleted: [0, 1, 2, 3]
//     }
// ]

// function login(email, password){
//     for (let i = 0;  i < users.length; ++i){
//       if (users[i].email === email);
//         console.log(users[i])
//         if (users[i].password === password) {
//             console.log(`log the user in- the details are correct`)
//         }
//         else {
//             console.log(`password is incorrect - try again`)
//         }
//         return;
//     }  
//     console.log(`could not find email that matches `)
// }

// login(`david@frontend.com`,`Test123` )



// function regester( user) {
//     user.push(user);
// }

// regester({  
// username: `joshua`, 
// email: `joshua@email.com`, 
// password: `joshua101`, 
// subscriptionStatus: `VIP`, 
// discordId: `joshua#1000` , 
// lessonsCompleted: [0, 1, 2, 3] 
// });

// console.log(users);


// console.log(document.querySelector(`.title`));

// console.log(document.getElementById(`title`))


// document.querySelector(`.title`) .innerHTML =`frontend simplified`

// document.querySelector(`.title`).style.fontSize = `16px`

// function changeTitleToRed(){
//     console.log(`clicked`);
// }

// function changeTitleToRed(){
//     document.querySelector(".title").style.color =`red`

// }


function toggleDarkMode() {
document.querySelector(`body`).classList.toggle("dark-theme");
}