import "./closeFriend.css";

function CloseFriend({user}) {
  return (
    <li className="leftbarFriendList">
         <img className="leftbarFriendImage" src={user.profilePicture} alt="" />
         <span className="leftbarFriendName">{user.username}</span>
    </li>
  )
}

export default CloseFriend;