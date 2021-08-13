
import { useDispatch, useSelector } from "react-redux";
import { postUser } from "../../Service/api"
import { useHistory } from "react-router";
import { Button } from "react-bootstrap";
import { addPostData } from "../../Actions/action";


const AllPosts = () => {

    const history = useHistory();
    const dispatch = useDispatch();

    const post = useSelector((state) => state.addPost);
    console.log(post);

    const onValueChange = (e) => {
        // console.log(e.target.value);
        dispatch(addPostData({ ...post, [e.target.name]: e.target.value }));
        console.log(post);
    }
    const addPostDetails = () => {
        console.log(post);
        dispatch(postUser(post))
        history.push('/post')
    }
    return (
        <div>
            <h1>AllPosts</h1>

            <form>
                Title:<input name="title" type="text" onChange={(e) => onValueChange(e)} placeholder="title" /><br></br>
                Body <input name="body" type="text" onChange={(e) => onValueChange(e)} placeholder="body" /><br></br>
                <Button variant="primary" onClick={() => addPostDetails()}>Add Posts</Button>
            </form>
        </div>
    )

}


export default AllPosts
