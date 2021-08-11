
export const SET_USERS ='SET_USERS';
export const EDIT_USERS = "EDIT_USERS";
<<<<<<< HEAD
export const SIGNIN_USERS = "SIGNIN_USERS";
=======
export const SIGNUP_USERS = "SIGNUP_USERS";
>>>>>>> a2042107a4746a2521f6a1a0eb77a7cbce32b7ec


export const setUser =(payload) =>({type: SET_USERS, payload:payload});
export const editUser= (payload) =>({ type : EDIT_USERS, payload:payload});

<<<<<<< HEAD
export const SignInUser = (payload) =>{
    console.log(payload.token)
    localStorage.setItem("token", payload.token)
    return{type : SIGNIN_USERS, payload}
}
=======
>>>>>>> a2042107a4746a2521f6a1a0eb77a7cbce32b7ec

