
import { Employee, EmployeeRole } from "./Employee";
import { Genders } from "../person";
import { Passengers } from "../Passenger/passenger";
import { Meals } from "../../Meals/meal";


export class Chef extends Employee{
    chefID: string;
    passengerId: Passengers[] = [];
    constructor(FirstName: string, LastName: string, Age: number, Gender: Genders, salary: number,department: EmployeeRole) {
        super(FirstName, LastName, Age, Gender, salary,department);
        this.Flights = [];
        
           
    }
    //==================function get meals=====================
    getMeals(meal:Meals){
        return Meals.breakfast;
        
    };
}