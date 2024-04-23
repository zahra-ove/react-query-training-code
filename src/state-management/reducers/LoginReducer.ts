interface authAction {
    type: 'login' | 'logout',
    username: string
}


const LoginReducer = (state: string, action: authAction) => {
    if(action.type == 'login') return action.username;
    if(action.type == 'logout') return '';
    return state;
}


export default LoginReducer;