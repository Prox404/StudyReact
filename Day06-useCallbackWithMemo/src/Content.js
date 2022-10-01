import { memo } from "react";

function Content({onCountChange}) {

    console.log("Sub render");

    return (
        <>
                    <button 
                    onClick={() => onCountChange()}>Click me</button>

        </>
    );
}

export default memo(Content)