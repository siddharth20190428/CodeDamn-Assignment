import { useSelector } from "react-redux/es/exports";
import { RootState } from "../../../store";
import { StatsTypes } from "../../../types/personalTypes";

const StatCard: React.FC<StatsTypes> = (props: StatsTypes) => {
    return (
        <div className="stat-card">
            <img className="icon" src={props.iconlink} alt="" />
            <div className="desc">
                <h1 className="value">{props.value}</h1>
                <h3 className="label">{props.text}</h3>
            </div>
        </div>
    );
};

const Stats: React.FC = () => {
    const stats = useSelector((state: RootState) => state.personal.stats);
    return (
        <div className="stats-section">
            <h1 className="heading">Stats</h1>
            <div className="stats-cont">
                {stats.map((card, ind) => (
                    <StatCard key={`Stat-${ind}`} {...card} />
                ))}
            </div>
        </div>
    );
};

export default Stats;
