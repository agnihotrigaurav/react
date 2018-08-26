class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi. i am ${this.name}!.`  ;
    }
    getDescription() {
        return `${this.name} is ${this.age} years old.`  ;
    }
}
class Traveler extends Person {
    constructor(name, age, homeLocation = 'Delhi') {
        super(name, age)
        this.homeLocation = homeLocation;
    }
    getGreeting() {
        let greeting = super.getGreeting();
        if(greeting) {
            greeting += `I'm visiting from ${this.homeLocation}`;
        }
        return greeting;
    }
}
class Student extends Person {
    constructor(name, age, major = 'BYE') {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();
        
        if(this.hasMajor()) {
            description += `Their major is ${this.major}`;
        }

        return description;
    }
}

const me = new Student('Gaurav Agnihotri', 33, 'CS');
console.log(me.getDescription());

const other = new Person();
console.log(other.getGreeting())

const dw = new Traveler('Dean Winchester', 33, 'England');
console.log(dw.getGreeting());
