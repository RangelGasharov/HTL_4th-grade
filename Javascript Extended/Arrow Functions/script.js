function sum(a, b) {
    return a + b;
}

let sum2 = (a, b) => a + b;

function isPositive(number) {
    return number >= 0;
}

let isPositive2 = number => number >= 0;

function randomNumber() {
    return Math.random();
}

let randomNumber2 = () => Math.random();

console.log(`sum - ${sum(1, 2)} sum2 - ${sum2(1, 2)}`);
console.log(`isPositive - ${isPositive(-1)} isPositive2 - ${isPositive2(-1)}`);
console.log(`randomNumber - ${randomNumber()} randomNumber2 - ${randomNumber2()}`);

document.addEventListener("click", () => {
    console.log("Click");
})

class Person {
    constructor(name) {
        this.name = name;
    }

    printNameArrow() {
        setTimeout(() => {
            console.log(`Arrow: ${this.name}`)
        }, 100)
    }

    printNameFunction() {
        setTimeout(function () {
            console.log(`Function: ${this.name}`)
        }, 100)
    }
}

let person = new Person("Bob");
person.printNameArrow();
person.printNameFunction();