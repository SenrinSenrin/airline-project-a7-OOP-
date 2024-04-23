import { Ticket } from "../ticket/ticket";

export class Person {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    public getName(): string {
        return this.name;
    }

}
export class Passengers extends Person {
    private ticket: Ticket;
    constructor(name: string, age: number, ticket: Ticket) {
        super(name, age);
        this.ticket = ticket;
    }
}

export class Crew extends Person {
    private Role: string;
    constructor(name: string, age: number, role: string) {
        super(name, age);
        this.Role = role;
    }
}