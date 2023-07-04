import { useSelector } from "react-redux";
import EditPortfolioSection from "./EditPortfolioSection";
import PlaygroundCard from "./PlaygroundCard";
import ProjectCard from "./ProjectCard";
import { RootState } from "../../../store";
import CertificateCard from "./CertificateCard";

const Portfolio = () => {
    const portfolio = useSelector((state: RootState) => state.portfolio);
    return (
        <div className="portfolio-section w-3/5 space-y-6">
            <EditPortfolioSection
                title="Playgrounds"
                data={portfolio.playgrounds}
                Card={PlaygroundCard}
            />
            <EditPortfolioSection
                title="Projects"
                data={portfolio.projects}
                Card={ProjectCard}
            />
            <EditPortfolioSection
                title="Certificates"
                data={portfolio.certificates}
                Card={CertificateCard}
            />
        </div>
    );
};

export default Portfolio;
