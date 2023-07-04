import { BoltIcon } from "@heroicons/react/20/solid";
import { useSelector } from "react-redux/es/exports";
import {
    BellIcon,
    ChevronDownIcon,
    MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { RootState } from "../../store";

const Navbar: React.FC = () => {
    const personal = useSelector((state: RootState) => state.personal);

    return (
        <div className="cd-nav">
            <div className="logo-cont">
                <a href="#" className="cd-logo">
                    codedamn
                </a>
            </div>
            <div className="right-cont">
                <div className="search-cont">
                    <MagnifyingGlassIcon className="magnifying-icon" />
                    <div className="dropdown">
                        <span className="text-sm">Courses</span>
                        <ChevronDownIcon className="ml-2 w-4 h-4" />
                    </div>
                    <input className="search" placeholder="Search" />
                </div>
                <div className="streak-cont">
                    <BoltIcon className="icon" />
                    <span className="value">{personal.stats[0].value}</span>
                </div>
                <div className="notification-cont">
                    <BellIcon className="icon" />
                    <span className="value">{personal.notifications}</span>
                </div>

                <div className="profile-cont">
                    <img src={personal.profilePicture} className="image" />
                    <div className="badge-cont">
                        <div className="relative">
                            <span className="value">{personal.level}</span>
                            <img src="./hexagon.svg" className="badge" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
