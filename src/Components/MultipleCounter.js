import {useState} from "react";
import CounterSizeGenerator from "./CounterSizeGenerator";
import CounterGroup from "./CounterGroup";


function MultipleCounter() {
    const [counterSize, setCounterSize] = useState(0);
    function updateCounterSize(counterSize) {
        setCounterSize(counterSize);


    }

    return (
        <div>
            <CounterSizeGenerator updateCounterSize={updateCounterSize}></CounterSizeGenerator>
            <CounterGroup counterSize={counterSize}/>
            
        </div>
    );
}

export default MultipleCounter;