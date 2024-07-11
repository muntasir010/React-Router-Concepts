import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const User = ({user}) => {
    const {id, name, email, phone} = user;
    const userStyle ={
        border: '2px solid yellow',
        padding: '12px',
        borderRadius: '20px',
        textAlign: 'center'
    }
    return (
        <div style={userStyle}>
            <h1>{id}</h1>
            <h2>{name}</h2>
            <p>Email:{email}</p>
            <p>Phone:{phone}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
        </div>
    );
};

User.propTypes = {
    user: PropTypes.object
};

export default User;