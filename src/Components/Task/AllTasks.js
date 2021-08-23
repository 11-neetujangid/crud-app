// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux"
// import { useHistory } from "react-router";
// import { getTasks } from "../../Service/api";
// import DatePicker from "react-datepicker";
// import { useState } from "react";
// import "react-datepicker/dist/react-datepicker.css";
// const AllTasks = () => {

//     const dispatch = useDispatch();
//     const history = useHistory();

//     useEffect(() => {
//         dispatch(getTasks())
//     }, [])

//     const tasks = useSelector((state) => state.tasks);
//     console.log(tasks)

//     const onClickEdit = (Id) => {
//         console.log(Id)
//         // history.push(`/EditTask/${Id}`)
//     }
//     const [startDate, setStartDate] = useState(null);
//     const [endDate, setEndDate] = useState(null);

//     return (
//         <div className="App-header">
//             <div div style={{ display: "flex" }}>
//                 <DatePicker
//                     placeholderText="Select Start Date"
//                     showTimeSelect
//                     dateFormat="MMMM d, yyyy h:mmaa"
//                     selected={startDate}
//                     selectsStart
//                     startDate={startDate}
//                     endDate={endDate}
//                     onChange={date => setStartDate(date)}
//                 />
//                 <DatePicker
//                     placeholderText="Select End Date"
//                     selected={endDate}
//                     selectsEnd
//                     startDate={startDate}
//                     endDate={endDate}
//                     minDate={startDate}
//                     onChange={date => setEndDate(date)}
//                 />


//             </div>
//             <br /> <h2>All Tasks</h2><br />

//             <table style={{ border: "2px solid #ddd" }} >
//                 <thead style={{ border: "2px solid #ddd" }}>
//                     <tr>
//                         <th >id</th>
//                         <th >Title</th>
//                         <th>Date</th>
//                         <th>StartTime</th>
//                         <th>EndTime</th>
//                         <th>User</th>
//                         <th>Action</th>
//                     </tr>
//                 </thead>

//                 <tbody>

//                     {
//                         tasks.map(record => (
//                             <tr style={{ border: "2px solid #ddd" }}>
//                                 <td>{record._id}</td>
//                                 <td>{record.title}</td>
//                                 <td>{record.date}</td>
//                                 <td>{record.startTime}</td>
//                                 <td>{record.endTime}</td>
//                                 <td>{record.user}</td>
//                                 <td> <button type="button" className="btn btn-outline-primary" onClick={() => onClickEdit(record._id)}>Edit</button></td>
//                             </tr>

//                         ))

//                     }

//                 </tbody>

//             </table>

//         </div>
//     )
// }
// export default AllTasks





import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router";
import { getTasks } from "../../Service/api";
import {addDate }from '../../Actions/action'
import "react-datepicker/dist/react-datepicker.css";
import { Button } from "react-bootstrap";
import { dates } from "../../Service/api";
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
    const date = useSelector((state) => state.dates);
    console.log(date)
    const onDateChange = (e) => {
        dispatch(addDate({ ...date, [e.target.name]: e.target.value }))
    }
    const addDateDetails = () => {
      
        dispatch(dates(date))
        // history.push('/post')
    }

    
    return (
        <div className="App-header">
            <div div style={{ display: "flex" }}>

                StartDate:<input type="date" name="sDate" onChange={(e) => onDateChange(e)} />
                EndDate: <input type="date" name="eDate" onChange={(e) => onDateChange(e)} />
                <Button variant="primary" onClick={() => addDateDetails()}>Set Date</Button>

            </div>
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