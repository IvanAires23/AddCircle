import { Circle, Circles } from "./styled";

export default function ClickCircles({ circles, setRedoCircles, setCircles }) {

    function handleAddCircle(e) {
        const { clientX, clientY } = e;
        const newCircle = { x: clientX, y: clientY };
        setCircles([...circles, newCircle]);
        setRedoCircles([]);
    };


    return (
        <>
            <Circles onClick={handleAddCircle}>
                {circles.map((circle, index) => (
                    <Circle
                        left={circle.x}
                        top={circle.y}
                        key={index}
                    ></Circle>
                ))}
            </Circles>
        </>
    )
}
