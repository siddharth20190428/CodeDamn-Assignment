import { FieldProps } from "formik";

export interface ProjectItem {
    visible: true;
    id: number;
    imageLink: string;
    title: string;
}

export interface ProjectCardProps extends FieldProps, ProjectItem {}

export interface PlaygroundItem {
    visible: boolean;
    id: number;
    title: string;
    icon: string;
}
export interface PlaygroundCardProps extends FieldProps, PlaygroundItem {}

export interface CertificateItem {
    visible: true;
    id: number;
    icon: string;
    title: string;
    date: string;
}
export interface CertificateCardProps extends FieldProps, CertificateItem {}

export interface PortfolioState {
    projects: Array<ProjectItem>;
    playgrounds: Array<PlaygroundItem>;
    certificates: Array<CertificateItem>;
}

export const projects: Array<ProjectItem> = [
    {
        visible: true,
        id: 1,
        imageLink: "./projects/project1.png",
        title: "Personal Portfolio Website",
    },
    {
        visible: true,
        id: 2,
        imageLink: "./projects/project2.png",
        title: "Personal Portfolio Website",
    },
    {
        visible: true,
        id: 3,
        imageLink: "./projects/project2.png",
        title: "Personal Portfolio Website",
    },
    {
        visible: true,
        id: 4,
        imageLink: "./projects/project2.png",
        title: "Personal Portfolio Website",
    },
];

export const playgrounds: Array<PlaygroundItem> = [
    {
        visible: true,
        id: 1,
        title: "Playground Title",
        icon: "./icons/skills/html.svg",
    },
    {
        visible: true,
        id: 2,
        title: "Playground Title",
        icon: "./icons/skills/javascript.svg",
    },
    {
        visible: true,
        id: 3,
        title: "Playground Title",
        icon: "./icons/skills/javascript.svg",
    },
    {
        visible: true,
        id: 4,
        title: "Playground Title",
        icon: "./icons/skills/html.svg",
    },
];
export const certificates: Array<CertificateItem> = [
    {
        visible: true,
        id: 1,
        icon: "./icons/skills/javascript.svg",
        title: "Advanced theoritical Javascript",
        date: "Issued on Dec 16th, 2022",
    },
    {
        visible: true,
        id: 2,
        icon: "./icons/skills/html.svg",
        title: "HTML/CSS",
        date: "Issued on Dec 16th, 2022",
    },
    {
        visible: true,
        id: 3,
        icon: "./achievments.svg",
        title: "Build a decentralized to-do application",
        date: "Issued on Dec 16th, 2022",
    },
    {
        visible: true,
        id: 4,
        icon: "./icons/skills/react.svg",
        title: "React JS",
        date: "Issued on Dec 16th, 2022",
    },
];

export const initialPortfolioValues: PortfolioState = {
    projects,
    playgrounds,
    certificates,
};
