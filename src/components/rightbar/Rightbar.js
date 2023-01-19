import Online from "../online/Online";
import "./../rightbar/rightbar.css";
import { Users } from "../../DummyData";


function Rightbar({profile}) {
  
  const HomeRightbar = ()=>{

    return(
      <>
      <div className="birthdayContainer">
      <img src="/assets/images/gift.png" alt="" className="birthayImage" />
      <span className="birthdayText">
        <b>Nilesh Ranjan</b> and <b>3 other friends</b> have a birthay Today
        </span>
    </div>
     <img src="/assets/images/ad.png" alt="" className="rightbarAd" />
     <h4 className="rightbarTitle">Online Friends</h4>
     <ul className="rightbarFriendList">
      {Users.map((u)=>(
      <Online key={u.id} user={u} />))}
     </ul>
     </>
    )

  }

  const ProfileRightbar = ()=>{
    return(
      <>
      <h4 className="rightbarTitle1">User Information</h4>
      <div className="rightbarInfo">
        <span className="rightbarInfokey">City :</span>
        <span className="rightbarInfovalue">New Delhi</span>
      </div>
      <div className="rightbarInfo">
        <span className="rightbarInfokey">Profile :</span>
        <span className="rightbarInfovalue">Developer</span>
      </div>
      <div className="rightbarInfo">
        <span className="rightbarInfokey">Relationship :</span>
        <span className="rightbarInfovalue">Single</span>
      </div>
      <h4 className="rightbarUserFriendList">User Friends</h4>
      <div className="rightbarFollowing">
        <div className="rightbarFollowingFriend">
          <img src="/assets/profile pic/1.jpeg" alt="" className="rightbarfollowingImg" />
          <span className="rightbarFollowingName">Prince Kumar</span>
        </div>
        <div className="rightbarFollowingFriend">
          <img src="/assets/profile pic/2.jpeg" alt="" className="rightbarfollowingImg" />
          <span className="rightbarFollowingName">Rakhi Thakurr</span>
        </div>
        <div className="rightbarFollowingFriend">
          <img src="/assets/profile pic/3.jpeg" alt="" className="rightbarfollowingImg" />
          <span className="rightbarFollowingName">Nilesh Ranjan</span>
        </div>
        <div className="rightbarFollowingFriend">
          <img src="/assets/profile pic/4.jpeg" alt="" className="rightbarfollowingImg" />
          <span className="rightbarFollowingName">Amit Singh</span>
        </div>
        <div className="rightbarFollowingFriend">
          <img src="/assets/profile pic/5.jpeg" alt="" className="rightbarfollowingImg" />
          <span className="rightbarFollowingName">Satendra Yadav</span>
        </div>
        <div className="rightbarFollowingFriend">
          <img src="/assets/profile pic/6.jpeg" alt="" className="rightbarfollowingImg" />
          <span className="rightbarFollowingName">Rahul Pandit</span>
        </div>
        <div className="rightbarFollowingFriend">
          <img src="/assets/profile pic/7.jpeg" alt="" className="rightbarfollowingImg" />
          <span className="rightbarFollowingName">Suraj Pal</span>
        </div>
        <div className="rightbarFollowingFriend">
          <img src="/assets/profile pic/8.jpeg" alt="" className="rightbarfollowingImg" />
          <span className="rightbarFollowingName">Namit tripathi</span>
        </div>
        <div className="rightbarFollowingFriend">
          <img src="/assets/profile pic/9.jpeg" alt="" className="rightbarfollowingImg" />
          <span className="rightbarFollowingName">Anjali Priya</span>
        </div>
      </div>
      </>
    )
  }
  
 

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
      {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  )
}

export default Rightbar;