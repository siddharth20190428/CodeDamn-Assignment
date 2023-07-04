export interface Social {
    id: number;
    label: string;
    href: string;
    img: string;
}
export interface StatsTypes {
    visible: true;
    iconlink: string;
    value: string;
    text: string;
}
export interface Sections {
    id: number;
    name: string;
    description: string;
    visible: boolean;
}
export interface PersonalState {
    profilePicture: string;
    displayName: string;
    profession: string;
    dateOfBirth: string;
    gender: string;
    location: string;
    coverPhoto: string;
    pro: boolean;
    jobSeek: boolean;
    level: number;
    notifications: number;
    socials: Social[];
    sections: Sections[];
    stats: StatsTypes[];
}

export const sections: Sections[] = [
    {
        id: 1,
        name: "Followers and Following",
        description:
            "Shows your followers and the users you follow on codedamn",
        visible: true,
    },
    {
        id: 2,
        name: "XP",
        description: "Shows the XP you have earned",
        visible: true,
    },
    {
        id: 3,
        name: "Achievement Badges",
        description: "Shows the XP you have earned",
        visible: true,
    },
];
export const stats: Array<StatsTypes> = [
    {
        visible: true,
        value: "4",
        text: "Longest Streak",
        iconlink: "./icons/stats/lightning.svg",
    },
    {
        visible: true,
        value: "1200",
        text: "Experience Points",
        iconlink: "./icons/stats/starFour.svg",
    },
    {
        visible: true,
        value: "Novice",
        text: "Current League",
        iconlink: "./icons/stats/cup.svg",
    },
    {
        visible: true,
        value: "120",
        text: "Karma Points",
        iconlink: "./icons/stats/heartbeat.svg",
    },
];

export const socials: Array<Social> = [
    {
        id: 0,
        label: "Github",
        href: "",
        img: "./icons/socials/github.svg",
    },
    { href: "", img: "./icons/socials/linkedin.svg", id: 1, label: "Linkedin" },
    { href: "", img: "./icons/socials/facebook.svg", id: 2, label: "Facebook" },
    {
        href: "",
        img: "./icons/socials/instagram.svg",
        id: 3,
        label: "Instagram",
    },
    { href: "", img: "./icons/socials/dribble.svg", id: 4, label: "Dribble" },
    { href: "", img: "./icons/socials/behance.svg", id: 5, label: "Behance" },
];

export const initialPersonalValues: PersonalState = {
    profilePicture: "./personal/profile.svg",
    coverPhoto: "./personal/cover.png",
    displayName: "Anna Cheng",
    location: "Mumbai, India",
    profession: "Full stack dev at codedamn | Harvard'22\"",
    dateOfBirth: "2002-07-14",
    gender: "female",
    sections,
    pro: true,
    jobSeek: true,
    level: 5,
    notifications: 2,
    socials,
    stats,
};
