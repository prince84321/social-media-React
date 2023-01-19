import Post from "../post/Post";
import Share from "../share/Share";
import "./../feed/feed.css";
import {Posts} from "./../../DummyData";

function feed() {
  return (
    <>
    
    <div className="Feed">
      <div className="feedWrapper">
      <Share />

      {Posts.map((p)=>(
      <Post key={p.id} post={p}/>
      ))}
      
      </div>
    
    
    </div>
    
    </>
  )
}

export default feed;