import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({ post }) => {
    const { id, title, body } = post;
    const navigate = useNavigate();

    const postStyle = {
        border: '2px solid yellow',
        padding: '12px',
        borderRadius: '20px',
        textAlign: 'center'
    }

    const handleShowDetails = () =>{
        navigate(`/post/${id}`);
    }


    return (
        <div style={postStyle}>
            <h4>Post of Id: {id}</h4>
            <h3>{title}</h3>
            <h5>{body}</h5>
            <Link to={`/post/${id}`}>
                <button>Post Details</button>
            </Link>
            <button onClick={handleShowDetails}>Click to see details</button>
        </div>
    );
};

Post.propTypes = {
    post: PropTypes.object
};

export default Post;