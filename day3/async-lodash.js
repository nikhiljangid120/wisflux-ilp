// ============================================
// Day 3 — JavaScript Async + Lodash Practice
// Wisflux ILP | Nikhil Jangid | 29th May 2026
// ============================================

// Run this file with: node async-lodash.js
// Install lodash first: npm install lodash

const _ = require("lodash");

// =============================================
// PART 1: setTimeout
// =============================================

console.log("--- setTimeout ---");
console.log("1: Start");

setTimeout(() => {
  console.log("3: Inside timeout (runs after 1s)");
}, 1000);

console.log("2: End — JS didn't wait!");
// Output order: 1 → 2 → 3 (non-blocking)

// =============================================
// PART 2: Promises
// =============================================

console.log("\n--- Promises ---");

function fetchScore(pass) {
  return new Promise((resolve, reject) => {
    if (pass) {
      resolve({ score: 95, grade: "A" });
    } else {
      reject("Failed to fetch score");
    }
  });
}

fetchScore(true)
  .then((data) => console.log("Score:", data.score, "| Grade:", data.grade))
  .catch((err) => console.error("Error:", err));

fetchScore(false)
  .then((data) => console.log("Score:", data))
  .catch((err) => console.error("Error:", err));

// =============================================
// PART 3: Async / Await
// =============================================

console.log("\n--- Async / Await ---");

async function getUser(id) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const data = await response.json();
    console.log(`User ${id}:`, data.name, "|", data.email);
    return data;
  } catch (error) {
    console.error("Failed to fetch user:", error.message);
  }
}

getUser(1);
getUser(2);

// =============================================
// PART 4: Promise Chaining
// =============================================

console.log("\n--- Promise Chaining ---");

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((res) => res.json())
  .then((post) => {
    console.log("Post title:", post.title);
    // Now fetch the post author
    return fetch(
      `https://jsonplaceholder.typicode.com/users/${post.userId}`
    );
  })
  .then((res) => res.json())
  .then((user) => console.log("Post author:", user.name))
  .catch((err) => console.error("Chain error:", err));

// =============================================
// PART 5: Lodash
// =============================================

console.log("\n--- Lodash ---");

const employees = [
  { name: "Nikhil",    dept: "Engineering", salary: 80000, active: true  },
  { name: "John",      dept: "Design",       salary: 70000, active: false },
  { name: "Sachin",    dept: "Engineering", salary: 90000, active: true  },
  { name: "Gulshan",   dept: "Design",       salary: 65000, active: true  },
  { name: "Yash",      dept: "HR",           salary: 60000, active: false },
  { name: "Priyanshu", dept: "Engineering", salary: 75000, active: true  },
];

// groupBy — group by department
const byDept = _.groupBy(employees, "dept");
console.log("By Department:", JSON.stringify(byDept, null, 2));

// find — first match
const firstDesigner = _.find(employees, { dept: "Design" });
console.log("First Designer:", firstDesigner.name);

// filter — active employees only
const activeEmployees = _.filter(employees, { active: true });
console.log("Active:", activeEmployees.map((e) => e.name));

// map — extract salaries
const salaries = _.map(employees, "salary");
console.log("Salaries:", salaries);

// reduce — total payroll
const totalPayroll = _.reduce(
  employees,
  (sum, e) => sum + e.salary,
  0
);
console.log("Total Payroll: ₹", totalPayroll.toLocaleString());

// Type checks
console.log("\n--- Type Checks ---");
console.log("_.isNumber(42):", _.isNumber(42));        // true
console.log("_.isNumber('42'):", _.isNumber("42"));    // false
console.log("_.isNaN(NaN):", _.isNaN(NaN));            // true
console.log("_.isNaN(undefined):", _.isNaN(undefined)); // false (unlike native isNaN)
console.log("_.isNaN('abc'):", _.isNaN("abc"));        // false
console.log("isNaN('abc'):", isNaN("abc"));            // true (native, less reliable)
