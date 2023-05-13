import { ArrowBackOutlined } from "@material-ui/icons"
import "./watch.scss"
import v1 from "../../assets/videos/video1.mp4"

export default function Watch() {
  return (
    <div className="watch">
        <div className="back">
            <ArrowBackOutlined />
            Home
        </div>
        <video src={v1} 
        autoPlay 
        progress 
        controls 
        className="video"
        />
    </div>
  )
}
