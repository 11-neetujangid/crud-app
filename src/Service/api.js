import axios from "axios";
import { setUser, editUser, SignInUser } from "../Actions/action";
import { useDispatch } from "react-redux";
const url = "http://localhost:3001/users";

const request = axios.create({
    baseURL: 'http://localhost:3001'
});

export const getUsers = () => async (dispatch, getState) => {
    try {
        const response = await request.get('/users');
        // console.log(response)
        dispatch(setUser(response.data));

    } catch (err) {
        console.log(err);
    }
}
export const loginUser = (user) => async (dispatch, getState) => {
    console.log(user)
    try {
        const response = await axios.post(`${url}/signin`, user);
        console.log(response.data);
        // window.localStorage.setItem('access_token', response.data.token);
        dispatch(SignInUser(response.data));

    } catch (err) {
        console.log(err);
    }
}

export const getUserById = (id) => async (dispatch, getState) => {
    try {
        const response = await request.get(`/users/${id}`);
        dispatch(editUser(response.data));

    } catch (err) {
        console.log(err);
    }
}

export const addUser = async (user) => {
    console.log(user)
    return await axios.post(`${url}/add`, user);

}

export const deleteUser = async (id) => {
    console.log(id)
    const a = await axios.delete(`${url}/${id}`);
    console.log(a)

}

export const editUsers = (id, user) => async (dispatch, getState) => {
    try {
        const response = await request.put(`/users/${id}`, user);
        dispatch(editUser(response.data));

    } catch (err) {
        console.log(err);
    }
}

