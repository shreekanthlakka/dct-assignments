import { useState } from "react";
import { URI } from "../main";
import axios from "axios";

function SearchEmail() {
    const [email, setEmail] = useState("");
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        if (!email) {
            setUser({});
            setError("");
            return;
        }
        setIsLoading(true);
        setError("");
        axios
            .get(`${URI}/users?email=${email}`)
            .then((res) => {
                if (res.data.length > 0) {
                    setUser(res.data[0]);
                } else {
                    setError("record not found!");
                    setUser({});
                }
            })
            .catch((err) => {
                // setError(err.massage);
                console.log(err);
            })
            .finally(() => setIsLoading(false));
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button>Submit</button>
            </form>
            {error && <RecordNotFound error={error} />}
            {Object.keys(user).length > 0 && (
                <UserDetails user={user} isLoading={isLoading} />
            )}
        </div>
    );
}

function RecordNotFound({ error }) {
    return <h2 style={{ color: "red" }}>{error}</h2>;
}

function UserDetails({ user, isLoading }) {
    if (isLoading) {
        return <h2>Loading ... </h2>;
    }
    return (
        <div>
            <p>email : - {user.email}</p>
            <p>name : - {user.name}</p>
        </div>
    );
}

export default SearchEmail;
