// import PropTypes from 'prop-types';

import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    const { name, website } = user;
    const allInOne = {
        textAlign: 'center',
    }
    return (
        <div style={allInOne}>
            <h2>Details about user</h2>
            <h3>{name}</h3>
            <p>{website}</p>
        </div>
    );
};

UserDetails.propTypes = {

};

export default UserDetails;