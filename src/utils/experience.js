class Experience {
    constructor({ name, role, startDate, endDate, location, description }) {
        this.name = name;
        this.role = role;
        this.startDate = startDate;
        this.endDate = endDate;
        this.location = location;
        this.description = description;
        this.key = crypto.randomUUID();
    }
}

export default Experience;
