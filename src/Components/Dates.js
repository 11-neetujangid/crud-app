import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
// import { addDate } from '../../Actions/action'
import { addDate } from '../../src/Actions/action'
import { Button } from "react-bootstrap";
import { dates } from "../Service/api";



const Dates = () => {
    const dispatch = useDispatch();
    const history = useHistory();


    const date = useSelector((state) => state.dates);
    console.log(date);

   
    const onDateChange = (e) => {
        dispatch(addDate({ ...date, [e.target.name]: e.target.value }))
        // setFilterData({...filterData, [e.target.name]: e.target.value})
    }

    const addDateDetails = () => {
        dispatch(dates(JSON.stringify(date)));
    }

    return (
        <div>
            <h1>dates</h1>

            <div div style={{ display: "flex" }}>
                StartDate:<input type="date" name="sDate" onChange={(e) => onDateChange(e)} />
                EndDate: <input type="date" name="eDate" onChange={(e) => onDateChange(e)} />
                <Button variant="primary" onClick={() => addDateDetails()}>Set Date</Button>
            </div>
        </div>
    )
}
export default Dates




