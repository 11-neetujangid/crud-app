

import { useState } from "react";
import { addUser } from "../Service/api";
import { useHistory } from "react-router";
// import { Button } from "react-bootstrap";

const initialState = {

    name: '',
    email: '',
    city: '',
    field: ''
}
const AddUsers = () => {
    const history = useHistory();
    const [user, setUser] = useState(initialState);
    const { name, email, city, field } = user;

    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({ ...user, [e.target.name]: e.target.value })
        console.log(user);
    }

    const addUserDetails = () => {
          dispatch(addUser(user));
        history.push('/')
    }
    return (
        <form>
            Name:<input name="name" type="text" onChange={(e) => onValueChange(e)} /><br></br>
            Email <input name="email" type="email" onChange={(e) => onValueChange(e)} /><br></br>
            city<input name="city" type="text" onChange={(e) => onValueChange(e)} /><br></br>
            field<input name="field" type="text" onChange={(e) => onValueChange(e)} /><br></br>

            <button type="submit" className="btn btn-outline-primary" onClick={() => addUserDetails()} >Add user</button>
            {/* <Button variant="outline-primary" onClick={() => addUserDetails()}>Add User</Button> */}
        </form>
    )
}
export default AddUsers;

