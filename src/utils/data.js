import School from "./school";

class Data {
    static returnExampleInfo() {
        return {
            personalInfo: {
                name: "Tony Stark",
                email: "tonystark@avengers.com",
                phoneNumber: "+1 917-531-8008",
                website: "tonystark.com",
                location: "Manhattan, New York City",
            },
            education: [
                new School({
                    name: "Massachusetts Institute of Technology",
                    degree: "B.S. Physics & Electrical Engineering (Summa Cum Laude)",
                    startDate: "Sep 1984",
                    endDate: "May 1986",
                    location: "Cambridge, MA",
                }),
                new School({
                    name: "Massachusetts Institute of Technology",
                    degree: "M.S. Applied Mathematics & Computer Science",
                    startDate: "Sep 1986",
                    endDate: "Dec 1987",
                    location: "Cambridge, MA",
                }),
                new School({
                    name: "Massachusetts Institute of Technology",
                    degree: "Ph.D. Electrical Engineering & Computer Science",
                    startDate: "Jan 1988",
                    endDate: "May 1990",
                    location: "Cambridge, MA",
                }),
            ],
            experience: [],
        };
    }

    static returnEmptyInfo() {
        return {
            personalInfo: {
                name: "",
                email: "",
                phoneNumber: "",
                website: "",
                location: "",
            },
            education: [],
        };
    }
}

export default Data;
