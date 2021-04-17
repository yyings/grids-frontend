import React, {useEffect, useState} from "react"
import './Grid.css'

function Grid(props) {
    const [gridColor, setColor] = useState(getRandomColor());
    const [isColorChange, setColorChange] = useState(props.colorChange);

    function getRandomColor() {
        let color = "#";
        const hex = "0123456789ABCDEF";
        for (let i = 0; i < 6; i++) {
            color += hex[Math.floor(Math.random()*16)];
        }
        return color;  
    }

    useEffect(() => {
        if (isColorChange != props.colorChange) {
            setColorChange(props.colorChange);
            setColor(getRandomColor);
        }
    })

    return (
        <div className="grid" 
            style={{backgroundColor: gridColor}} 
            id={"grid-" + props.displayValue + (props.isMobile ? "-mobile" : "")}
            onClick={() => props.handleClick()}>
            {props.displayValue}
        </div>
    )
}

export default Grid