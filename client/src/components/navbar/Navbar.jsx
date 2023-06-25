import { ArrowDropDown, Notifications, Search } from "@material-ui/icons"
import "./Navbar.scss";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../authContext/AuthContext";
import { logout } from "../../authContext/AuthActions";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const {dispatch} = useContext(AuthContext);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => window.onscroll = null
    };

    const handleLogout = () => {
        console.log('logout')
        dispatch(logout());
    }

  return (
    <div className={isScrolled ? "navbar scrolled": "navbar"}>
        <div className="container">
            <div className="left">
                <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                alt="" />
                <Link className="link" to="/">
                    <span>Home</span>
                </Link>
                <Link className="link" to="/series">
                    <span className="navbarmainlinks">TV Shows</span>
                </Link>
                <Link className="link" to="/movies">
                    <span className="navbarmainlinks">Movies</span>
                </Link>
                <span>New and Popular</span>
                <span>My List</span>
            </div>
            <div className="right">
                <Search className="icons"/>
                <span>KID</span>
                <Notifications className="icons"/>
                <img src="https://static.vecteezy.com/system/resources/previews/002/275/847/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg" 
                alt="" />
                <div className="profile">
                    <ArrowDropDown className="icons"/>
                    <div className="options">
                        <span>Settings</span>
                        {/* <span>Logout</span> */}
                        <span onClick={handleLogout}>Logout</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar