
import axios from "axios";
export const SET_USERS ='SET_USERS';
export const EDIT_USERS = "EDIT_USERS";
export const SIGNUP_USERS = "SIGNUP_USERS";


export const setUser =(payload) =>({type: SET_USERS, payload:payload});
export const editUser= (payload) =>({ type : EDIT_USERS, payload:payload});
export const SignupUser= (payload) =>({ type : SIGNUP_USERS, payload:payload});


