import { createSchool, createExperience } from "./models";

export function getEmptyInfo() {
    return {
        personalInfo: {
            name: "",
            email: "",
            phoneNumber: "",
            website: "",
            location: "",
        },
        education: [],
        experience: [],
    };
}

export function getExampleInfo() {
    return {
        personalInfo: {
            name: "Tony Stark",
            email: "tonystark@avengers.com",
            phoneNumber: "+1 917-531-8008",
            website: "tonystark.com",
            location: "Manhattan, New York City",
        },
        education: [
            createSchool({
                name: "Massachusetts Institute of Technology",
                degree: "B.S. Physics & Electrical Engineering (Summa Cum Laude)",
                startDate: "Sep 1987",
                endDate: "May 1989",
                location: "Cambridge, MA",
            }),
            createSchool({
                name: "Massachusetts Institute of Technology",
                degree: "Ph.D. Electrical Engineering & Computer Science",
                startDate: "Jan 1991",
                endDate: "May 1993",
                location: "Cambridge, MA",
            }),
        ],
        experience: [
            createExperience({
                name: "Iron Man",
                role: "Founding Avenger & Self-Appointed Earth Defender",
                startDate: "May 2008",
                endDate: "Oct 2023",
                location: "Global / Low-Earth Orbit / Space",
                description:
                    "Built the world's first powered armor suit in a cave with a box of scraps. Developed 85+ Iron Man suit iterations. Defeated Obadiah Stane, Whiplash, Aldrich Killian, and personally delivered a nuclear warhead through a wormhole to save New York City.",
            }),
            createExperience({
                name: "The Avengers",
                role: "Co-Founder & Lead Technologist",
                startDate: "May 2012",
                endDate: "Oct 2023",
                location: "Avengers Tower, NY / Avengers Compound, Upstate NY",
                description:
                    "Co-founded Earth's premier superhero team. Developed the Hulkbuster armor, Vision, and the time-space GPS used in the 2023 Time Heist. Snapped the Infinity Gauntlet to reverse Thanos's genocide of half the universe.",
            }),
            createExperience({
                name: "Time Heist",
                role: "Lead Quantum Physicist",
                startDate: "Oct 2023",
                endDate: "Oct 2023",
                location: "Quantum Realm / Various Timelines",
                description:
                    "Sole individual to solve the quantum time travel equation that had stumped the entire scientific community. Coordinated multi-team retrieval of all six Infinity Stones across four separate timelines. Gave his life to save the universe.",
            }),
        ],
    };
}
