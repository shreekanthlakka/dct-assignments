import { useEffect, useReducer } from "react";
import axios from "axios";

const URI = "https://jsonplaceholder.typicode.com";

const initialState = {
    users: [],
    isLoading: false,
    errors: {},
};

function reducer(state, action) {
    switch (action.type) {
        case "start":
            return { ...state, isLoading: true, errors: {} };
        case "dataFetched":
            return { ...state, users: action.payload, isLoading: false };
        case "error":
            return { ...state, errors: action.payload, isLoading: false };
        case "default":
            return state;
    }
}

function App() {
    const [{ users, isLoading }, dispatch] = useReducer(reducer, initialState);
    useEffect(() => {
        dispatch({ type: "start" });
        axios
            .get(`${URI}/users`)
            .then((res) => {
                dispatch({ type: "dataFetched", payload: res.data });
            })
            .catch((err) => {
                dispatch({
                    type: "error",
                    payload: { errorMessage: "Error fetching data", err },
                });
            });
    }, []);
    if (isLoading) {
        return <h1>Loading ... </h1>;
    }
    console.log(users);
    return (
        <div>
            <h1>Listing Users - {users.length}</h1>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>email</th>
                        <th>city</th>
                        <th>position</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((ele) => (
                        <tr key={ele.id}>
                            <td>{ele.id}</td>
                            <td>{ele.name}</td>
                            <td>{ele.email}</td>
                            <td>{ele.address?.city}</td>
                            <td>
                                {ele.address?.geo.lat} - {ele.address?.geo.lng}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default App;
