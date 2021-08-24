import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { addDate } from '../../src/Actions/action'
import { Button } from "react-bootstrap";
import { dates, getTasks } from "../Service/api";
import { useState } from "react";
import { useEffect } from "react";



const Dates = () => {
    const dispatch = useDispatch();
    const history = useHistory();


    const date = useSelector((state) => state.dates);
    console.log(date);
    console.log(date.sDate)
    const [filterrData, setfilterData] = useState([]);

    const Task = useSelector((state) => state.tasks)
    console.log(Task)


    const lower = date.sDate;
    const upper = date.eDate
    const onDateChange = (e) => {
        dispatch(addDate({ ...date, [e.target.name]: e.target.value }))
    }

    const addDateDetails = () => {
        dispatch(dates(JSON.stringify(date)));
    }

    useEffect(() => {
        console.log("datess")
        dispatch(getTasks());

    }, [])

    useEffect(() => {
        console.log("filter");
        setfilterData(Task.filter(user => lower <= user.date && user.date <= upper));

    }, [date])

    const allTasks = Task.length > 0 ? Object.keys(Task[0]) : [];
    return (
        <div className="App-header">
            <h1>dates</h1>
            <div div style={{ display: "flex" }}>
                StartDate:<input type="date" name="sDate" onChange={onDateChange} />
                EndDate: <input type="date" name="eDate" onChange={onDateChange} />
                <Button variant="primary" onClick={() => addDateDetails()}>Set Date</Button>
            </div><br /><br />

            {filterrData.length === 0 ?
                <div>No Record Found </div> :

                <table>
                    <tbody>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Date</th>
                            <th>Start Time</th>
                            <th>End Time</th>
                            <th>User</th>

                        </tr>
                        {Task.map((task) => (
                            <tr key={task.id}>
                                {allTasks.map((val) => (
                                    <td >
                                        {task[val]}
                                    </td>))}
                            </tr>
                        ))}
                    </tbody>
                </table>

            }
        </div>
    )
}
export default Dates




