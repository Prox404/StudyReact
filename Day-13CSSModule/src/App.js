import "./App.css";
import Video from "./Video";
import { useRef, useState } from "react";
import { BsFillPauseFill, BsFillPlayFill } from "react-icons/bs";

import styles from "./button.module.css";

function App() {

  const videoRef = useRef(null);
  const [play, setPlay] = useState(false);

  const handlePlay = () => {
    videoRef.current.playVideo();
    setPlay(true);
  }

  const handlePause = () => {
    videoRef.current.pauseVideo();
    setPlay(false);
  }

  return (
    <>
      <center>
        <Video ref={videoRef}/>
        {(play && <button className={`${styles.btn} `} onClick={handlePause}><BsFillPauseFill/></button>)
        || <button className={`${styles.btn} `} onClick={handlePlay}><BsFillPlayFill/></button>}
      </center>
    </>
  );
}

export default App;


