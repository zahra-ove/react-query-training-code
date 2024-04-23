import usePost from "../hooks/usePost.ts";
import 'bootstrap/dist/css/bootstrap.css';
import { Fragment } from "react";

function PostsList() {
    const pageSize = 10;
    const {data, error, isLoading, fetchNextPage, isFetchingNextPage} = usePost({pageSize});


    if (error) return <p>{error.message}</p>
    if (isLoading) return <p>Loading ...</p>

    return (
        <>
            <ul className="list-group">
                {data.pages.map((page, index) =>
                    <Fragment key={index}>
                        {page.map(post => <li className="list-group-item" key={post.id}>{post.title}</li>  )}
                    </Fragment>
                )}
            </ul>

            <button
                className="btn btn-primary"
                disabled={isFetchingNextPage}
                onClick={ () => fetchNextPage() }>
                {isFetchingNextPage ? 'Loading ...' : 'Load More'}
            </button>

        </>
    );
}

export default PostsList;