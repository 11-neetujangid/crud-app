import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router";
import { getTasks } from "../../Service/api";
import "react-datepicker/dist/react-datepicker.css";

import Dates from "../Dates";
const AllTasks = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch(getTasks())
    }, [])

    const tasks = useSelector((state) => state.tasks);
    console.log(tasks)

    const onClickEdit = (Id) => {
        console.log(Id)
        // history.push(`/EditTask/${Id}`)
    }
   

    return (
        <div className="App-header">
    
            <Dates />
            <br /> <h2>All Tasks</h2><br />

            <table style={{ border: "2px solid #ddd" }} >
                <thead style={{ border: "2px solid #ddd" }}>
                    <tr>
                        <th >id</th>
                        <th >Title</th>
                        <th>Date</th>
                        <th>StartTime</th>
                        <th>EndTime</th>
                        <th>User</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>

                    {
                        tasks.map(record => (
                            <tr style={{ border: "2px solid #ddd" }}>
                                <td>{record._id}</td>
                                <td>{record.title}</td>
                                <td>{record.date}</td>
                                <td>{record.startTime}</td>
                                <td>{record.endTime}</td>
                                <td>{record.user}</td>
                                <td> <button type="button" className="btn btn-outline-primary" onClick={() => onClickEdit(record._id)}>Edit</button></td>
                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </div>
    )
}
export default AllTasks