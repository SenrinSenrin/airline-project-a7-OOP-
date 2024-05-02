
import { Employee, EmployeeRole } from "./Employee";
import { Genders } from "../person";
import { Meals } from "../../Meals/meal";
import { Flight } from "../../Flight/flight";



export class Chef extends Employee{
    protected meals: Meals[] =[];
    constructor(FirstName: string, LastName: string, Age: number, Gender: Genders, salary: number,department: EmployeeRole) {
        super(FirstName, LastName, Age, Gender, salary,department);    
           
    }
    //==================function add meals=====================
    addMeals(meal:Meals){
        this.meals.push(meal);
        
    };

    //==================function add meals=====================
    getDetailChef(chef:Chef){
        return {
            FirstName: chef.FirstName,
            LastName: chef.LastName,
            Age: chef.Age,
            Gender: chef.Gender,
            Salary: chef.Salary,
            department: chef.department,
            meals: chef.meals,
            
        }
        
    };

}