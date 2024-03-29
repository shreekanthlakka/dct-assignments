import { useEffect, useState } from "react";
import { URI } from "../main";
import axios from "axios";

function App() {
    const [id, setId] = useState(() => {
        return Math.floor(Math.random() * 10) + 1;
    });
    const [user, setUser] = useState({});
    useEffect(() => {
        axios
            .get(`${URI}/users/${id}`)
            .then((res) => setUser(res.data))
            .catch((err) => console.log(err));
    }, [id]);
    return (
        <div>
            <h2>User Details</h2>
            <p>name : - {user.name} </p>
            <p>email : - {user.email} </p>
            <button onClick={() => setId(Math.floor(Math.random() * 10) + 1)}>
                Click for next random User
            </button>
        </div>
    );
}

export default App;
