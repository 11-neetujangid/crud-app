import { addUser } from "../../Service/api";
<<<<<<< HEAD
import { useHistory} from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import { signUpUser } from '../../Actions/action'


=======
import { useHistory } from "react-router";

import { useSelector } from "react-redux";

// import { Button } from "react-bootstrap";

const initialState = {

    name: '',
    email: '',
    city: '',
    field: '',
    password:''
}
>>>>>>> fcd1258099bb8c7a2d13db966e3d251b29fa3a9c
const Signup = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const users = useSelector(state => state.register);
    console.log(users);

    const onValueChange = (e) => {
        dispatch(signUpUser({ ...users, [e.target.name]: e.target.value }));
    }
<<<<<<< HEAD
=======

    const login= useSelector(state => state.login);
    console.log(login)


>>>>>>> fcd1258099bb8c7a2d13db966e3d251b29fa3a9c
    const addUserDetails = () => {
        dispatch(addUser(users));
        history.push('/signin')
    }

<<<<<<< HEAD
    return (
        <>
            <h2 >SignUp Page</h2>
            <form onSubmit={() => addUserDetails()}>
                Name:<input name="name" type="text" onChange={onValueChange} /><br></br>
                Email <input name="email" type="email" onChange={(e) => onValueChange(e)} /><br></br>
                city<input name="city" type="text" onChange={(e) => onValueChange(e)} /><br></br>
                field<input name="field" type="text" onChange={(e) => onValueChange(e)} /><br></br>
                Password<input name="password" type="password" onChange={(e) => onValueChange(e)} /><br></br>
                <Button variant="primary" onClick={() => addUserDetails()}>Sign Up</Button>
            </form>
=======
    const users = useSelector(state => state.login);
    console.log(users);
    return (
        <>
        <h2 >SignUp Page</h2>

    return (
        <>
        <h2 >SignUP Page</h2>

        <form onSubmit={() => addUserDetails()}>
            Name:<input name="name" type="text" onChange={(e) => onValueChange(e)} value ={name}/><br></br>
            Email <input name="email" type="email" onChange={(e) => onValueChange(e)} value ={email}/><br></br>
            city<input name="city" type="text" onChange={(e) => onValueChange(e)} value ={city}/><br></br>
            field<input name="field" type="text" onChange={(e) => onValueChange(e)} value ={field}/><br></br>
            Password<input name="password" type="password" onChange={(e) => onValueChange(e)}value ={password} /><br></br>

            <button type="submit" className="btn btn-outline-primary" onClick={() => addUserDetails()} >Sign Up</button>
            {/* <Button variant="outline-primary" onClick={() => addUserDetails()}>Add User</Button> */}
        </form>
>>>>>>> fcd1258099bb8c7a2d13db966e3d251b29fa3a9c
        </>
    )
}
export default Signup;
<<<<<<< HEAD
=======


>>>>>>> fcd1258099bb8c7a2d13db966e3d251b29fa3a9c
















