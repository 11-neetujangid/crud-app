
import { Button } from "react-bootstrap";
import { useHistory, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { userComment } from '../../Service/api'
import { addCommentData } from "../../Actions/action";

const PostComment = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    console.log(id)
    const history = useHistory();

    const comment = useSelector((state) => state.addComment);
    console.log(comment);

    const onValueChange = (e) => {
        console.log(e.target.value);
        dispatch(addCommentData({ ...comment, [e.target.name]: e.target.value }));
        console.log(comment);
    }
    const addCommentDetails = () => {
        console.log("comment data", comment)
        dispatch(userComment(comment, id));
        history.push('/Comment');
    }

    return (
        <div>
            <h1>Comments</h1>
            <form >
                Comment:<input name="body" type="text" onChange={(e) => onValueChange(e)} placeholder="body" /><br></br>
                <Button variant="primary" onClick={() => addCommentDetails()}>Add Comment</Button>
            </form>

        </div>
    )
}

export default PostComment;