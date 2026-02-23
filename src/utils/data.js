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
                new School(
                    "Massachusetts Institute of Technology",
                    "B.S. Physics & Electrical Engineering (Summa Cum Laude)",
                    "Sep 1984",
                    "May 1986",
                    "Cambridge, MA",
                    crypto.randomUUID(),
                ),
                new School(
                    "Massachusetts Institute of Technology",
                    "M.S. Applied Mathematics & Computer Science",
                    "Sep 1986",
                    "Dec 1987",
                    "Cambridge, MA",
                    crypto.randomUUID(),
                ),
                new School(
                    "Massachusetts Institute of Technology",
                    "Ph.D. Electrical Engineering & Computer Science",
                    "Jan 1988",
                    "May 1990",
                    "Cambridge, MA",
                    crypto.randomUUID(),
                ),
            ],
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
