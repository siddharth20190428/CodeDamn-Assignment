export interface ExperienceCardProps {
    id: number;
    icon: string;
    role: string;
    location: string;
    company: string;
    duration: string;
    description: string;
    responsibilites?: Array<string>;
}

export interface EducationCardProps {
    id: number;
    icon: string;
    name: string;
    location: string;
    degree?: string;
    duration?: string;
    description?: string;
}

export interface SkillItemProps {
    id: number;
    value: string;
    icon?: string;
}

export interface ResumeState {
    about: string;
    experiences: Array<ExperienceCardProps>;
    educations: Array<EducationCardProps>;
    techSkills: Array<SkillItemProps>;
    interests: Array<SkillItemProps>;
    languages: Array<SkillItemProps>;
}
export interface SectionProps<T> {
    title: string;
    data: Array<T>;
    Card: React.FC<T>;
}

export const experiences: Array<ExperienceCardProps> = [
    {
        id: 1,
        icon: "./icons/experiences/google.svg",
        role: "Front-end developer at Google",
        location: "London",
        company: "Google Inc.",
        duration: "May 2021 - Present",
        description:
            "This role would be great for a web developer with 3+ years' experience in designing and developing responsive websites. This position requires a profound understanding of the development process, using front-end technologies including HTML5, CSS3, JavaScript, jQuery, PHP/WordPress.",
    },
    {
        id: 2,
        icon: "./icons/experiences/facebook.svg",
        role: "Junior Front-end  Developer at Meta",
        location: "New York",
        company: "Meta Inc.",
        duration: "July 2020 - May 2021",
        description:
            "This role would be great for a web developer with 3+ years' experience in designing and developing responsive websites. ",
        responsibilites: [
            "Create an appealing design and turn it into a WordPress plugin",
            "Manage all technical aspects of the CMS",
            "Conducting website/application tests",
        ],
    },
];

export const educations: Array<EducationCardProps> = [
    {
        id: 1,
        icon: "./icons/educations/harvard.svg",
        name: "Harvard university",
        location: "Cambridge, GA",
        degree: "Bachelor degree, Computer Science(Bsc)",
        duration: "May 2020 - Present",
        description:
            "Emory Admissions Fellow; assisted Dean of Admissions with student applications and Emory's marketing strategy in the roll out of the university's new website",
    },
    {
        id: 2,
        icon: "./icons/educations/harvard.svg",
        name: "Mister Bim High School",
        location: "Atlanta, GA",
        duration: "September 2016 - 2020",
    },
];

export const techSkills: Array<SkillItemProps> = [
    {
        id: 1,
        icon: "./icons/skills/html.svg",
        value: "HTML 5",
    },
    {
        id: 2,
        icon: "./icons/skills/css.svg",
        value: "CSS 3",
    },
    {
        id: 3,
        icon: "./icons/skills/javascript.svg",
        value: "Javascript",
    },
    {
        id: 4,
        icon: "./icons/skills/react.svg",
        value: "React",
    },
    {
        id: 5,
        icon: "./icons/skills/nextjs.svg",
        value: "Next.js",
    },
    {
        id: 6,
        icon: "./icons/skills/mongo.svg",
        value: "Mongo",
    },
    {
        id: 7,
        icon: "./icons/skills/node.svg",
        value: "NodeJs",
    },
    {
        id: 8,
        icon: "./icons/skills/python.svg",
        value: "Python",
    },
    {
        id: 9,
        icon: "./icons/skills/java.svg",
        value: "Java",
    },
];

export const interests: Array<SkillItemProps> = [
    { id: 1, value: "Semantics" },
    { id: 2, value: "TED Talks" },
    { id: 3, value: "Udemy" },
    { id: 4, value: "Behavioural" },
    { id: 5, value: "Economics" },
    { id: 6, value: "Hiking" },
];

export const languages: Array<SkillItemProps> = [
    { id: 1, icon: "./icons/languages/english.svg", value: "English" },
    { id: 2, icon: "./icons/languages/mandarin.svg", value: "Mandarin" },
    {
        id: 3,
        icon: "./icons/languages/chineese.svg",
        value: "Cantonese Chineese",
    },
];

export const initialResumeValues: ResumeState = {
    about: "A self-driven, versatile, reliable, diligent individual who is calm and cheerful with a team-minded approach to work and getting things done. \n\nA student who is passionate and with a keen eye for design",

    experiences,
    educations,
    techSkills,
    interests,
    languages,
};
