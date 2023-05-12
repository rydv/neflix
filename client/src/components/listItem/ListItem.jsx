import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from "@material-ui/icons";
import "./listItem.scss";
import { useState } from "react";

export default function ListItem({index}) {
  const [isHovered, setIsHovered] = useState(false);
  const trailer = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761"

  return (
    <div 
    className="listItem" 
    onMouseEnter={()=>setIsHovered(true)} 
    onMouseLeave={()=>setIsHovered(false)}
    style={{left: isHovered && index * 225 -50 + index*2.5}}
    >
        <img src="https://assets.telegraphindia.com/telegraph/27717cf8-f8b8-4adf-b490-7c2febd8b730.jpg" 
        alt="" />
        {isHovered &&
        <>
          <video src={trailer} autoPlay={true} loop/>
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon"/>
              <Add className="icon"/>
              <ThumbUpAltOutlined className="icon"/>
              <ThumbDownAltOutlined className="icon"/>
            </div>
            <div className="itemInfoTop">
              <span>1 hour 14 mins</span>
              <span className="limit">+16</span>
              <span>1999</span>
            </div>
            <div className="desc">
            A high school student as he tries to unravel the mystery behind his classmate suicide.
            </div>
            <div className="genre">
              Mystry
            </div>
          </div>
        </>
          }
    </div>
  )
}
