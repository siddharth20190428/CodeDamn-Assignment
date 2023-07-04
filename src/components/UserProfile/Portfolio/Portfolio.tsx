import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import PortfolioSection from "../../Utils/PortfolioSection";
import Stats from "./Stats";
import ProjectCard from "./ProjectCard";
import PlaygroundCard from "./PlaygroundCard";
import CertificateCard from "./CertificateCard";

const Portfolio: React.FC = () => {
    const portfolio = useSelector((state: RootState) => state.portfolio);

    return (
        <>
            <Stats />
            <PortfolioSection
                title="Projects"
                data={portfolio.projects.filter((obj) => obj.visible)}
                Card={ProjectCard}
            />
            <PortfolioSection
                title="Playgrounds"
                data={portfolio.playgrounds.filter((obj) => obj.visible)}
                Card={PlaygroundCard}
            />
            <PortfolioSection
                title="Certificates"
                data={portfolio.certificates.filter((obj) => obj.visible)}
                Card={CertificateCard}
            />
        </>
    );
};

export default Portfolio;
