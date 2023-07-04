import { PlaygroundItem } from "../../../types/portfolioTypes";
import Avatars from "../../Utils/Avatars";

const PlaygroundCard: React.FC<PlaygroundItem> = (props: PlaygroundItem) => {
    let time = "1 min";
    return (
        <div className="play-card">
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
        </div>
    );
};

export default PlaygroundCard;
