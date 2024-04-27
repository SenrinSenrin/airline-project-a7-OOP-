export class DateTime {
    private date: Date;

    constructor(date?: Date,) {
        if (date) {
            this.date = date;
        } else {
            this.date = new Date();
        }
    }

    getCurrentDateTime(): Date {
        return this.date;
    }

    setDate(date: Date): void {
        this.date = date;
    }

    getYear(): number {
        return this.date.getFullYear();
    }

    getMonth(): number {
        return this.date.getMonth() + 1; // Adding 1 because getMonth() returns zero-based month index
    }

    getDay(): number {
        return this.date.getDate();
    }

    getHour(): number {
        return this.date.getHours();
    }

    getMinute(): number {
        return this.date.getMinutes();
    }

    getSecond(): number {
        return this.date.getSeconds();
    }

    // You can add more methods as needed to manipulate or format the date and time
}

// // Example usage:
// const CurrentDateTime = new DateTime();
// console.log(CurrentDateTime.getCurrentDateTime()); // Output: current date and time
// console.log(CurrentDateTime.getYear()); // Output: current year
// console.log(CurrentDateTime.getMonth()); // Output: current month
// console.log(CurrentDateTime.getDay()); // Output: current day
// console.log(CurrentDateTime.getHour()); // Output: current hour
// console.log(CurrentDateTime.getMinute()); // Output: current minute
// console.log(CurrentDateTime.getSecond()); // Output: current second

// // You can also set a specific date and time
// const specificDate = new Date(2024, 3, 27, 15, 30, 0); // April 27, 2024, 3:30 PM
// CurrentDateTime.setDate(specificDate);
// console.log(CurrentDateTime.getCurrentDateTime()); // Output: specific date and time

const CurrentDateTime = new DateTime();
CurrentDateTime.getCurrentDateTime()
console.log(CurrentDateTime);
