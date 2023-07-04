import { ProjectItem } from "../../../types/portfolioTypes";

export const ProjectCard: React.FC<ProjectItem> = (props: ProjectItem) => {
    return (
        <div className="proj-card">
            <div className="img-cont">
                <img src={props.imageLink} className="img" />
            </div>
            <div className="details">
                <span className="title">{props.title}</span>
                <p className="techs">
                    <img src="./icons/skills/html.svg" className="icon" />
                    <span>HTML/CSS</span>
                    <span className="small-dot" />
                    <img src="./icons/skills/react.svg" className="icon" />
                    <span>React</span>
                </p>
            </div>
        </div>
    );
};

export default ProjectCard;
