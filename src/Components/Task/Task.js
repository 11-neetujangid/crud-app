import { Button } from "react-bootstrap";
import { addTaskData } from "../../Actions/action";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { taskUser } from "../../Service/api";


const Task = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const task = useSelector((state) => state.task);
    console.log(task);
    const userName = useSelector((state) => state.task.user);
    console.log(userName);

    const onValueChange = (e) => {
        console.log(e.target.value);
        dispatch(addTaskData({ ...task, [e.target.name]: e.target.value }));
        console.log(task)
    }
    const addTaskDetails = () => {
        console.log(task);
        dispatch(taskUser(task));
        history.push('/AddPosts');
    }

   
    return (
        <div>
            <h1>Task</h1>
            <form>
                Title:<input name="title" type="text" placeholder="title" onChange={(e) => onValueChange(e)} /><br></br>
                Date <input name="date" type="date" onChange={(e) => onValueChange(e)} /><br></br>
                StartTime <input name="startTime" type="time" onChange={(e) => onValueChange(e)} /><br></br>
                EndTime <input name="endTime" type="time" onChange={(e) => onValueChange(e)} /><br></br>
                User <input name="user" type="text" defaultValue={userName} /><br></br>
                <Button variant="primary" onClick={() => addTaskDetails()}>Add</Button>
            </form>
        </div>
    )
}
export default Task;