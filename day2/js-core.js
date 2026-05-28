// ============================================
// Day 2 — JavaScript Core Practice
// Wisflux ILP | Nikhil Jangid | 28th May 2026
// ============================================

// ---- DATASET (used throughout) ----
const users = [
  { id: 1, name: "Alice",  age: 25, role: "dev",    salary: 80000 },
  { id: 2, name: "Bob",    age: 17, role: "design",  salary: 70000 },
  { id: 3, name: "Carol",  age: 30, role: "dev",    salary: 90000 },
  { id: 4, name: "Dan",    age: 15, role: "intern",  salary: 30000 },
  { id: 5, name: "Eve",    age: 28, role: "design",  salary: 75000 },
];

// ---- 1. MAP ----
const names = users.map(u => u.name);
console.log("Names:", names);
// ["Alice", "Bob", "Carol", "Dan", "Eve"]

// ---- 2. FILTER ----
const adults = users.filter(u => u.age >= 18);
console.log("Adults:", adults.map(u => u.name));
// ["Alice", "Carol", "Eve"]

// ---- 3. FIND ----
const firstDev = users.find(u => u.role === "dev");
console.log("First dev:", firstDev.name);
// "Alice"

// ---- 4. REDUCE ----
const totalSalary = users.reduce((sum, u) => sum + u.salary, 0);
console.log("Total payroll:", totalSalary);
// 345000

// ---- 5. SOME ----
const hasMinor = users.some(u => u.age < 18);
console.log("Has minor:", hasMinor);
// true

// ---- 6. EVERY ----
const allAdults = users.every(u => u.age >= 18);
console.log("All adults:", allAdults);
// false

// ---- 7. INDEX OF ----
const nums = [10, 20, 30, 40, 50];
console.log("Index of 30:", nums.indexOf(30));
// 2

// ---- 8. DESTRUCTURING ----
const { name, age, role } = users[0];
console.log(`Name: ${name}, Age: ${age}, Role: ${role}`);

const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log("First:", first, "Rest:", rest);

// ---- 9. TEMPLATE LITERALS ----
users.forEach(u => {
  console.log(`${u.name} is a ${u.role} earning ₹${u.salary.toLocaleString()}`);
});

// ---- 10. TRUTHY & FALSY ----
const values = [0, "", null, undefined, NaN, "hello", 42, [], {}];
values.forEach(v => console.log(`${String(v)} → ${v ? "truthy" : "falsy"}`));

// ---- 11. CALL BY VALUE vs REFERENCE ----
let a = 10;
let b = a;
b = 99;
console.log("a:", a, "b:", b); // a=10, b=99 — independent

let obj1 = { name: "Alice" };
let obj2 = obj1;
obj2.name = "Bob";
console.log("obj1.name:", obj1.name); // "Bob" — shared reference!

// ---- 12. SHALLOW vs DEEP COPY ----
const original = { name: "Nikhil", address: { city: "Jaipur" } };

const shallow = { ...original };
shallow.address.city = "Delhi";
console.log("Original city (shallow):", original.address.city); // "Delhi" — affected!

const deep = JSON.parse(JSON.stringify(original));
deep.address.city = "Mumbai";
console.log("Original city (deep):", original.address.city);    // "Delhi" — safe ✅

// ---- 13. undefined vs null vs NaN ----
let x;
console.log(x);               // undefined
console.log(typeof null);     // "object" (JS quirk)
console.log(typeof NaN);      // "number" (another quirk)
console.log(0 / 0);           // NaN
console.log(Number.isNaN("hello")); // false (reliable check)
console.log(isNaN("hello"));        // true (less reliable)

// ---- 14. SHORT-CIRCUIT LOGIC ----
const username = "";
const display = username || "Anonymous";
console.log(display); // "Anonymous"

const score = 0;
const result = score ?? "No score"; // ?? only catches null/undefined
console.log(result); // 0 (not "No score" — 0 is not null)

// ---- 15. TYPE CASTING ----
console.log(Number("42"));     // 42
console.log(Number(""));       // 0
console.log(Number("abc"));    // NaN
console.log(String(100));      // "100"
console.log(Boolean(0));       // false
console.log(Boolean("hello")); // true
console.log(!!"");             // false
console.log(!!42);             // true
