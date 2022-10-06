import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Paragraph() {

    const context  = useContext(ThemeContext);

    return (
        <p className={context.theme}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            quae, quod, quidem, quia voluptas quibusdam voluptates voluptate
            voluptatibus quos nesciunt laborum. Quisquam, quae. Quisquam
            voluptates, quae quia quibusdam quod.
        </p>
    );
}

export default Paragraph;