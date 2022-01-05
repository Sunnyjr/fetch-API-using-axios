import React,{ useState } from 'react'
import axios from 'axios';


const ComA = () => {
    const [num, setNum] = useState();
    return (
        <>
            <h1> you choose {num} value</h1>
            <select value={num} onChange={(event) => {
                setNum(event.target.value);

            }}
            >
                <option value="1"> 1 </option>
                <option value="25"> 25 </option>
                <option value="3"> 3 </option>
                <option value="4"> 4 </option>
                <option value="5"> 5 </option>
            </select>
        </>
    )
}

export default ComA;