import { addUser } from "../../Service/api";
import { useHistory} from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import { signUpUser } from '../../Actions/action'
// import { Button } from "react-bootstrap";



const Signup = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const users = useSelector(state => state.register);
    console.log(users);

    const onValueChange = (e) => {
        dispatch(signUpUser({ ...users, [e.target.name]: e.target.value }));
    }

    const login= useSelector(state => state.login);
    console.log(login)


    const addUserDetails = () => {
        dispatch(addUser(users));
        history.push('/signin')
    }

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















