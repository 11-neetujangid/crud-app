import { useEffect } from "react";
import { getUsers, deleteUser} from "../Service/api";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from 'react-redux';


const AllUsers = () => {

    const history = useHistory();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUsers());
    }, [])

    const records = useSelector((state => state.users));

    const onClickEdit = (Id) => {
        console.log(Id)
        history.push(`/EditUsers/${Id}`)
    }

    const deleteUserData = async (id) => {
        await dispatch(deleteUser(id));

    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>email</th>
                        <th>city</th>
                        <th>field</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        records.map(record => (
                            <tr key ={record.id}>
                                <td>{record._id}</td>
                                <td>{record.name}</td>
                                <td>{record.email}</td>
                                <td>{record.city}</td>
                                <td>{record.field}</td>
                                <td>{record.password}</td>
                                <td> <button type="button" className="btn btn-outline-primary" onClick={() => onClickEdit(record._id)}>Edit</button></td>
                                <td><button type="button" className="btn btn-outline-primary" onClick={() => deleteUserData(record._id)}>Delete</button></td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </div>
    )
}
export default AllUsers;