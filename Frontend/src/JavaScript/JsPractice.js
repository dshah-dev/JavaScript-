// console.log([]+{});
// console.log([]+{});

const obj ={
    Name:"Dhaval",
    Age:21,
    cgpa:8.33
};
// console.log(obj);
obj['cgpa'] = 9.3;
// console.log(obj.Name);
// console.log(obj["cgpa"]);

const product ={
    name:"pen",
    rating:4,
    offer:5+'%',
    price:200 }
// console.log(product)
// console.log(typeof(product['offer']))

let age=16;
// age>=18 ? console.log("Adult"):console.log("Not Adult");

// using `` , it is called string interpolation 
// let backtech = console.log(`product is ${product.name} and its price is ${product.price} rupees`)

//Q) convert name to username as @name4

// const str=prompt("Enter your name");
// console.log(`@${str+str.length}`);


// Array

let num=[11,21,31,45,55];
// console.log(num);
let arr2=num.splice(0,2,101,201);
// console.log(arr2);
// console.log(num);

// Q) remove 1 element , renive rebdom element and add something in its placr , add at end.
let arr=['google','microsoft','uber','ibm','netflix'];
// console.log(arr);
// arr.shift();
// console.log(arr);
// arr.splice(1,1,"Ola");
// console.log(arr);
// arr.push("Amozon");
// console.log(arr);


// Function
// Q count vowel
let str='Hello ji';
let count=0;
function findvowel(str){
    for(let i of str){

        if(i === 'a'||i==='e'||i==='i'||i==='o'||i==='u'){
            count++;
        }
    }
    return console.log(count);
}
// findvowel(str);

// forEach
let square = (val)=>{
    console.log(val*val);
};
// num.forEach(square);

// Q) given marks ,, filter with 90+ marks ,, reduce method to find avg marks
let marks=[80,90,50,66,93,76,29,99];
// const nintyplus = marks.filter((val)=>{
//     if(val>90){
//         console.log(val);
//     }
// })

const sumall = marks.reduce((acc,curr)=>{
    return acc+curr; 
});
// console.log(sumall/marks.length);

