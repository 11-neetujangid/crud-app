import { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPostById , editPosts} from '../../Service/api';
import { editPost } from '../../Actions/action';
import { Button } from 'react-bootstrap';


const EditPost = () => {
    const history = useHistory();
    const dispatch = useDispatch()

    const { id } = useParams();
    console.log(id)

    useEffect(() => {
        dispatch(getPostById(id));
    }, []);

    const edit = useSelector((state => state.editPosts));
    console.log(edit);

    const userId = useSelector((state => state.addPost.userId));
    console.log(userId);


    const onchangeInput = (e) => {
        dispatch(editPost({ ...edit, [e.target.name]: e.target.value }));
    }

    const editUserDetails = () => {
            dispatch(editPosts(id, edit));
            history.push('/post');
    }
    return (
        <div>

            <form>
                Title:<input name="title" type="text" defaultValue={edit.title} onChange={(e) => onchangeInput(e)} /><br></br>
                body <input name="body" type="text" defaultValue={edit.body} onChange={onchangeInput} /><br></br>
                <Button variant="primary" onClick={() => editUserDetails(id)}>Update</Button>
            </form>
        </div>
    )
}

export default EditPost;