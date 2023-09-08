import React, { useState } from 'react'
import styles from "./Counter.module.css";

function Counter() {


    const [counter, setCounter] = useState(0)


    const increase = () => {
        setCounter(counter + 1)
    }
    const decrease = () => {
     if(counter>0)
     {
         setCounter(counter-1)
     }
    }



    return (
        <div>
            <button className={`btn ${styles.customCounterBtn}`} onClick={decrease}>-</button>
            <button className={`btn ${styles.customCounterBtnValue}`}>{counter}</button>
            <button className={`btn ${styles.customCounterBtn}`} onClick={increase}>+</button>
        </div>
    )
}

export default Counter;