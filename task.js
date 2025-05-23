function printDivisors(number) {
  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      console.log(i);
    }
  }
}


let num1 = parseInt(prompt("1. Ədədi daxil edin:"));
printDivisors(num1);
//2)
function countDivisors(number) {
  let count = 0;
  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      count++;
    }
  }
  return count;
}

let num2 = parseInt(prompt("2. Ədədi daxil edin:"));
console.log("Bölənlərinin sayı:", countDivisors(num2));


//3)
function upperStr(str) {
  return str.toUpperCase();
}


console.log(upperStr("salam")); // Çıxış: "SALAM"
//4)
function power(base, exponent) {
  return Math.pow(base, exponent);
}
let base = parseFloat(prompt("Əsas ədədi daxil edin:"));
let exponent = parseFloat(prompt("Qüvvət ədədi daxil edin:"));

console.log(`${base} ^ ${exponent} =`, power(base, exponent));
//5)
function convert(str) {
  let result = '';
  for (let char of str) {
    if (char === char.toUpperCase()) {
      result += char.toLowerCase();
    } else {
      result += char.toUpperCase();
    }
  }
  return result;
}

console.log(convert('saLamNecesen'));
