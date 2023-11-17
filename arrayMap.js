const array = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon']
const newArray=array.map(fruits=>{
if(fruits===' '){
   return  fruits='empty string'
}
else{
    return fruits
}
})
// console.log(`old array is ${array}`)
// console.log(`new array us ${newArray}`)

//spread operator - it is used to iterate through array
// 1-> objects and to copy elements of one array to other 
// const arr1=[1,2,3,4,5]
// const arr2=[...arr1]
// console.log(arr1)
// console.log(arr2)
// // although the value of arr1 and arr2 is same but they are not equal as the arr2 is refrencing to difference address in memory
// if(arr1===arr2){
//     console.log ('true')
    
// }
// else {
//     console.log ('false')
// }

// 2->add array to the other array
// const arr1=[2,3,4,5]
// const arr2=[0,1,...arr1,6,7]
// console.log(arr2)

//pass the argument as an array
// function add(a,b,c){
// const ans=a+b+c
// console.log(ans)
// }
// const arr1=[2,4,6]
// add(...arr1)

//4-> concate array (merge array)
// const  arr1=[1,2,3]
// const  arr2=[4,5,6]
// const arr3=[...arr1,...arr2]
// console.log(arr3)

//REST operator -> it is opposite of spread array , spread is used to spread the array wheares REST operator collects the different value and merege it to array
function multiply(multiplier,...nums){
  return nums.map(element=>{
    return multiplier*element
  })
}
//multiply 2 with 1,2,3
let ans=multiply(2,1,2,3)
console.log(ans)


//examples solve
// ans will be different object because both refrence to different address
// const obj1={'key1':1}
// const obj2={...obj1}
// if(obj1===obj2){
//     console.log('same object')
// }
// else{
//     console.log('different object')
// }

//example 2
// in obj2 the value of key1 will be 1000
const obj1 = {'key1': 1 , 'key2' : 2}

const obj2 = { ...obj1, key1: 1000}
console.log(obj1)

console.log(obj2)