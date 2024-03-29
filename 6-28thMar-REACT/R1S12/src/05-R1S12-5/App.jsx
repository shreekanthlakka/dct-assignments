import { useReducer } from "react";
import { URI } from "../main";
import axios from "axios";

const initialState = {
    id: "",
    user: {},
    isLoading: false,
    error: {},
};

function reducer(state, action) {
    switch (action.type) {
        case "setId":
            return { ...state, id: action.payload };
        case "start":
            return { ...state, isLoading: true, error: {} };
        case "dataFetched":
            return { ...state, user: action.payload, isLoading: false };
        case "error":
            return {
                ...state,
                isLoading: false,
                error: action.payload,
                user: {},
            };
        case "default":
            return state;
    }
}

function App() {
    // const [id, setId] = useState("");
    // const [user, setUser] = useState({});
    // const [isLoading, setIsLoading] = useState(false);
    const [{ user, isLoading, id, error }, dispatch] = useReducer(
        reducer,
        initialState
    );
    function handleSubmit(e) {
        e.preventDefault();
        dispatch({ type: "start" });
        axios
            .get(`${URI}/users/${id}`)
            .then((res) => dispatch({ type: "dataFetched", payload: res.data }))
            .catch((err) =>
                dispatch({
                    type: "error",
                    payload: {
                        errorMessage: "Error fetching data",
                        err,
                        status: err.response?.status,
                    },
                })
            );
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="enter the id"
                    value={id}
                    onChange={(e) =>
                        dispatch({ type: "setId", payload: e.target.value })
                    }
                />
                <button type="submit"> Submit </button>
            </form>
            <UserDetails
                user={user}
                isLoading={isLoading}
                status={error.status}
            />
        </>
    );
}

function UserDetails({ user, isLoading, status }) {
    if (isLoading) {
        return <h1>Loading ... </h1>;
    }
    if (status === 404) {
        return <h1>No record found</h1>;
    }
    return (
        <>
            {Object.keys(user).length > 0 && (
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
