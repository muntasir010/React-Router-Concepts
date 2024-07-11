import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {
    const users = useLoaderData();
    const usersStyle = {
        display: 'grid',
        gridTemplateColumns:'repeat(3, 1fr)',
        gap: '24px',
        textAlign: 'center'
    }
    return (
        <div>
            <h2>Our Users: {users.length}</h2>
            <h1>Hello this is users section</h1>
            <div style={usersStyle}>
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;