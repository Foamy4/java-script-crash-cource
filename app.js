
 
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


let grades = [`FAIL`,]

let goodGrades = grades.filter(element => element !== `FAIL` )

console.log(goodGrades);
