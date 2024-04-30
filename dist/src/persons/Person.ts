export enum Genders{
    Male = "Male",
    Female = "Female",
}

export class Persons {
    protected FirstName: string;
    protected LastName: string;
    protected Age: number;
    protected Gender: Genders;

    constructor(FirstName: string, LastName: string, Age: number, Gender: Genders) {
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.Age = Age;
        this.Gender = Gender;
    }
}