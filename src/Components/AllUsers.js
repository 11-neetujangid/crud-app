import { useEffect, useState } from "react";
import { getUsers, deleteUser, getuser } from "../Service/api";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from 'react-redux';

const AllUsers = () => {

    const [users, setUsers] = useState([]);
    const history = useHistory();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUsers());
    }, [])

    const getAllUsers = async () => {
        const response = await getuser();
        console.log(response.data);
        setUsers(response.data)
    }
    const records = useSelector((state => state.users));
    console.log(records);

    const data = records[0] ? Object.keys(records[1]) : []
    console.log(data);

    const onClickEdit = (Id) => {
        console.log(Id)
        history.push(`/EditUsers/${Id}`)
    }

    const deleteUserData = async (id) => {
        await deleteUser(id);
        getAllUsers();
    }

    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        {data.map((header) => (
                            <th key={header}>
                                {header}
                            </th>
                        ))}
                    </tr>
                    {records.map((record) =>
                        <tr key={record.id}>
                            {data.map((field) => (
                                <td key={field}>
                                    {typeof record[field] === 'object' ? JSON.stringify(record[field]) : record[field]}
                                </td>
                            ))}


                            <td><button onClick={() => onClickEdit(record._id)}>Edit</button></td>
                            <td><button onClick={() => deleteUserData(record._id)}>Delete</button></td>
                        </tr>
                    )}

                </tbody>
            </table>
        </div>
    )
}
export default AllUsers;