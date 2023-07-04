import ProfileCard from "./ProfileCard";
import { useState } from "react";
import Resume from "./Resume/Resume";
import Portfolio from "./Portfolio/Portfolio";

const UserProfile: React.FC = () => {
    const [isPortfolio, setIsPortfolio] = useState(true);
    return (
        <div className="cd-user-section">
            <div className="user-cont">
                <ProfileCard />

                <div className="portfolio-resume-tab">
                    <button
                        className={`btn ${isPortfolio && "active"}`}
                        onClick={() => setIsPortfolio(!isPortfolio)}
                    >
                        Portfolio
                    </button>
                    <button
                        className={`btn ${!isPortfolio && "active"}`}
                        onClick={() => setIsPortfolio(!isPortfolio)}
                    >
                        Resume
                    </button>
                </div>

                <div className="profile-cont">
                    {isPortfolio ? <Portfolio /> : <Resume />}
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
