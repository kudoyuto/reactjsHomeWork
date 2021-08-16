import {useState} from "react";
import "../styles/Counter.css";
function CounterSizeGenerator(props) {
    const [size, setSize] = useState(0);

    function handleChangeSize(e){
        
        setSize(parseInt(e.target.value));

        props.updateCounterSize(parseInt(e.target.value));
    }

    return(
        <div>
            <span className="span">Size:</span>
            <input type="number" min="0" value={size} onChange={handleChangeSize}></input>
        </div>  



    );
}

export default CounterSizeGenerator;