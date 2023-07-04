import { SkillItemProps } from "../../../types/resumeTypes";

const SkillItem: React.FC<SkillItemProps> = (props: SkillItemProps) => {
    return (
        <div className="skill-item">
            {props.icon && <img src={props.icon} className="icon" />}
            {props.value}
        </div>
    );
};

export default SkillItem;
