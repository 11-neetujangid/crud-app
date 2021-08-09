import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { editUsers, getUserById } from '../Service/api';
import { useDispatch, useSelector } from 'react-redux';


const initialValue = {
    name: '',
    email: '',
    city: '',
    field: '',
    password: ''
}


const EditUsers = () => {
    const history = useHistory();
    const dispatch = useDispatch()

    const [user, setUser] = useState(initialValue);
    const { name, email, city, field, password } = user;

    const { id } = useParams();
    console.log(id)


    useEffect(() => {
        dispatch(getUserById(id))
    }, []);



    const users = useSelector((state => state.records));
    console.log(users);

    const onchangeInput = (e) => {

        setUser({ ...user, [e.target.name]: e.target.value })

    }

    const editUserDetails = () => {
        editUsers(id, user);
        history.push('/user');
    }

    return (
        <div>

            <form>

                Name:<input name="name" type="text" defaultValue={users.name} onChange={(e) => onchangeInput(e)} /><br></br>
                Email <input name="email" type="email" defaultValue={users.email} onChange={onchangeInput} /><br></br>
                City<input name="city" type="text" defaultValue={users.city} onChange={onchangeInput} /><br></br>
                Field<input name="field" type="text" defaultValue={users.field} onChange={onchangeInput} /><br></br>
                Password<input name="password" type="password" defaultValue={users.password} onChange={onchangeInput} /><br></br>

                <button type="submit" onClick={() => editUserDetails()}> Update </button>
            </form>
        </div>
    )
}

export default EditUsers;