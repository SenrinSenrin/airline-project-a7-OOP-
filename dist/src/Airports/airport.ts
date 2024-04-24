class Airport {
    private airportName: string;
    private cityName: string;
    private area: string; // Assuming Area is a string type, replace with appropriate type if needed

    constructor(airportName: string, cityName: string, area: string) {
        this.airportName = airportName;
        this.cityName = cityName;
        this.area = area;
    }

    // Getter methods
    public getAirportName(): string {
        return this.airportName;
    }

    public getCityName(): string {
        return this.cityName;
    }

    public getArea(): string {
        return this.area;
    }
}
