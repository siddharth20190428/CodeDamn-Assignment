import { useSelector } from "react-redux/es/exports";
import { RootState } from "../../../store";
import SkillItem from "./SkillItem";
import EducationCard from "./EducationCard";
import ExperienceCard from "./ExperienceCard";
import {
    EducationCardProps,
    ExperienceCardProps,
    SkillItemProps,
    SectionProps,
} from "../../../types/resumeTypes";

const ResumeSection = <
    T extends ExperienceCardProps | EducationCardProps | SkillItemProps
>(
    props: SectionProps<T>
) => {
    return (
        <div className="resume-sec">
            <h1 className="title">{props.title}</h1>
            <div className="data-cont">
                {props.data.map((datas, ind) => (
                    <props.Card {...datas} key={`${props.title}-${ind}`} />
                ))}
            </div>
        </div>
    );
};

const Resume: React.FC = () => {
    const resume = useSelector((state: RootState) => state.resume);

    return (
        <>
            <div className="about">
                {/* About me */}
                <h1 className="heading">About Me</h1>
                <div className="desc">{resume.about}</div>
            </div>
            <ResumeSection
                title="Work Experience"
                data={resume.experiences}
                Card={ExperienceCard}
            />
            <ResumeSection
                title="Education"
                data={resume.educations}
                Card={EducationCard}
            />
            <ResumeSection
                title="Tech Skills"
                data={resume.techSkills}
                Card={SkillItem}
            />
            <ResumeSection
                title="Interests"
                data={resume.interests}
                Card={SkillItem}
            />
            <ResumeSection
                title="Languages"
                data={resume.languages}
                Card={SkillItem}
            />
        </>
    );
};

export default Resume;
