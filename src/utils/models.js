export function createSchool({ name, degree, startDate, endDate, location }) {
    return {
        name,
        degree,
        startDate,
        endDate,
        location,
        key: crypto.randomUUID(),
    };
}

export function createExperience({ name, role, startDate, endDate, location, description }) {
    return {
        name,
        role,
        startDate,
        endDate,
        location,
        description,
        key: crypto.randomUUID(),
    };
}
