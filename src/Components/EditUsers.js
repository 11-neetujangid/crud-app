import { useEffect} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { editUsers, getUserById } from '../Service/api';
import { useDispatch, useSelector } from 'react-redux';
import { editUser } from '../Actions/action';



const EditUsers = () => {
    const history = useHistory();
    const dispatch = useDispatch()

    const { id } = useParams();
    console.log(id)


    useEffect(() => {
        dispatch(getUserById(id))
    }, []);

    const users = useSelector((state => state.editUsers));
    console.log(users);

    const onchangeInput = (e) => {
       dispatch( editUser({ ...users, [e.target.name]: e.target.value }))
    }

    const editUserDetails = (id) => {
       dispatch( editUsers(id, users));
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

                <button type="submit" onClick={() => editUserDetails(id)}> Update </button>
            </form>
        </div>
    )
}

export default EditUsers;