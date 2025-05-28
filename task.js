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

// ===== Task 1: Shopping Cart =====
let shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// Add 'Meat' to the beginning
if (!shoppingCart.includes('Meat')) {
  shoppingCart.unshift('Meat');
}

// Add 'Sugar' to the end
if (!shoppingCart.includes('Sugar')) {
  shoppingCart.push('Sugar');
}

// Remove 'Honey'
let honeyIndex = shoppingCart.indexOf('Honey');
if (honeyIndex !== -1) {
  shoppingCart.splice(honeyIndex, 1);
}

// Modify 'Tea' to 'Green Tea'
let teaIndex = shoppingCart.indexOf('Tea');
if (teaIndex !== -1) {
  shoppingCart[teaIndex] = 'Green Tea';
}

console.log('Shopping Cart:', shoppingCart);


// ===== Task 2: Countries =====
let countries = [
  'Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia',
  'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya'
];

// Reverse countries
countries.reverse();
console.log('Reversed Countries:', countries);

// Remove 'Canada' and 'Denmark' and add 'Azerbaijan'
let indexCanada = countries.indexOf('Canada');
if (indexCanada !== -1) countries.splice(indexCanada, 1);
let indexDenmark = countries.indexOf('Denmark');
if (indexDenmark !== -1) countries.splice(indexDenmark, 1);
countries.push('Azerbaijan');

console.log('Modified Countries:', countries);


// ===== Task 3: Concatenate Frontend and Backend =====
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];

const fullStack = frontEnd.concat(backEnd);
console.log('Full Stack:', fullStack);


// ===== Task 4: IT Companies =====
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

// Slice first 3 companies
console.log('First 3 Companies:', itCompanies.slice(0, 3));

// Slice last 3 companies
console.log('Last 3 Companies:', itCompanies.slice(-3));

// Slice middle company/companies
let middleIndex = Math.floor(itCompanies.length / 2);
let middleCompanies = itCompanies.length % 2 === 0
  ? itCompanies.slice(middleIndex - 1, middleIndex + 1)
  : [itCompanies[middleIndex]];
console.log('Middle Company/Companies:', middleCompanies);

// Sort companies
let sortedCompanies = [...itCompanies].sort();
console.log('Sorted Companies:', sortedCompanies);

// Convert all to uppercase
console.log('Uppercase Companies:');
itCompanies.forEach(company => console.log(company.toUpperCase()));

// Check for existence of 'Google'
let googleCheck = itCompanies.includes('Google') ? 'Google' : 'Company not found';
console.log('Google Check:', googleCheck);

// Filter companies with more than one 'o' (without using filter)
let companiesWithSingleO = [];
for (let company of itCompanies) {
  let oCount = 0;
  for (let char of company.toLowerCase()) {
    if (char === 'o') oCount++;
  }
  if (oCount <= 1) {
    companiesWithSingleO.push(company);
  }
}
console.log('Companies with one or no "o":', companiesWithSingleO);
// ===== 1. 0 - 100 Arası Sadə Ədədlər =====
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log("0 - 100 arası sadə ədədlər:");
for (let i = 0; i <= 100; i++) {
  if (isPrime(i)) {
    console.log(i);
  }
}

// ===== 2. Palindrom Yoxlama =====
function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[\W_]/g, '');
  const reversed = cleaned.split('').reverse().join('');
  return cleaned === reversed;
}

const testWords = ['racecar', 'hello', 'madam', 'openai'];
for (let word of testWords) {
  const result = isPalindrome(word)
    ? `"${word}" polidromdur.`
    : `"${word}" polidrom deyil.`;
  console.log(result);
}

// ===== 3. Məhsul Qiymətləri Cəmi və Ortalaması =====
const products = [
  {
    id: 1,
    title: "Smartphone",
    description: "A high-end smartphone with the latest features.",
    price: 799.99,
  },
  {
    id: 2,
    title: "Laptop",
    description: "Powerful laptop with a large screen and fast processor.",
    price: 1299.99,
  },
  {
    id: 3,
    title: "Coffee Maker",
    description: "An automatic coffee maker with a built-in grinder.",
    price: 99.99,
  },
  {
    id: 4,
    title: "Headphones",
    description: "Wireless over-ear headphones with noise-cancellation.",
    price: 199.99,
  },
  {
    id: 5,
    title: "Smart TV",
    description: "55-inch 4K Smart TV with streaming apps built-in.",
    price: 699.99,
  },
];

let total = 0;
for (let product of products) {
  total += product.price;
}
let average = total / products.length;

console.log("Qiymətlərin cəmi:", total.toFixed(2));
console.log("Qiymətlərin ortalaması:", average.toFixed(2));

