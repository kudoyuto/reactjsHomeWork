import {useState} from "react";
function CounterSizeGenerator() {
    const [size, setSize] = useState(0);

    function handleChangeSize(e){
        console.log(e.target.value, typeof(e.target.value));
        setSize(parseInt(e.target.value));
    }

    return(
        <div>
            <span>Size:</span>
            <input type="number" min="0" value={size} onChange={handleChangeSize}></input>
        </div>  



    );
}

export default CounterSizeGenerator;