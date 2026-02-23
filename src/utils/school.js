class School {
    constructor({ name, degree, startDate, endDate, location }) {
        this.name = name;
        this.degree = degree;
        this.startDate = startDate;
        this.endDate = endDate;
        this.location = location;
        this.key = crypto.randomUUID();
    }
}

export default School;
