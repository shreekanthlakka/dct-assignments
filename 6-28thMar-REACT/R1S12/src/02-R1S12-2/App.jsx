import { useEffect, useState } from "react";
import axios from "axios";
import { URI } from "../main";

function App() {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState("");
    useEffect(() => {
        axios
            .get(`${URI}/users`)
            .then((res) => setUsers(res.data))
            .catch((err) => console.log(err.message));
    }, []);
    return (
        <div>
            <h1>User List</h1>
            <select
                value={selectedUser}
                onChange={(e) => setSelectedUser(e.target.value)}
                name="userSelect"
            >
                <option value="">Select User</option>
                {users.map((ele) => (
                    <option key={ele.id} value={ele.name}>
                        {ele.name}
                    </option>
                ))}
            </select>
            {selectedUser && (
                <>
                    <h3>{selectedUser}</h3>
                </>
            )}
        </div>
    );
}

export default App;
