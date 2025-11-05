function sum(n) {
  if (typeof n !== "number") {
    return "The value passed is not a number";
  }

  
  if (n % 1 !== 0) {
    return "The value passed is not a number";
  }

  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }

  return total;
}


console.log(sum(5)); 
console.log(sum(10));   
console.log(sum("10"));  
console.log(sum(4.5));   


function factorial(num) {
  if (typeof num !== "number" || num % 1 !== 0 || num < 0) {
    return "Please enter a valid non-negative integer";
  }

  let result = 1;
  for (let i = num; i > 0; i--) {
    result *= i;
  }

  return result;
}


console.log(factorial(4)); 
console.log(factorial(5)); 


function funkyMath(a, b, c, d) {
  const argCount = arguments.length;

  if (argCount === 2) {
    return b - a;
  } else if (argCount === 3) {
    return a + b + c;
  } else if (argCount === 4) {
    return (a + b) / (c + d);
  } else {
    return "Invalid number of arguments";
  }
}

console.log(funkyMath(3, 8));      
console.log(funkyMath(2, 4, 6));    
console.log(funkyMath(8, 2, 3, 5)); 



let arr = [1, 2, 33, 45, 6, 44];
let oddNumbers = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 !== 0) {
    oddNumbers.push(arr[i]);
  }
}

oddNumbers.sort((a, b) => a - b);
console.log("Odd numbers:", oddNumbers);



let me = {
  firstName: "Bungcwalisa",
  lastName: "Magobiyane",
  age: 21,
  favouriteColour: "Black",
  dreamCar: "Mercedes Benz A200"
};


me.favouriteFood = "Pizza";


delete me.age;

console.log(me);