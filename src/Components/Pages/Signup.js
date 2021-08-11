
import { useState } from "react";
import { addUser } from "../../Service/api";
import { useHistory } from "react-router";
<<<<<<< HEAD
import { useSelector } from "react-redux";
=======
>>>>>>> a2042107a4746a2521f6a1a0eb77a7cbce32b7ec
// import { Button } from "react-bootstrap";

const initialState = {

    name: '',
    email: '',
    city: '',
    field: '',
    password:''
}
const Signup = () => {
    const history = useHistory();
    const [user, setUser] = useState(initialState);
    const { name, email, city, field ,password} = user;

    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({ ...user, [e.target.name]: e.target.value })
        console.log(user);
    }
<<<<<<< HEAD
    const login= useSelector(state => state.login);
    console.log(login)
=======
>>>>>>> a2042107a4746a2521f6a1a0eb77a7cbce32b7ec

    const addUserDetails = () => {
        
        addUser(user);
        history.push('/signin')
    }
<<<<<<< HEAD
    const users = useSelector(state => state.login);
    console.log(users);
    return (
        <>
        <h2 >SignUp Page</h2>
=======
    return (
        <>
        <h2 >SignUP Page</h2>
>>>>>>> a2042107a4746a2521f6a1a0eb77a7cbce32b7ec
        <form onSubmit={() => addUserDetails()}>
            Name:<input name="name" type="text" onChange={(e) => onValueChange(e)} value ={name}/><br></br>
            Email <input name="email" type="email" onChange={(e) => onValueChange(e)} value ={email}/><br></br>
            city<input name="city" type="text" onChange={(e) => onValueChange(e)} value ={city}/><br></br>
            field<input name="field" type="text" onChange={(e) => onValueChange(e)} value ={field}/><br></br>
            Password<input name="password" type="password" onChange={(e) => onValueChange(e)}value ={password} /><br></br>

            <button type="submit" className="btn btn-outline-primary" onClick={() => addUserDetails()} >Sign Up</button>
            {/* <Button variant="outline-primary" onClick={() => addUserDetails()}>Add User</Button> */}
        </form>
        </>
    )
}
export default Signup;
<<<<<<< HEAD




=======
>>>>>>> a2042107a4746a2521f6a1a0eb77a7cbce32b7ec


















