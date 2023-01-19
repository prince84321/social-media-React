import "./../share/share.css";
import {PermMedia, Label, Room, EmojiEmotions} from "@mui/icons-material";

function Share() {
  return (
    <>
    <div className="shareContainer">
      <div className="shareWrapper">
      <div className="shareTop">
        <img className="shareProfileImage" src="/assets/profile pic/1.jpeg" alt="" />
        <input placeholder="What's in your mind??" className="shareInput" />
      </div>
      <hr className="shareHr" />
      <div className="shareButtom">
        <div className='shareOption'>
          <PermMedia htmlColor="Tomato" className="shareIcon" />
          <span className="shareOptionText">Photo or Video</span>
        </div>
        <div className='shareOption'>
          <Label htmlColor="blue" className="shareIcon" />
          <span className="shareOptionText">Tag</span>
        </div>
        <div className='shareOption'>
          <Room htmlColor="green" className="shareIcon" />
          <span className="shareOptionText">Location</span>
        </div>
        <div className='shareOption'>
          <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
          <span className="shareOptionText">Feelings</span>
        </div>
       
      </div>
     
      <button className="shareButton">Share</button>
      
      </div>
     
    </div>
    </>
  )
}

export default Share;