import React from "react";
import { ExperienceCardProps } from "../../../types/resumeTypes";

const ExperienceCard: React.FC<ExperienceCardProps> = (
    props: ExperienceCardProps
) => {
    return (
        <div className="card">
            {/* image */}
            <img src={props.icon} className="icon" />
            <div className="details">
                <div>
                    {/* heading */}
                    <h1 className="name">{props.role}</h1>
                    <div className="more">
                        <div className="left">
                            {/* location n degree */}
                            {props.location}
                            <span className="small-dot" />
                            {props.company}
                        </div>
                        <h3 className="duration">{props.duration}</h3>
                    </div>
                </div>
                {/* description */}
                <p className="desc">{props.description}</p>
                {props.responsibilites && (
                    <div className="resp-sec">
                        <h3 className="heading">Job responsibilities:</h3>
                        <div>
                            {props.responsibilites.map((resp, ind) => (
                                <div className="resp" key={`resp-${ind}`}>
                                    <span className="diamond" />
                                    <p className="text-zink5">{resp}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ExperienceCard;
