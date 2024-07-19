import { useEffect, useState } from "react";
import axios from "axios";
import { URI } from "../main";

function App() {
    const [users, setUsers] = useState([]);
    const [selectedId, setSelectedId] = useState("");
    const [selectedUser, setSelectedUser] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        axios
            .get(`${URI}/users`)
            .then((res) => setUsers(res.data))
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        setIsLoading(true);
        axios
            .get(`${URI}/users/${selectedId}`)
            .then((res) => {
                setSelectedUser(res.data);
                setIsLoading(false);
            })
            .catch((err) => console.log(err))
            .finally(() => setIsLoading(false));
    }, [selectedId]);

    return (
        <div>
            <h1>Users</h1>
            <select
                value={selectedId}
                onChange={(e) => setSelectedId(e.target.value)}
            >
                <option value="">Select User</option>
                {users.map((ele) => (
                    <option value={ele.id} key={ele.id}>
                        {ele.name}
                    </option>
                ))}
            </select>
            {selectedId && (
                <UserDetails user={selectedUser} isLoading={isLoading} />
            )}
        </div>
    );
}

function UserDetails({ user, isLoading }) {
    if (isLoading) {
        return <h1>Loading ... </h1>;
    }
    return (
        <>
            <h2>User Details</h2>
            <p>Name : - {user.name}</p>
            <p>email : - {user.email}</p>
        </>
    );
}

export default App;
