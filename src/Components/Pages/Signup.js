
// import { useState } from "react";
// import { addUser } from "../../Service/api";
// import { useHistory } from "react-router";
// // import { Button } from "react-bootstrap";

// const initialState = {

//     name: '',
//     email: '',
//     city: '',
//     field: '',
//     password:''
// }
// const Signup = () => {
//     const history = useHistory();
//     const [user, setUser] = useState(initialState);
//     const { name, email, city, field ,password} = user;

//     const onValueChange = (e) => {
//         console.log(e.target.value);
//         setUser({ ...user, [e.target.name]: e.target.value })
//         console.log(user);
//     }

//     const addUserDetails = () => {
        
//         addUser(user);
//         history.push('/signin')
//     }
//     return (
//         <>
//         <h2 >SignUP Page</h2>
//         <form onSubmit={() => addUserDetails()}>
//             Name:<input name="name" type="text" onChange={(e) => onValueChange(e)} value ={name}/><br></br>
//             Email <input name="email" type="email" onChange={(e) => onValueChange(e)} value ={email}/><br></br>
//             city<input name="city" type="text" onChange={(e) => onValueChange(e)} value ={city}/><br></br>
//             field<input name="field" type="text" onChange={(e) => onValueChange(e)} value ={field}/><br></br>
//             Password<input name="password" type="password" onChange={(e) => onValueChange(e)}value ={password} /><br></br>

//             <button type="submit" className="btn btn-outline-primary" onClick={() => addUserDetails()} >Sign Up</button>
//             {/* <Button variant="outline-primary" onClick={() => addUserDetails()}>Add User</Button> */}
//         </form>
//         </>
//     )
// }
// export default Signup;





import { useState } from "react";
import { useHistory } from "react-router-dom";
import { addUser } from "../../Service/api";

const initialValues={
    name:"",
    email:"",
    city:"",
    field:"",
    password:"",
}


const SignUp =()=>{

    const [user , setUser] = useState(initialValues);
    const {name, email, city , field , password} = user;
    const history = useHistory()
    const onValueChange=(e)=>{
        setUser({...user , [e.target.name]:e.target.value})
    
    }
    const addUserDetails = ()=>{
         addUser(user);
        history.push('/signin')
    }
    return(
        <>
        <h1> SignUp </h1>
        <form onSubmit={() => addUserDetails()} >
                name:<input name="name" type="text" placeholder="enter you name" onChange={(e)=>onValueChange(e)} value={name}/>
                <br></br>
                Email:<input name="email" type="email"  placeholder="enter you email " onChange={(e)=>onValueChange(e)} value={email}/>
                <br></br>
                City:<input name="city" type="text"  placeholder="enter you City " onChange={(e)=>onValueChange(e)}value={city}/>
                <br></br>
                Field:<input name="field" type="text" placeholder="enter you number " onChange={(e)=>onValueChange(e)} value={field} />
                <br></br>
                password:<input name="password" type="password" placeholder="enter password " onChange={(e)=>onValueChange(e)} value={password} />
                <br>
                </br>
                <button onClick={()=> addUserDetails()}  variant="primary" type="submit" > Sign Up  </button>
            </form>

        </>


    )
}

export default SignUp


















