import { SiBitcoinsv } from "react-icons/si";

const Navbar = ({coins}) => {
    return (
        <div>
            <div className="navbar bg-white px-20 shadow-xl mb-5">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl"><img className="w-[50px]" src="../../../public/Image/logo.png" alt="logo" /></a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><a className="text-black">Home</a></li>
                        <li><a className="text-black">Fixture</a></li>
                        <li><a className="text-black">Teams</a></li>
                        <li><a className="text-black">Schedules</a></li>
                    </ul>
                    <div className="badge badge-soft badge-warning">{coins} Coin <span><SiBitcoinsv /></span> </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;