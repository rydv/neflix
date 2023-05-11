import "./featured.scss";
import { InfoOutlined, PlayArrow } from "@material-ui/icons";

export const Featured = () => {
  return (
    <div className="featured">
        <img src="https://rare-gallery.com/uploads/posts/514548-game-of-thrones.jpg" alt="" />
        <div className="info">
            <img src="https://see.fontimg.com/api/renderfont4/vm88Z/eyJyIjoiZnMiLCJoIjozNiwidyI6MjAwMCwiZnMiOjE4LCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0YzRjNGMyIsInQiOjF9/R0FNRSBPRiBUSFJPTkVT/roveyfree-regular.png" 
            alt="" 
            className="featuredTitle"/>
            <span className="desc">
            The power struggles among noble families in the fictional kingdom of Westeros, as they battle for control of the Iron Throne.
            </span>
            <div className="buttons">
                <button className="play">
                    <PlayArrow />
                    <span>Play</span>
                </button>
                <button className="more">
                    <InfoOutlined />
                    <span style={{marginLeft:"3px"}}>More Info</span>
                </button>
            </div>
        </div>
    </div>
  )
}
