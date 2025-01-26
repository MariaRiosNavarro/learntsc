"use strict";
let studyJs = true;
if (studyJs) {
    console.log("learn typescript");
}
else {
    console.log("learn js first");
}
let barcaFc = 11;
let interFc = 11;
let playMessi = true;
let messi = 5;
const play = (teamA, teamB, extra) => {
    let reason = "";
    if (playMessi) {
        reason = "becouse Messi play";
        teamA += messi;
    }
    if (teamA > teamB)
        console.log(`Win Barca because ${reason}`);
    if (teamA < teamB)
        console.log(`Win interFc`);
    if (teamA === teamB)
        console.log(`Draw`);
};
play(barcaFc, interFc, playMessi);
// ANY type
// same as let display:any;
// let display;
let display;
display = "Star Wars";
console.log(display);
// display = 150000;
// console.log(display);
// display = true;
// console.log(display);
// __________________________
// Array
let arrayA = [1, 2, 3, 5];
let arrayB = ["a", "b", "c", "d"];
let arrayC = ["a", "b", "c", true, 1, "d"];
// Concat method need same type. Also arrayA and ArrayB must to be (number | string)[]
// let togetherFalse: (number | string)[] = arrayA.concat(arrayB);
// With Spred Operator cann you do that
let togetherRight = [...arrayA, ...arrayB];
console.log(arrayA);
console.log(arrayB);
// Objects
let programmerA = {
    name: "maria",
    skills: ["JS", "React/Next", "Python"],
    coffe: true,
};
let programmerB = {
    name: "Jane",
    skills: ["Python"],
};
let programmerC = {
    name: "Ada",
    tech: ["cobol", "R"],
    //   lastname: "Loveplace",
    // Isue beacouse `lastname' is not in the `interface`
};
const sendBew = (person) => {
    console.log(`This Vita is from ${programmerC.name}`);
};
sendBew(programmerC);
// OOP
class Movie {
    constructor(n, l, as) {
        this.actors = [];
        this.name = n;
        this.lead = l;
        this.actors = as;
    }
    playInCinema() {
        console.log(`${this.name || "Untitled movie"} is playing`);
    }
}
const movieA = new Movie(); // Valid
const movieB = new Movie("Inception", "Leonardo DiCaprio", [
    "Leonardo DiCaprio",
]); // Also valid
movieA.playInCinema();
movieB.playInCinema();
// Traditional Way without Public and Private
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hello, I'm ${this.name}`;
    }
}
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    getInfo() {
        return `${this.brand} ${this.model} (${this.year})`;
    }
}
// Public
class Book {
    constructor(title, author, year, isbn) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.isbn = isbn;
    }
    displayInfo() {
        console.log(`Book: ${this.title} by ${this.author} (${this.year})`);
    }
}
// Book
const book = new Book("1984", "George Orwell", 1949, "978-0451524935");
console.log(book.title); // Acceso allowed
book.displayInfo();
// Public + Private
class Account {
    constructor(username, email, password, lastLogin) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.lastLogin = lastLogin;
    }
    updateEmail(newEmail) {
        this.email = newEmail;
    }
    validatePassword(inputPassword) {
        return this.password === inputPassword;
    }
    login(inputPassword) {
        if (this.validatePassword(inputPassword)) {
            this.lastLogin = new Date();
            return true;
        }
        return false;
    }
}
// Account
const account = new Account("john_doe", "john@example.com", "secret123", new Date());
console.log(account.username); // Acceso allowed
// console.log(account.password); // Error: password is private
account.updateEmail("new@example.com");
// Only Private
class BankAccount {
    constructor(accountNumber, balance, owner, pin) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.owner = owner;
        this.pin = pin;
    }
    getBalance(inputPin) {
        if (this.validatePin(inputPin)) {
            return this.balance;
        }
        throw new Error("Invalid PIN");
    }
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
        }
    }
    validatePin(inputPin) {
        return this.pin === inputPin;
    }
    getAccountInfo(inputPin) {
        if (this.validatePin(inputPin)) {
            return `Account: ${this.accountNumber}, Owner: ${this.owner}`;
        }
        throw new Error("Invalid PIN");
    }
}
// BankAccount
const bankAccount = new BankAccount("123456789", 1000, "John Doe", "1234");
// console.log(bankAccount.balance); // Error: balance is private
console.log(bankAccount.getBalance("1234")); // Acceso allowed
bankAccount.deposit(500);
//Encapsulation and generics
class Raffle {
    constructor(name) {
        this.name = name;
    }
    setTicket(ticket) {
        this.ticket = ticket;
    }
    getTicket() {
        return this.ticket;
    }
    raffle() {
        if (this.ticket === undefined) {
            return "No number set for the raffle";
        }
        else {
            return `For ${this.name} the ticket is ${this.ticket}`;
        }
    }
}
let numberRaffle = new Raffle("Maria");
numberRaffle.setTicket(7);
console.log(numberRaffle.raffle());
// numberRaffle.ticket // Isue
console.log(numberRaffle.getTicket());
let stringRaffle = new Raffle("Jane");
stringRaffle.setTicket("aei");
console.log(stringRaffle.raffle());
// numberRaffle.ticket // Isue
console.log(stringRaffle.getTicket());
