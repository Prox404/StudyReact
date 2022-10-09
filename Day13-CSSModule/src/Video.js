import video1 from './video/video.mp4';
import { useImperativeHandle, useRef, forwardRef } from "react";
import Div100vh from "./Components/react-div-100vh/Div100vh";

const Video = (props, ref) => {

    const videoRef = useRef();

    useImperativeHandle(ref, () => ({
        playVideo: () => {
            videoRef.current.play();
        },
        pauseVideo: () => {
            videoRef.current.pause();
        }
    }));

    const videoHeight = 'window.innerHeight';

    return (
        <Div100vh>
            <video ref={videoRef} src={video1} height={videoHeight}/>
        </Div100vh>
    );
}

export default forwardRef(Video);