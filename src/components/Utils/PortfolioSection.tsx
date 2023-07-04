import {
    CertificateItem,
    PlaygroundItem,
    ProjectItem,
} from "../../types/portfolioTypes";
import { SectionProps } from "../../types/resumeTypes";

const PortfolioSection = <
    T extends CertificateItem | PlaygroundItem | ProjectItem
>(
    props: SectionProps<T>
) => {
    return (
        <div className="portfolio-section">
            <div className="heading">
                <h1 className="title">{props.title}</h1>
                <a href="/#/edit/portfolio" className="edit">
                    Edit {props.title}
                </a>
            </div>
            <div className="cards-cont">
                {props.data.map((item, ind) => (
                    <props.Card {...item} key={`${props.title}-${ind}`} />
                ))}
            </div>
        </div>
    );
};

export default PortfolioSection;
