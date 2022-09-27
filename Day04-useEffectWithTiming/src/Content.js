import { useState, useEffect } from "react";


function Content() {
    const [countdown, setCountdown] = useState(10);

    useEffect(() => {
        const interval = setInterval(() => {
            countdown > 0 ? setCountdown(countdown -1) : setCountdown(0) && clearInterval(interval);
        }, 1000);
        return () => clearInterval(interval);
    }, [countdown]);

    console.log('re-render..');

    return (
        <div>
            <h1>Countdown: {countdown}</h1>
        </div>
    );
}

export default Content