import { loginUser } from "../../Service/api";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { setData } from "../../Actions/action";

const Signin = () => {
    const history = useHistory();
    const dispatch = useDispatch()

    const login = useSelector((state => state.login));
    console.log(login);


    const onchangeInput = (e) => {
        dispatch(setData({ ...login, [e.target.name]: e.target.value }))
        console.log(login)

    }
    const editUserDetails = () => {
        dispatch(loginUser(login))
        history.push('/user');
    }
    const users = useSelector((state => state.token));
    console.log(users);

    return (
        <div>
            <from>
                <h2>Login Page</h2>

                Email <input name="email" type="email" onChange={(e) => onchangeInput(e)} placeholder="Enter your email id" /><br></br>
                Password<input name="password" type="password" onChange={onchangeInput} placeholder="Enter your password" /><br></br>
                <Button variant="primary" onClick={() => editUserDetails()}>Login</Button>

            </from>
        </div>
    )
}

export default Signin;












