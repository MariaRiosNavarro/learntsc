let studyJs: boolean = true;

if (studyJs) {
  console.log("learn typescript");
} else {
  console.log("learn js first");
}

let barcaFc: number = 11;
let interFc: number = 11;
let playMessi: boolean = true;
let messi: number = 5;

const play = (teamA: number, teamB: number, extra: boolean): void => {
  let reason: string = "";
  if (playMessi) {
    reason = "becouse Messi play";
    teamA += messi;
  }
  if (teamA > teamB) console.log(`Win Barca because ${reason}`);
  if (teamA < teamB) console.log(`Win interFc`);
  if (teamA === teamB) console.log(`Draw`);
};

play(barcaFc, interFc, playMessi);

// ANY type
// same as let display:any;
// let display;

let display: string;

display = "Star Wars";

console.log(display);

// display = 150000;

// console.log(display);

// display = true;

// console.log(display);

// __________________________

// Array

let arrayA: number[] = [1, 2, 3, 5];
let arrayB: string[] = ["a", "b", "c", "d"];
let arrayC: any[] = ["a", "b", "c", true, 1, "d"];

// Concat method need same type. Also arrayA and ArrayB must to be (number | string)[]

// let togetherFalse: (number | string)[] = arrayA.concat(arrayB);

// With Spred Operator cann you do that

let togetherRight: (number | string)[] = [...arrayA, ...arrayB];

console.log(arrayA);
console.log(arrayB);

// Objects

let programmerA = {
  name: "maria",
  skills: ["JS", "React/Next", "Python"],
  coffe: true,
};

// If you try to chang the values, you need to use the same types.
// name: string, skills: string[], coffe:boolean

// Personaliced Types

type Programmer = {
  name: string;
  skills: string[];
  coffe?: boolean; // coffe:boolean|null
};

let programmerB: Programmer = {
  name: "Jane",
  skills: ["Python"],
};

// Interfaces

interface Developer {
  name: string;
  tech: string[];
  coffe?: boolean | null;
}

let programmerC: Developer = {
  name: "Ada",
  tech: ["cobol", "R"],
  //   lastname: "Loveplace",
  // Isue beacouse `lastname' is not in the `interface`
};

const sendBew = (person: Developer) => {
  console.log(`This Vita is from ${programmerC.name}`);
};

sendBew(programmerC);

// OOP

class Movie {
  name?: string;
  lead?: string;
  actors?: string[] = [];

  constructor(n?: string, l?: string, as?: string[]) {
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
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, I'm ${this.name}`;
  }
}

class Car {
  brand: string;
  model: string;
  year: number;

  constructor(brand: string, model: string, year: number) {
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
  constructor(
    public title: string,
    public author: string,
    public year: number,
    public isbn: string
  ) {}

  displayInfo(): void {
    console.log(`Book: ${this.title} by ${this.author} (${this.year})`);
  }
}

// Book
const book = new Book("1984", "George Orwell", 1949, "978-0451524935");
console.log(book.title); // Acceso allowed
book.displayInfo();

// Public + Private
class Account {
  constructor(
    public username: string,
    public email: string,
    private password: string,
    private lastLogin: Date
  ) {}

  public updateEmail(newEmail: string): void {
    this.email = newEmail;
  }

  private validatePassword(inputPassword: string): boolean {
    return this.password === inputPassword;
  }

  public login(inputPassword: string): boolean {
    if (this.validatePassword(inputPassword)) {
      this.lastLogin = new Date();
      return true;
    }
    return false;
  }
}

// Account
const account = new Account(
  "john_doe",
  "john@example.com",
  "secret123",
  new Date()
);
console.log(account.username); // Acceso allowed
// console.log(account.password); // Error: password is private
account.updateEmail("new@example.com");

// Only Private
class BankAccount {
  constructor(
    private accountNumber: string,
    private balance: number,
    private owner: string,
    private pin: string
  ) {}

  public getBalance(inputPin: string): number {
    if (this.validatePin(inputPin)) {
      return this.balance;
    }
    throw new Error("Invalid PIN");
  }

  public deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
    }
  }

  private validatePin(inputPin: string): boolean {
    return this.pin === inputPin;
  }

  public getAccountInfo(inputPin: string): string {
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

class Raffle<T> {
  // Not cann modificate it, only with setTicket, NOT with raffle.ticket
  // We can use readonly too

  private ticket?: T;

  constructor(private name: string) {}

  setTicket(ticket: T): void {
    this.ticket = ticket;
  }

  getTicket() {
    return this.ticket;
  }

  public raffle(): string {
    if (this.ticket === undefined) {
      return "No number set for the raffle";
    } else {
      return `For ${this.name} the ticket is ${this.ticket}`;
    }
  }
}

let numberRaffle = new Raffle<number>("Maria");
numberRaffle.setTicket(7);
console.log(numberRaffle.raffle());
// numberRaffle.ticket // Isue
console.log(numberRaffle.getTicket());

let stringRaffle = new Raffle<string>("Jane");
stringRaffle.setTicket("aei");
console.log(stringRaffle.raffle());
// numberRaffle.ticket // Isue
console.log(stringRaffle.getTicket());
