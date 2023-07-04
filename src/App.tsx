import { Route, Routes } from "react-router-dom";
import Edits from "./components/Edits/Edits";
import Navbar from "./components/Navbar/Navbar";
import UserProfile from "./components/UserProfile/UserProfile";
import "./styles/App.css";
import "./styles/Edits.css";
import "./styles/Navbar.css";
import "./styles/Portfolio.css";
import "./styles/Resume.css";
import "./styles/UserProfile.css";

const App: React.FC = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/edit" Component={Edits}>
                    <Route path="/edit/socials" />
                    <Route path="/edit/portfolio" />
                    <Route path="/edit/resume" />
                    <Route path="/edit/" />
                </Route>
                <Route path="/" Component={UserProfile} />
            </Routes>
        </>
    );
};

export default App;
