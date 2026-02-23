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
            education: [],
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
            education: [new School("Columbia", "Computer Science", "1/18/2018", "Right Now", "Briarcliff Manor", "0"), 
                        new School("Mit", "Bioengineering", "5/6/2023", "8/9?2025", "Boston", "1")
            ],
        };
    }
}

export default Data;
