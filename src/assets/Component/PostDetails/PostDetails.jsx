import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    // const params = useParams();
    const { id, title, body } = post;
    const navigate = useNavigate();
    // console.log(params)
    const goBackDetails = () => {
        navigate(-1)
    }
    return (
        <div>
            <h3>Post details about: {id}</h3>
            <p>Title: {title}</p>
            <p><small>{body}</small></p>
            <button onClick={goBackDetails}>Go back</button>
        </div>
    );
};

export default PostDetails;