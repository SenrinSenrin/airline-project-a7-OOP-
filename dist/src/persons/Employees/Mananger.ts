
import { Employee } from "./Employee";
import { Genders } from "../Person";
import { EmployeeRole } from "./Employee";

export class Mananger extends Employee {
    constructor(FirstName: string, LastName: string, Age: number, Gender: Genders, salary: number, department: EmployeeRole) {
        super(FirstName, LastName, Age, Gender, salary, department);
    }
}