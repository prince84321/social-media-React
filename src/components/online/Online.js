import "./online.css";

function Online({user}) {
    console.log(user)
  return (
    <div>
        <li className="rightbarFriend">
            <div className="rightbarProfileImageContainer">
              <img src={user.profilePicture} alt="" className="rightbarProfileImage" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUserName">{user.username}</span>
          </li>
    </div>
  )
}

export default Online;