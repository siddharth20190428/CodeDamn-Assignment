import {
    MapPinIcon,
    BookmarkIcon,
    PencilSquareIcon,
} from "@heroicons/react/24/outline";
import { useSelector } from "react-redux/es/exports";
import { RootState } from "../../store";
import { Link } from "react-router-dom";

const ProfileCard = () => {
    const personal = useSelector((state: RootState) => state.personal);
    const resume = useSelector((state: RootState) => state.resume);

    return (
        <div className="profile-card">
            {/* user card */}
            <div className="cover">
                {/* cover */}
                <Link to="./edit" className="link">
                    <PencilSquareIcon className="icon" />
                    Edit Cover
                </Link>
                <img src={personal.coverPhoto} className="image" />
            </div>
            <div className="details-cont">
                {/* details */}
                <div className="avatar-cont">
                    {/* image */}
                    <img src={personal.profilePicture} className="img" />
                    <div className="badge-cont">
                        <div className="relative">
                            <span className="value">{personal.level}</span>
                            <img src="./hexagon.svg" className="icon" />
                        </div>
                    </div>
                </div>
                <div className="desc">
                    {/* user description */}
                    <div className="heading">
                        <span className="name">{personal.displayName}</span>
                        {personal.pro && <span className="pro">Pro</span>}
                        {personal.jobSeek && (
                            <span className="seek">Looking For Job</span>
                        )}
                    </div>
                    <div className="sub-head">
                        <h3 className="profession">{personal.profession}</h3>
                        <p className="location">
                            <MapPinIcon className="icon" />
                            <span>{personal.location}</span>
                        </p>
                    </div>
                    <div className="skill-cont">
                        {resume.techSkills.map((skill, ind) => (
                            <span key={`skill-${ind}`} className="value">
                                {skill.value}
                            </span>
                        ))}
                    </div>
                    <span className="line" />
                    <div className="action-btn-cont">
                        <div className="socials-cont">
                            {/* links */}
                            {personal.socials.map((social, ind) => (
                                <a
                                    key={`social-${ind}`}
                                    href={social.href}
                                    target="_blank"
                                    className="btn"
                                >
                                    <img src={social.img} className="icon" />
                                </a>
                            ))}
                        </div>
                        <div className="side-btns">
                            {/* buttons */}
                            <BookmarkIcon className="bookmark" />
                            <Link to="/edit/" className="edit-profile">
                                Edit Profile
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
