import "./profile.css";
import Feed from "../../components/feed/Feed";
import Leftbar from "../../components/leftbar/Leftbar";
import Rightbar from "../../components/rightbar/Rightbar";
import Topbar from "../../components/topbar/Topbar";

function Profile() {

  return (
    <>
    <Topbar />
    <div className="profile">
    <Leftbar />
    <div className="profileRightTop">
      <div className="profileRight">
        <div className="profileCover">
          <img src="/assets/posts/5 (1).jpeg" alt="" className="profileCoverImg" />
          <img src="/assets/profile pic/8.jpeg" alt="" className="profileUserImg" />
        </div>
        <div className="profileInfo">
          <h4 className="profileUserName">Prince Kumar</h4>
          <span className="profileUserdesc">Hey! Welcome to my Profile</span>
        </div>
      </div>
      <div className="profileRightBottom"> 
    <Feed />
    <Rightbar profile />
      </div>

    </div>
    
    </div>
 
        
</>
  )
}

export default Profile;