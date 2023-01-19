import "./../topbar/topbar.css";
import {Search, Person, Chat, Notifications} from "@mui/icons-material";
import { Link } from "react-router-dom";

const Topbar=()=>{

   return(
    <div className="topbarContainer">
        <div className="topbarLeft">
            <Link to="/profile" 
            className="topbarLogo">PrinceMedia</Link>
        </div>
        <div className="topbarCenter">
            <div className="topbarSearch">
                <Search className="searchIcon" />
                <input placeholder="Find friend, post and visdeos" className="inputSearch" />
            </div>
        </div>
        <div className="topbarRight">
            <div className="topbarLink">
                <Link to="/home" className="topbarLinks">Homepage</Link>
                <Link to="/" className="topbarLinks">Logout</Link>
            </div>
            <div className="topbarIcon">
                <div className="topbarIconItem">
                    <Person />
                    <span className="topbarIconBadge">1</span>
                </div>
                <div className="topbarIconItem">
                    <Chat />
                    <span className="topbarIconBadge">2</span>
                </div>
                <div className="topbarIconItem">
                    <Notifications />
                    <span className="topbarIconBadge">3</span>
                </div>
            </div>
            <Link to="/profile">
            <img src="/assets/profile pic/1.jpeg" alt="" className="topbarImage" />
            </Link>
        </div>
    </div>

   )
}

export default Topbar;