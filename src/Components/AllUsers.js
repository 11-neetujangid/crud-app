import { useEffect, useState } from "react";
import { getUsers, deleteUser, getuser } from "../Service/api";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from 'react-redux';

const AllUsers = () => {

    // const [users, setUsers] = useState([]);
    // console.log(users)
    const history = useHistory();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUsers());
    }, [])

    // const getAllUsers = async () => {
    //     const response = await getuser();
    //     console.log(response.data);
    //     // setUsers(response.data)
    // }
    const records = useSelector((state => state.users));
    // console.log(records);

    // const data = records[0] ? Object.keys(records[1]) : []
    // console.log(data);  

    const onClickEdit = (Id) => {
        console.log(Id)
        history.push(`/EditUsers/${Id}`)
    }

    const deleteUserData = async (id) => {
        await deleteUser(id);
        // getAllUsers();
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
                    records.map(record =>(
                        <tr>
                            <td>{record._id}</td>
                            <td>{record.name}</td>
                            <td>{record.email}</td>
                            <td>{record.city}</td>
                            <td>{record.field}</td>
                            <td>{record.password}</td>
                            <td><button onClick ={() => onClickEdit(record._id)}>Edit</button></td>
                            <td><button onClick ={() => deleteUserData(record._id)}>Delete</button></td>
                            
                        </tr>
                    ))
                    }

                </tbody>
            </table>
        </div>
    )
}
export default AllUsers;