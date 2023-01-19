import "./../post/post.css";

import {MoreVert} from "@mui/icons-material";
import {Users} from "./../../DummyData";
import { useState } from "react";

function Post({post}) {

    const [like, setLike] = useState(post.like);
    const [isLiked, setIsLiked] = useState(false);

    const LikeHandler = ()=>{
        setLike(isLiked? like-1 : like+1);
        setIsLiked(!isLiked)
    }

 

  return (
    <>
    <div className="postContainer" >
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="postProfileImg" src={Users.filter((u) => u.id === post.userID)[0].profilePicture} alt="" />
                    <span className="postUserName">
                        {Users.filter((u) => u.id === post.userID)[0].username}</span>
                    <span className="postDate">{post.date}</span>
                </div>
                <div className="postTopRight">
                    <MoreVert />
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img className="postImage" src={post.photo} alt="" />
            </div>
            <div className="postBottom">
                <div className="postButtonLeft">
                    <img className="postLikeIcon" src="/assets/images/like.png" onClick={LikeHandler} alt="" />
                    <img className="postLikeIcon" src="/assets/images/heart.png" onClick={LikeHandler} alt="" />
                    <span className="likeCounter"> {like} people Like it</span>
                </div>
                <div className="postButtonRight">
                    <span className="postCommentText">{post.comment} comments</span>

                </div>

            </div>
        </div>
    </div>
    </>
  )
}

export default Post;