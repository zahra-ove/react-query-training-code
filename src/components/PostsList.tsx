import usePost from "../hooks/usePost.ts";
import 'bootstrap/dist/css/bootstrap.css';
import {useState} from "react";

function PostsList() {
    const [userId, setUserId] = useState<number>();
    const {data, error, isLoading} = usePost(userId);

    if (error) return <p>{error.message}</p>
    if (isLoading) return <p>Loading ...</p>

    return (
        <>
            <select
                    onChange={event => setUserId(parseInt(event.target.value))}
                    value={userId}
                    className="form-select mb-2"
                    aria-label="Default select example"
            >
                <option value="">select a user ...</option>
                <option value="1">user 1</option>
                <option value="2">user 2</option>
                <option value="3">user 3</option>
            </select>

            <ul className="list-group">
                {data?.map(post =>
                    <li className="list-group-item" key={post.id}>{post.title}</li>
                )}
            </ul>
        </>
    );
}

export default PostsList;