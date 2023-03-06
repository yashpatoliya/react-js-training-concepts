import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incNum,decNum } from "./action";


const App = () => {

    const num = useSelector(state => state.Number);
    const dispatch = useDispatch();


   return (
        <>
            <button onClick={ () => dispatch(incNum()) }>+</button>
                <input type="text" value={num}/>
            <button onClick={ () => dispatch(decNum()) }>-</button>
        </> 
   );
}

export default App;