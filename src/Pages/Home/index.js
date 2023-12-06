import { useState } from "react";
import Buttons from "../../Components/Buttons";
import { Container } from "./styled";
import ClickCircles from "../../Components/Circles";

export default function Home() {
    const [circles, setCircles] = useState([]);
    const [redoCircles, setRedoCircles] = useState([]);

    return (
        <>
            <Container>
                <Buttons
                    circles={circles}
                    redoCircles={redoCircles}
                    setCircles={setCircles}
                    setRedoCircles={setRedoCircles}
                />
                <ClickCircles
                    circles={circles}
                    setRedoCircles={setRedoCircles}
                    setCircles={setCircles}
                />
            </Container>
        </>
    )
}