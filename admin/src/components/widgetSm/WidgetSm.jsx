import { useEffect, useState } from "react";
import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import axios from "axios";

export default function WidgetSm() {
  const [newUsers, setNewUsers] = useState([]);

  useEffect( async () =>{
    try {
      const getNewUsers = async ()=>{
      const res= await axios.get("/users?new=true",{
        headers:{
          token: "Bearer "+ JSON.parse(localStorage.getItem("user")).accessToken,
        }
      });
      setNewUsers(res.data)
      }
      getNewUsers()
    } catch (error) {
      console.log(error)
    }
  },[])

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newUsers.map((user,i) => (
          <li className="widgetSmListItem" key={i}>
            <img
              src={user.profilePic || "https://c8.alamy.com/comp/2G74DMJ/emoticon-in-good-mood-isolated-happy-smiley-emoji-vector-satisfied-emoji-support-center-bot-avatar-with-broad-smile-emoji-sticker-person-chatbot-i-2G74DMJ.jpg"}
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
              <span className="widgetSmUserTitle">Software Engineer</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
