
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getComments } from "../../Service/api";
const AllComments = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getComments());
    }, [])

    const comments = useSelector((state => state.comments));
    console.log(comments)

    return (
        <div>
            <table>
                <tr>
                    <th>id</th>
                    <th>Comments</th>
                </tr>
                <tbody>
                    {
                        comments.map(record => (
                            <tr>
                                <td>{record._id}</td>
                                <td>{record.body}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
export default AllComments;