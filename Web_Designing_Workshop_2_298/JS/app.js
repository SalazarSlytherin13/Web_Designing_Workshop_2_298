// console.log("Hello from JavaScript");
// function showAlert(){
//     alert("Hello CSE 22");
// }

// var name="Vanya Tripathi";
// var age=20;
// var isEmployed=true;
// console.log(name);
// console.log(age);
// console.log(isEmployed);
// var age=20;
// console.log(age);
// let greeting="Hello," + name +"! You are " + age + " years old.";
// console.log(greeting);

// let message =`Hello ${name}, you are ${age} years old.`;
// console.log(message);


// if(true){
//     var age=30;
// }

// console.log(age);


function isPrime(num){
    if(num<=1)
        return false;

        for(let i=2;i<=Math.sqrt(num);i++){
            if(num%i==0) return false;
        }
    return true;

}

console.log(isPrime(13));
console.log(isPrime(12));




