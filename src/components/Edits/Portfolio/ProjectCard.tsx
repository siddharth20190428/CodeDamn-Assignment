import { classNames } from "../../../utils";
import Avatars from "../../Utils/Avatars";
import { ProjectCardProps } from "../../../types/portfolioTypes";

export const ProjectCard: React.FC<ProjectCardProps> = (
    props: ProjectCardProps
) => {
    let time = "1 min";
    const handleChange = () => {
        const newValue = !props.field.value;
        props.form.setFieldValue(props.field.name, newValue);
    };
    return (
        <div className={classNames("proj-card", props.field.value && "active")}>
            <div className="relative">
                <div className="img-cont">
                    <img src={props.imageLink} className="img" />
                </div>
                <div className="badges-cont">
                    <span className="badge">Badge</span>
                    <span className="badge">Badge</span>
                </div>
            </div>
            <div className="details">
                <div className="title">
                    <span>{props.title}</span>
                    <span
                        className={classNames(
                            "circle",
                            props.field.value && "check"
                        )}
                        onClick={handleChange}
                    />
                </div>
                <p className="techs">
                    <span>HTML/CSS</span>
                    <span className="large-dot" />
                    <span>Javascript</span>
                    <span className="large-dot" />
                    <span>{time} ago</span>
                </p>
                <div className="flex items-center">
                    <Avatars />
                    <p className="contribs">3 Contibutors</p>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
