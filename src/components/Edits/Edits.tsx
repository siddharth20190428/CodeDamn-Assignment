import { Routes, Route } from "react-router-dom";
import Portfolio from "./Portfolio/Portfolio";
import Socials from "./Socials";
import SideNav from "./SideNav";
import Profile from "./Profile";
import Resume from "./Resume";

const Edits: React.FC = () => {
    return (
        <div className="edit">
            <SideNav />
            <Routes>
                <Route path="/socials" Component={Socials} />
                <Route path="/portfolio" Component={Portfolio} />
                <Route path="/resume" Component={Resume} />
                <Route path="/" Component={Profile} />
            </Routes>
        </div>
    );
};

export default Edits;
