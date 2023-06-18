import { useEffect, useState } from "react";
import "./featured.scss";
import axios from "axios";
import { InfoOutlined, PlayArrow } from "@material-ui/icons";

export const Featured = ({type}) => {
    const [content,setContent] = useState({});

    useEffect(()=>{
        const getRandomContent = async () => {
            try {
                const res = await axios.get(`/movies/random?type=${type}`,{
                    headers:{
                      token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0Njk5ZjIzOTliZDUwYjJhMWFmMmFmYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4Njk5MzE4NiwiZXhwIjoxNjg3NDI1MTg2fQ.IGlYCQNzbghpjkT8WwcnyUrsEemNPXqSFxVYh4OfUkE"
                    }
                  })
                  setContent(res.data)
            } catch (err) {
                console.log(err)  
            }
        }
        getRandomContent()
    },[type])
  return (
    <div className="featured">
        {type && (
            <div className="category">
                <span>{type === "movies" ? "Movies": "Series"}</span>
                <select name="genre" id="genre">
                <option>Genre</option>
                <option value="adventure">Adventure</option>
                <option value="comedy">Comedy</option>
                <option value="crime">Crime</option>
                <option value="fantasy">Fantasy</option>
                <option value="historical">Historical</option>
                <option value="horror">Horror</option>
                <option value="romance">Romance</option>
                <option value="sci-fi">Sci-fi</option>
                <option value="thriller">Thriller</option>
                <option value="western">Western</option>
                <option value="animation">Animation</option>
                <option value="drama">Drama</option>
                <option value="documentary">Documentary</option>
            </select>
            </div>
        )}
        <img src="https://rare-gallery.com/uploads/posts/514548-game-of-thrones.jpg" alt="" />
        <div className="info">
            <img src="https://see.fontimg.com/api/renderfont4/vm88Z/eyJyIjoiZnMiLCJoIjozNiwidyI6MjAwMCwiZnMiOjE4LCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0YzRjNGMyIsInQiOjF9/R0FNRSBPRiBUSFJPTkVT/roveyfree-regular.png" 
            alt="" 
            className="featuredTitle"/>
            <span className="desc">
            The power struggles among noble families in the Westeros, as they battle for control of the Iron Throne.
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
