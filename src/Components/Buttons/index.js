import { BoxButtons } from "./styled";

export default function Buttons({ circles, redoCircles, setCircles, setRedoCircles }) {

    function handleUndoCircle() {
        const lastCircle = circles[circles.length - 1]
        const updateCircles = circles.slice(0, circles.length - 1)
        if (lastCircle) {
            setCircles(updateCircles)
            setRedoCircles([...redoCircles, lastCircle])
        }
    }

    function handleRedoCircle() {
        const lastCircle = redoCircles[redoCircles.length - 1]
        const updateCircles = redoCircles.slice(0, redoCircles.length - 1)
        if (lastCircle) {
            setCircles([...circles, lastCircle])
            setRedoCircles(updateCircles)
        }
    }

    return (
        <>
            <BoxButtons>
                <button onClick={handleUndoCircle}>Desfazer</button>
                <button onClick={handleRedoCircle}>Resfazer</button>
            </BoxButtons>
        </>
    )
}