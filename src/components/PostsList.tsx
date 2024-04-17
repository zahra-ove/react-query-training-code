import usePost from "../hooks/usePost.ts";
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from "react";

function PostsList() {
    const pageSize = 10;
    const [page, setPage] = useState(1);
    const {data, error, isLoading} = usePost({page, pageSize});


    if (error) return <p>{error.message}</p>
    if (isLoading) return <p>Loading ...</p>

    return (
        <>
            <ul className="list-group">
                {data?.map(post =>
                    <li className="list-group-item" key={post.id}>{post.title}</li>
                )}
            </ul>

            <button
                className="btn btn-primary"
                disabled={page === 1}
                onClick={() => setPage(page - 1)}>Previous</button>

            <button
                className="btn btn-primary mx-1"
                onClick={() => setPage(page + 1)}>Next</button>
        </>
    );
}

export default PostsList;