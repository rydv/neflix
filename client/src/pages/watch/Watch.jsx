import { ArrowBackOutlined } from "@material-ui/icons"
import "./watch.scss"
import v1 from "../../assets/videos/video1.mp4"
import { Link, useLocation } from "react-router-dom"

export default function Watch() {
  const location = useLocation();
  console.log(location)
  const movie = location.state.movie;
  return (
    <div className="watch">
      <Link className="link" to="/">
        <div className="back">
            <ArrowBackOutlined />
            Home
        </div>
      </Link>
        <video src={movie.trailer} 
        autoPlay 
        progress 
        controls 
        className="video"
        />
    </div>
  )
}
