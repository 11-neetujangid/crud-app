import axios from "axios";
import { setUser, editUser, SignInUser, setPost, signUpUser, setComments, editPost, setTask, setDate, setData } from "../Actions/action";

const url = "http://localhost:3001/users";

const request = axios.create({
    baseURL: 'http://localhost:3001'
});


// get users data --->
export const getUsers = () => async (dispatch, getState) => {
    try {
        const response = await request.get('/users');
        console.log(response.data)
        dispatch(setUser(response.data));

    } catch (err) {
        console.log(err);
    }
}

// signin users-->
export const loginUser = (user) => async (dispatch, getState) => {
    console.log(user)
    try {
        const response = await axios.post(`${url}/signin`, user);
        console.log(response.data);
        dispatch(SignInUser(response.data));

    } catch (err) {
        console.log(err);
    }
}
// get users data by id-->
export const getUserById = (id) => async (dispatch, getState) => {
    try {
        const response = await request.get(`/users/${id}`);
        dispatch(editUser(response.data));

    } catch (err) {
        console.log(err);
    }
}

// add users data-->
export const addUser = (user) => async (dispatch, getState) => {
    console.log(user)
    // return await axios.post(`${url}/add`, user);

    try {
        const response = await axios.post(`${url}/add`, user);
        console.log(response.data);
        dispatch(signUpUser(response.data));

    } catch (err) {
        console.log(err);
    }

}

// delete users data--->
export const deleteUser = async (id) => {
    console.log(id)
    const a = await axios.delete(`${url}/${id}`);
    console.log(a)

}
// edit users data--->
export const editUsers = (id, user) => async (dispatch, getState) => {
    try {
        const response = await request.put(`/users/${id}`, user);
        dispatch(editUser(response.data));

    } catch (err) {
        console.log(err);
    }
}

// Add Posts data--->
export const postUser = (user) => async (dispatch, getState) => {
    console.log(user)
    try {
        const response = await axios.post(`${url}/addPost`, user);
        console.log(response.data);

    } catch (err) {
        console.log(err);
    }
}

// get post data---> 
export const getPosts = () => async (dispatch, getState) => {
    try {

        const response = await request.get(`/users/post`);
        console.log(response.data)
        dispatch(setPost(response.data));

    } catch (err) {
        console.log(err);
    }
}

// add Comments --->
export const userComment = (comment) => async (dispatch) => {
    console.log(comment);

    try {
        const response = await axios.post(`${url}/addcomment`, comment);
        console.log(response.data);

    } catch (err) {
        console.log(err);
    }
}

// get comment data-->
export const getComments = () => async (dispatch, getState) => {
    try {

        const response = await request.get(`/users/comment`);
        console.log(response.data)
        dispatch(setComments(response.data));

    } catch (err) {
        console.log(err);
    }
}

export const getPostById = (id) => async (dispatch, getState) => {
    console.log(id);
  
    try {
        const response = await axios.get(`${url}/addPost/${id}`);
        console.log(response.data)

        dispatch(editPost(response.data));
        return response;

    } catch (err) {
        console.log(err);
    }
}

export const editPosts = (id, user) => async (dispatch, getState) => {

    console.log(user);
    console.log(id)
    try {
        const response = await axios.put(`${url}/addPost/${id}`, user);
        console.log(response.data);
        dispatch(editPost(response.data));
        return response;

    } catch (err) {
        console.log(err);
    }

}
// Add Task Data --->
export const taskUser = (user) => async (dispatch, getState) => {
    console.log(user)
    try {
        const response = await axios.post(`${url}/addtask`, user);
        console.log(response.data);

    } catch (err) {
        console.log(err);
    }
}

// get Tasks Data--->
export const getTasks = () => async (dispatch, getState) => {
    try {

        const response = await request.get(`/users/task`);
        console.log(response.data)
        dispatch(setTask(response.data));

    } catch (err) {
        console.log(err);
    }
}

export const dates = (date) => async (dispatch, getState) => {
    console.log(date)

    console.log(`${url}/dates/?date=${date}`);
    try {

        const response = await request.get(`/users/dates/?date=${date}`);
        // const response = await axios.get(`${url}/dates/?date=${date}`); 
        console.log(response.data);
        dispatch(setDate(response.data));

    } catch (err) {
        console.log(err);
    }
}