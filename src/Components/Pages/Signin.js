import { useState } from "react";
import { loginUser } from "../../Service/api";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";


const initialValue = {
  
    email: '',
    password: ''
}
const Signin = () =>{
    const history = useHistory();
    const dispatch = useDispatch()

    const [user, setUser] = useState(initialValue);
    const { email, password } = user;

    const onchangeInput = (e) => {
     
        setUser({ ...user, [e.target.name]: e.target.value })
        console.log(user)

    }
    const editUserDetails = () => {
        dispatch(loginUser(user))
        history.push('/user');
    }
    const users = useSelector((state => state.token));
    console.log(users);

    return (
        <div>

            <form>
               <h2>Login Page</h2>
                Email <input name="email" type="email" value={email} onChange={onchangeInput} /><br></br>  
                Password<input name="password" type="password" value ={password} onChange={onchangeInput} /><br></br>
                <button type="submit" onClick={() => editUserDetails()}> Login </button>
            </form>
        </div>
    )
}

export default Signin;












