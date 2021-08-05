import axios from "axios";
import { setUser, editUser } from "../Actions/action";

const url = "http://localhost:3001/users";

const request = axios.create({
    baseURL: 'http://localhost:3001'
});

export const getUsers = () => async (dispatch, getState) => {
    try {
        const response = await request.get('/users');
        dispatch(setUser(response.data));

    } catch (err) {
        console.log(err);
    }
}
export const getUserid = (id) => async (dispatch, getState) => {
    try {
        const response = await request.get(`/users/${id}`);
        dispatch(editUser(response.data));

    } catch (err) {
        console.log(err);
    }
}
export const getuser = async (id) => {

    return await axios.get(`${url}/${id}`);
}

export const addUser = async (user) => {
    return await axios.post(`${url}/add`, user);

}
export const deleteUser = async (id) => {
    return await axios.delete(`${url}/${id}`)
}

export const editUsers = (id, user) => async (dispatch, getState) => {
    try {
        const response = await request.put(`/users/${id}`, user);
        dispatch(editUser(response.data));

    } catch (err) {
        console.log(err);
    }
}
