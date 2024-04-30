import { Flight } from "../Flight/flight";
import { Chef } from "../persons/Employees/Chef";


export enum mealTypes {
    vegetarian,
    glutenFree,
    halal,
    kosher,
   
}

export class Meals {
    mealName: string;
    mealType: mealTypes;
    constructor(mealName:string, mealType: mealTypes) {
        this.mealName = mealName;
        this.mealType = mealType;
        
    }
}