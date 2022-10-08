import video1 from './video/video.mp4';
import { useImperativeHandle, useRef, forwardRef } from "react";

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

    return (
        <video ref={videoRef} src={video1}/>
    );
}

export default forwardRef(Video);