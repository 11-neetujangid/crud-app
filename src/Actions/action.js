
export const SET_USERS ='SET_USERS';
export const EDIT_USERS = "EDIT_USERS";
export const SIGNIN_USERS = "SIGNIN_USERS";


export const setUser =(payload) =>({type: SET_USERS, payload:payload});
export const editUser= (payload) =>({ type : EDIT_USERS, payload:payload});

export const SignInUser = (payload) =>{
    console.log(payload.token)
    localStorage.setItem("token", payload.token)
    return{type : SIGNIN_USERS, payload}
}

