import { addUser } from "../../Service/api";
import { useHistory} from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import { signUpUser } from '../../Actions/action'


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
            Name:<input name="name" type="text" onChange={(e) => onValueChange(e)} /><br></br>
            Email <input name="email" type="email" onChange={(e) => onValueChange(e)} /><br></br>
            city<input name="city" type="text" onChange={(e) => onValueChange(e)}/><br></br>
            field<input name="field" type="text" onChange={(e) => onValueChange(e)} /><br></br>
            Password<input name="password" type="password" onChange={(e) => onValueChange(e)} /><br></br>
            <Button variant="primary" onClick={() => addUserDetails()}>Sign Up</Button>
        </form>

        </>
    )
}
export default Signup;
















