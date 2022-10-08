import "./App.css";
import Video from "./Video";
import { useRef } from "react";

function App() {

  const videoRef = useRef(null);

  const handlePlay = () => {
    videoRef.current.playVideo();
  }

  const handlePause = () => {
    videoRef.current.pauseVideo();
  }

  return (
    <>
      <Video ref={videoRef}/>
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
    </>
  );
}

export default App;


