import {useReducer} from "react";
import counterReducer from "../state-management/reducers/counterReducer.ts";


function Counter() {
    const [value, dispatch] =  useReducer(counterReducer, 0)

    return (
        <>
            <p>counter {value}</p>
            <button onClick={() => dispatch({type: 'INCREMENT'})}>Increment</button>
            <button onClick={() => dispatch({type: 'RESET'})}>Reset</button>
        </>
    );
}

export default Counter;