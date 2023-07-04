import { Link, useLocation } from "react-router-dom";
import { classNames } from "../../utils";

const SideNav = () => {
    let loc = useLocation();
    // console.log(loc.pathname);
    const navigation = [
        {
            name: "Profile",
            to: "/edit/",
            current: loc.pathname == "/edit/",
        },
        {
            name: "Socials",
            to: "/edit/socials",
            current: loc.pathname == "/edit/socials",
        },
        {
            name: "Portfolio",
            to: "/edit/portfolio",
            current: loc.pathname == "/edit/portfolio",
        },
        {
            name: "Resume",
            to: "/edit/resume",
            current: loc.pathname == "/edit/resume",
        },
    ];

    return (
        <aside className="w-1/5">
            <div className="side-nav-cont">
                {navigation.map((item) => (
                    <Link
                        key={item.name}
                        to={item.to}
                        className={classNames(
                            "group flex items-center py-2 text-xl font-medium rounded-md",
                            item.current
                                ? "text-gray-900 font-extrabold"
                                : "text-gray-400 hover:bg-gray-50 hover:text-gray-900"
                        )}
                    >
                        <div
                            dir="rtl"
                            className={classNames(
                                "rounded-s-md w-1 h-6",
                                item.current
                                    ? "bg-gray-900"
                                    : "group-hover:bg-gray-900"
                            )}
                        ></div>
                        <img
                            src="./chrome.svg"
                            className={classNames(
                                item.current
                                    ? "bg-gray-50"
                                    : "opacity-50 group-hover:opacity-100",
                                "mx-3 h-6 w-6"
                            )}
                            aria-hidden="true"
                        />
                        {item.name}
                    </Link>
                ))}
            </div>
        </aside>
    );
};
export default SideNav;
