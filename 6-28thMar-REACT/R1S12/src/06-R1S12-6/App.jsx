import { useEffect, useReducer } from "react";
import { URI } from "../main";
import axios from "axios";

const initialState = {
    users: [],
    isLoading: false,
    errors: {},
    selectedUser: {},
    email: "",
};

function reducer(state, action) {
    switch (action.type) {
        case "setEmail":
            return { ...state, email: action.payload };
        case "start":
            return { ...state, isLoading: true, errors: {} };
        case "dataFetched":
            return { ...state, isLoading: false, users: action.payload };
        case "userSelect":
            return {
                ...state,
                selectedUser: action.payload ? action.payload : {},
            };
        case "error":
            return { ...state, isLoading: false, errors: action.payload };
        case "deselectUser":
            return { ...state, selectedUser: {} };
        case "default":
            return state;
    }
}

function App() {
    const [{ users, email, selectedUser }, dispatch] = useReducer(
        reducer,
        initialState
    );
    useEffect(() => {
        dispatch({ type: "start" });
        axios
            .get(`${URI}/users`)
            .then((res) => dispatch({ type: "dataFetched", payload: res.data }))
            .catch((err) =>
                dispatch({
                    type: "error",
                    payload: {
                        message: "Error fetching data",
                        err,
                        status: err.response?.status,
                    },
                })
            );
    }, []);
    function handleClick() {
        if (!email) dispatch({ type: "deselectUser" });
        dispatch({
            type: "userSelect",
            payload: users.find((ele) => ele.email === email),
        });
    }
    return (
        <>
            <div>
                <input
                    type="email"
                    placeholder="enter email"
                    value={email}
                    onChange={(e) =>
                        dispatch({ type: "setEmail", payload: e.target.value })
                    }
                />
                <button onClick={handleClick}>search</button>
            </div>

            <UserDetails user={selectedUser} email={email} />
        </>
    );
}

function UserDetails({ user, email }) {
    if (!Object.keys(user).length > 0 && email) {
        return <p>No user found with this email.</p>;
    }

    return (
        <>
            {Object.keys(user).length > 0 && email && (
                <>
                    <h2>User Details</h2>
                    <p>Name : - {user.name}</p>
                    <p>email : - {user.email}</p>
                </>
            )}
        </>
    );
}

export default App;
