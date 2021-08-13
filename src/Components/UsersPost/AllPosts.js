import { useEffect } from "react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import { getPosts} from "../../Service/api";

const AllPosts = () => {

    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [])

    const posts = useSelector((state => state.posts));
    console.log(posts)

    const onClickEdit = (Id) => {
        console.log(Id)
        history.push(`/EditPost/${Id}`)
    }

    const onClickCommnet = (Id) => {
        history.push(`/Comment/${Id}`)

    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Title</th>
                        <th>body</th>
                        <th>Actions</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        posts.map(record => (
                            <tr>
                                <td>{record._id}</td>
                                <td>{record.title}</td>
                                <td>{record.body}</td>

                                <td> <button type="button" className="btn btn-outline-primary" onClick={() => onClickEdit(record._id)}>Edit</button></td>
                                <td><button type="button" className="btn btn-outline-primary" onClick={() => onClickCommnet(record._id)}>Comment</button></td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </div>
    )
}
export default AllPosts;