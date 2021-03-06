
export const SET_USERS = 'SET_USERS';
export const EDIT_USERS = "EDIT_USERS";

export const SIGNIN_USERS = "SIGNIN_USERS";
export const SET_DATA = 'SET_DATA';
export const SIGNUP_USERS = "SIGNUP_USERS";

export const SET_POSTS = 'SET_POSTS';
export const ADD_POST_DATA = "ADD_POST_DATA"
export const EDIT_POSTS = "EDIT_POSTS";

export const ADD_COMMENT_DATA = 'ADD_COMMENT_DATA';
export const SET_COMMENT = "SET_COMMENT";
export const USER_LOGOUT = "USER_LOGOUT";


export const ADD_TASK_DATA = "ADD_TASK_DATA"
export const SET_TASKS = 'SET_TASKS';

export const ADD_DATE = 'ADD_DATE';
export const SET_DATE= 'SET_DATE';





export const userLogout = (payload) => ({ type: USER_LOGOUT, payload: payload });


export const setUser = (payload) => ({ type: SET_USERS, payload: payload });
export const editUser = (payload) => ({ type: EDIT_USERS, payload: payload });


export const SignInUser = (payload) => {
    console.log(payload.token, payload.id)
    localStorage.setItem("token", payload.token);
    localStorage.setItem("id", payload.id)

    localStorage.setItem("name", payload.name)
    return { type: SIGNIN_USERS, payload }
}
export const setData = (payload) => ({ type: SET_DATA, payload: payload })
export const signUpUser = (payload) => ({ type: SIGNUP_USERS, payload: payload });


// set post data-->
export const setPost = (payload) => ({ type: SET_POSTS, payload: payload });


// add Post data -->
export const addPostData = (payload) => ({ type: ADD_POST_DATA, payload: payload });

export const editPost = (payload) => ({ type: EDIT_POSTS, payload: payload });

// add Comment data-->
export const addCommentData = (payload) => {
    console.log(payload);
    return { type: ADD_COMMENT_DATA, payload: payload }
};
export const setComments = (payload) => (console.log(payload),{ type: SET_COMMENT, payload: payload })


// Add Task Data -->
export const addTaskData = (payload) => (console.log(payload),{ type: ADD_TASK_DATA, payload: payload });


export const setTask = (payload) => (console.log(payload),{ type: SET_TASKS, payload: payload });


export const addDate = (payload) => (console.log(payload),{ type: ADD_DATE, payload: payload });
export const setDate = (payload) => (console.log(payload),{ type: SET_DATE, payload: payload });
