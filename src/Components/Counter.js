import { useState } from "react";
import "../styles/Counter.css";

function Counter() {
    const [number,setNumber] = useState(0);
    
    function increase() {
        setNumber(number+1);
    }
    function decrease() {
        setNumber(number-1);
    }

    return (
        <div className="counter">
            <button className ="button" onClick={increase}>+</button>
            <span className="span">{number}</span>
            <button className ="button" onClick={decrease}>-</button>
        </div>
        
        
    );
}


export default Counter;