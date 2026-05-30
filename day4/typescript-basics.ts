// ============================================
// Day 4 — TypeScript Basics Practice
// Wisflux ILP | Nikhil Jangid | 30th May 2026
// ============================================

// Run with: npx ts-node typescript-basics.ts
// Install: npm install -D typescript ts-node @types/node

// =============================================
// PART 1: Basic Types
// =============================================

let userName: string = "Nikhil";
let userAge: number = 22;
let isActive: boolean = true;
let nothing: null = null;
let notSet: undefined = undefined;

// Arrays
let scores: number[] = [85, 92, 78, 95];
let tags: string[] = ["dev", "ts", "nestjs"];

// Union types
let id: string | number = "N001";
id = 101; // also valid

// Tuple (fixed-length, fixed-type array)
let coordinate: [number, number] = [28.6, 77.2]; // lat, lng

console.log("--- Basic Types ---");
console.log(`Name: ${userName}, Age: ${userAge}, Active: ${isActive}`);
console.log("Scores:", scores);
console.log("ID:", id);

// =============================================
// PART 2: Interfaces
// =============================================

interface Address {
  city: string;
  state: string;
  pincode?: number; // optional
}

interface User {
  readonly id: number; // cannot change after set
  name: string;
  age: number;
  email?: string; // optional
  address: Address;
}

const user1: User = {
  id: 1,
  name: "Nikhil",
  age: 22,
  address: { city: "Jaipur", state: "Rajasthan", pincode: 302001 },
};

// user1.id = 99; // ❌ ERROR — readonly
console.log("\n--- Interfaces ---");
console.log("User:", user1.name, "from", user1.address.city);

// Interface for a function
interface Formatter {
  (value: number, currency: string): string;
}

const formatSalary: Formatter = (value, currency) =>
  `${currency}${value.toLocaleString()}`;

console.log("Salary:", formatSalary(80000, "₹"));

// =============================================
// PART 3: Classes
// =============================================

class Employee {
  name: string;
  private salary: number; // only accessible inside this class
  protected role: string; // accessible in subclasses too

  constructor(name: string, salary: number, role: string) {
    this.name = name;
    this.salary = salary;
    this.role = role;
  }

  getSalary(): number {
    return this.salary; // access private via method
  }

  describe(): string {
    return `${this.name} is a ${this.role}`;
  }
}

const emp = new Employee("Nikhil", 80000, "developer");
console.log("\n--- Classes ---");
console.log(emp.describe());
console.log("Salary: ₹", emp.getSalary());
// console.log(emp.salary); // ❌ ERROR — private

// =============================================
// PART 4: Inheritance
// =============================================

class Manager extends Employee {
  teamSize: number;

  constructor(name: string, salary: number, teamSize: number) {
    super(name, salary, "manager"); // call parent constructor
    this.teamSize = teamSize;
  }

  // Override parent method
  describe(): string {
    return `${this.name} manages a team of ${this.teamSize} people`; // can use protected `role`
  }
}

const manager = new Manager("Sachin", 120000, 5);
console.log("\n--- Inheritance ---");
console.log(manager.describe());
console.log("Salary: ₹", manager.getSalary()); // inherited from Employee

// =============================================
// PART 5: Generic Types
// =============================================

// Generic function — works with any type
function getFirst<T>(arr: T[]): T {
  return arr[0];
}

console.log("\n--- Generics ---");
console.log("First number:", getFirst<number>([10, 20, 30]));
console.log("First string:", getFirst<string>(["Nikhil", "Sachin", "Yash"]));

// Generic interface — API response wrapper
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
  timestamp: string;
}

interface Product {
  id: number;
  name: string;
  price: number;
}

const productResponse: ApiResponse<Product> = {
  data: { id: 1, name: "Laptop", price: 75000 },
  status: 200,
  message: "success",
  timestamp: new Date().toISOString(),
};

console.log("API Response:", productResponse.status, productResponse.data.name);

// Generic class
class DataStore<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  getAll(): T[] {
    return this.items;
  }

  find(predicate: (item: T) => boolean): T | undefined {
    return this.items.find(predicate);
  }
}

const userStore = new DataStore<User>();
userStore.add(user1);
userStore.add({
  id: 2,
  name: "Sachin",
  age: 30,
  address: { city: "Delhi", state: "Delhi" },
});

console.log(
  "All users:",
  userStore.getAll().map((u) => u.name)
);