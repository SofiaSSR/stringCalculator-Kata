const index = require('./index.js');

test("isDividerLine false case", async function() {
  // Enter code here
 let given="1\n2";
  let expected =false ;
expect(index.isDividerLine(given)).toBe(expected);
});

test("isDividerLine true case", async function() {
  // Enter code here
  // Enter code here
 let given="//!@#\n1;2";
  let expected =true ;
expect(index.isDividerLine(given)).toBe(expected);
});

test("Add formated delimiters case", async function() {
  // Enter code here
let given="//[***]\n1***2***3";
  let expected =6;
expect(index.Add(given)).toBe(expected);
});

test("Add single with 1000 Policy", async function() {
  // Enter code here
let given="1001\n2";
  let expected =2;
expect(index.Add(given)).toBe(expected);
});

test("Negative Exception with multiple errors", async function() {
  // Enter code here
let given=[-1,2,-45,-6,0,57,-1,6];
  let expected ="negatives not allowed -1 -45 -6 -1" ;
  let error = "no error";
try{index.negativesPolicy(given)}catch(e){ error = e}

expect(error).toBe(expected);
});

test("Negative Exception with no errors", async function() {
  // Enter code here
let given=[1,2];
  let expected ="no error" ;
  let error = "no error";
try{index.negativesPolicy(given)}catch(e){ error = e}

expect(error).toBe(expected);  
});

test("Negative Exception with one error -1", async function() {
  let given=[-1,2];
  let expected ="negatives not allowed -1" ;
  let error = "no error";
try{index.negativesPolicy(given)}catch(e){ error = e}
expect(error).toBe(expected);
});

test("Add 1;2", async function() {
  // Enter code here
let given="//;\n1;2";
  let expected =3 ;
expect(index.Add(given)).toBe(expected);
});

test("Add with diferent delimiter", async function() {
  // Enter code here
let given="//^\n1^2^4^27";
  let expected =34;
expect(index.Add(given)).toBe(expected);
});
test("Add 1\\n2", async function() {
  // Enter code here
let given="1\n2";
  let expected =3;
expect(index.Add(given)).toBe(expected);
});
test("Add 1,2", async function() {
  let given="1,2";
  let expected =3;
expect(index.Add(given)).toBe(expected);
});






