import { classNames } from "../../../utils";
import Avatars from "../../Utils/Avatars";
import { PlaygroundCardProps } from "../../../types/portfolioTypes";

export const PlaygroundCard: React.FC<PlaygroundCardProps> = (
    props: PlaygroundCardProps
) => {
    let time = "1 min";
    const handleChange = () => {
        const newValue = !props.field.value;
        props.form.setFieldValue(props.field.name, newValue);
    };
    return (
        <div className={classNames("play-card", props.field.value && "active")}>
            <img src={props.icon} className="img" />
            <div className="details">
                <h1 className="heading">{props.title}</h1>
                <p className="tech">
                    <span>HTML/CSS</span>
                    <span className="large-dot" />
                    <span>{time} ago</span>
                </p>
                <div className="shared">
                    <Avatars />
                    <p className="text">
                        Shared with{" "}
                        <span className="font-black">Adam, Anna..</span> +7 more
                    </p>
                </div>
            </div>
            <span
                className={classNames("circle", props.field.value && "check")}
                onClick={handleChange}
            />
        </div>
    );
};

export default PlaygroundCard;
