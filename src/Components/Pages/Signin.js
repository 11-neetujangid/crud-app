import { useState } from "react";
import { loginUser } from "../../Service/api";
import { useHistory } from "react-router";
// import { Button } from "react-bootstrap";

const initialState = {
    email: '',
    password: ''
}
const Signup = () => {
    const history = useHistory();
    const [user, setUser] = useState(initialState);
    const { email, password } = user;

    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({ ...user, [e.target.name]: e.target.value })
        console.log(user);
    }

    const addUserDetails = () => {
        loginUser(user);
        history.push('/user')
    }
    return (
        <form>
            <h2>Login Page</h2>
            Email <input name="email" type="email" onChange={(e) => onValueChange(e)} value={email} /><br></br>
            Password<input name="password" type="password" onChange={(e) => onValueChange(e)} value={password} /><br></br>
            <button type="submit" className="btn btn-outline-primary" onClick={() => addUserDetails()} >Login</button>
            {/* <Button variant="outline-primary" onClick={() => addUserDetails()}>Add User</Button> */}
        </form>
    )
}
export default Signup;

















