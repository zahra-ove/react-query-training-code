import {useReducer} from "react";
import LoginReducer from "../state-management/reducers/LoginReducer.ts";

function Loginstatus() {
    const [user, dispatch] = useReducer(LoginReducer, '');

    if(user) {
        return(
            <a onClick={() => dispatch({type: 'logout', username: ''})}>{user ?? '-'} logout</a>
        );
    }

    return (
        <a onClick={() => dispatch({type: 'login', username: 'zahra ove'})}>login</a>
    );

}


export default Loginstatus;