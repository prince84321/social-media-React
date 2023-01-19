import { Chat, RssFeed, VideoChat, Group, Bookmark, QuestionAnswer, Event, Work, CastForEducation } from "@mui/icons-material";
import { Users } from "../../DummyData";
import CloseFriend from "../closefriend/CloseFriend";
import "./../leftbar/leftbar.css"

const Leftbar=()=>{
    return(
        <div className="leftbarMainContainer">
        <div className="Leftbar">
            <div className="leftbarWrapper">
                <ul className="leftbarList">
                    <li className="leftbarListItem">
                        <RssFeed className="leftbarIcon"/>
                        <span className="leftbarListItemText">Feed</span>
                    </li>
                    <li className="leftbarListItem">
                        <Chat className="leftbarIcon"/>
                        <span className="leftbarListItemText">Chat</span>
                    </li>
                    <li className="leftbarListItem">
                        <VideoChat className="leftbarIcon"/>
                        <span className="leftbarListItemText">Videos</span>
                    </li>
                    <li className="leftbarListItem">
                        <Group className="leftbarIcon"/>
                        <span className="leftbarListItemText">Group</span>
                    </li>
                    <li className="leftbarListItem">
                        <Bookmark className="leftbarIcon"/>
                        <span className="leftbarListItemText">Bookmarks</span>
                    </li>
                    <li className="leftbarListItem">
                        <QuestionAnswer className="leftbarIcon"/>
                        <span className="leftbarListItemText">Questions</span>
                    </li>
                    <li className="leftbarListItem">
                        <Event className="leftbarIcon"/>
                        <span className="leftbarListItemText">Event</span>
                    </li>
                    <li className="leftbarListItem">
                        <Work className="leftbarIcon"/>
                        <span className="leftbarListItemText">Jobs</span>
                    </li>
                    <li className="leftbarListItem">
                        <CastForEducation className="leftbarIcon"/>
                        <span className="leftbarListItemText">Education</span>
                    </li>
                </ul>
                <button className="leftbarButton">Show More</button>
                <hr className="leftbarHr" />
                <ul className="leftbarFriend">
                    {Users.map((u)=>(
                        <CloseFriend key={u.id} user={u}/>
                    ))}
                </ul>
            </div>
        </div>
        </div>
    )
}

export default Leftbar;