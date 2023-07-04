import { EducationCardProps } from "../../../types/resumeTypes";

const EducationCard: React.FC<EducationCardProps> = (
    props: EducationCardProps
) => {
    return (
        <div className="card">
            {/* image */}
            <img src={props.icon} className="icon" />
            <div className="details">
                <div>
                    {/* heading */}
                    <h1 className="name">{props.name}</h1>
                    <div className="more">
                        <div className="left">
                            {/* location n degree */}
                            {props.location}
                            {props.degree && (
                                <>
                                    <span className="small-dot" />
                                    {props.degree}
                                </>
                            )}
                        </div>
                        <h3 className="duration">{props.duration}</h3>
                    </div>
                </div>
                {/* description */}
                {props.description && (
                    <p className="desc">{props.description}</p>
                )}
            </div>
        </div>
    );
};

export default EducationCard;
