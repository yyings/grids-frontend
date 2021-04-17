import React, {useEffect, useState} from "react"
import Grid from "./Grid.js"
import './Grid.css'

function Grids() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
    const [clicked, setClicked] = useState(false);
    const [grids, setGrids] = useState(getGrids());

    useEffect(() => {
        setGrids(getGrids());
    }, []);


    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth <= 600);
        }
       
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
        
    }, [isMobile]);


    useEffect(() => {
        setGrids(getGrids());
    }, [clicked, isMobile]);


    function handleClick() {
        setClicked(!clicked);
    }

     function getGrids() {
        let collection = [];
        for (let i = 1; i <= 9; i++) {
            collection.push(<Grid key={i} displayValue={i} handleClick={handleClick} isMobile={isMobile} colorChange={clicked}/>);
        }
        return collection;
     }


    return (
        <div className="gridContainer">
            {grids}
        </div>
    )
}

export default Grids 