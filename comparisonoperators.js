
 comparison operators in JavaScript, along with examples 
   for each:
   
  Equal (==)
Compares two values for equality (type conversion is allowed).

console.log(5 == "5"); // true (type conversion happens)
console.log(5 == 6);   // false


2. Strict Equal (===)
Compares two values for equality without type conversion.


console.log(5 === "5"); // false (different types)
console.log(5 === 5);   // true

3. Not Equal (!=)
Checks if two values are not equal (type conversion is allowed).


console.log(5 != "5"); // false (type conversion happens)
console.log(5 != 6);   // true
4. Strict Not Equal (!==)
Checks if two values are not equal without type conversion.



console.log(5 !== "5"); // true (different types)
console.log(5 !== 5);   // false
5. Greater Than (>)
Checks if the left value is greater than the right value.


console.log(10 > 5); // true
console.log(5 > 10); // false
6. Greater Than or Equal (>=)
Checks if the left value is greater than or equal to the right value.


console.log(10 >= 5);  // true
console.log(5 >= 5);   // true
console.log(4 >= 5);   // false
7. Less Than (<)
Checks if the left value is less than the right value.

t
console.log(3 < 7); // true
console.log(7 < 3); // false
8. Less Than or Equal (<=)
Checks if the left value is less than or equal to the right value.


console.log(3 <= 7);  // true
console.log(7 <= 7);  // true
console.log(8 <= 7);  // false
9. Ternary Operator (? :)
A shorthand for if-else conditions.


Edit
let age = 18;
let message = age >= 18 ? "You are an adult" : "You are a minor";
console.log(message); // Output: You are an adult
