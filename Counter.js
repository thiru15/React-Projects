
import { useState } from "react"
import './Counter.css';
export const Counter = ()=>{

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [count, setCount ] = useState(0);
    function handleCount(){
        console.log("inside Handle Count ",count);
        setCount(prevCount => prevCount+1);
    }

    return (
        <div>
            <h1>Welcome to Counter</h1>
            <p>Your Count is {count} </p>

            <button className="add-button" onClick={handleCount}>
                +
            </button>

        </div>
    )
}