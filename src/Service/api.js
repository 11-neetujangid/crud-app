import axios from "axios";
import { setUser, editUser, SignInUser ,setPost ,signUpUser, setComments, editPost} from "../Actions/action";

const url = "http://localhost:3001/users";

const request = axios.create({
    baseURL: 'http://localhost:3001'
});

// get users data --->
export const getUsers = () => async (dispatch, getState) => {
    try {
        const response = await request.get('/users');
        // console.log(response)
        dispatch(setUser(response.data));

    } catch (err) {
        console.log(err);
    }
}

<<<<<<< HEAD
// signin users-->
=======
>>>>>>> fcd1258099bb8c7a2d13db966e3d251b29fa3a9c
export const loginUser = (user) => async (dispatch, getState) => {
    console.log(user)
    try {
        const response = await axios.post(`${url}/signin`, user);
        console.log(response.data);
        dispatch(SignInUser(response.data));

    } catch (err) {
        console.log(err);
    }
<<<<<<< HEAD
=======
}

>>>>>>> fcd1258099bb8c7a2d13db966e3d251b29fa3a9c
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
export const userComment = (comment)=> async (dispatch) =>{
    console.log(comment);
   
    try {
        const response = await axios.post(`${url}/addcomment`,comment);
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

export const editPosts = (id,user)=> async (dispatch, getState) =>{
   
    console.log(user);
    console.log(id)
    try {
        const response = await axios.put(`${url}/addPost/${id}`,user);
        console.log(response.data);
         
        dispatch(editPost(response.data));
        return response;

    } catch (err) {
        console.log(err);
    }  

}