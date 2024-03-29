import { useEffect, useReducer, useState } from "react";
import { URI } from "../main.jsx";
import axios from "axios";

const initialState = {
    users: [],
    isLoading: false,
    errors: {},
    selectedId: "",
    selectedUser: {},
    todos: [],
};

function reducer(state, action) {
    switch (action.type) {
        case "start":
            return { ...state, isLoading: true, errors: {} };
        case "error":
            return { ...state, isLoading: false, errors: action.payload };
        case "dataFetched":
            return { ...state, isLoading: false, users: action.payload };
        case "selectId":
            return { ...state, selectedId: action.payload };
        case "fetchUser":
            return { ...state, selectedUser: action.payload, isLoading: false };
        case "resetUser":
            return { ...state, selectedUser: {}, selectedId: "" };
        case "resetTodos":
            return { ...state, todos: [], selectedUser: {}, selectedId: "" };
        case "fetchTodos":
            return { ...state, isLoading: false, todos: action.payload };
        case "default":
            return state;
    }
}

function App() {
    const [{ users, selectedId, todos, isLoading, selectedUser }, dispatch] =
        useReducer(reducer, initialState);
    useEffect(() => {
        dispatch({ type: "start" });
        axios
            .get(`${URI}/users`)
            .then((res) => dispatch({ type: "dataFetched", payload: res.data }))
            .catch((err) =>
                dispatch({
                    type: "error",
                    payload: {
                        errorMessage: "failed to fetch data",
                        err,
                        status: err.response?.status,
                    },
                })
            );
    }, []);
    /**
     * fetching Todos
     *
     */
    useEffect(() => {
        if (!selectedId) {
            dispatch({ type: "resetTodos" });
            return;
        }
        dispatch({ type: "start" });
        axios
            .get(`${URI}/todos?userId=${selectedId}`)
            .then((res) => {
                dispatch({ type: "fetchTodos", payload: res.data });
            })
            .catch((err) =>
                dispatch({
                    type: "error",
                    payload: {
                        errorMessage: "failed to fetch data",
                        err,
                        status: err.response?.status,
                    },
                })
            );
    }, [selectedId]);

    /**
     *
     * fetching particular user
     */

    useEffect(() => {
        if (!selectedId) {
            dispatch({ type: "resetUser" });
            return;
        }
        dispatch({ type: "start" });
        axios
            .get(`${URI}/users/${selectedId}`)
            .then((res) => dispatch({ type: "fetchUser", payload: res.data }))
            .catch((err) =>
                dispatch({
                    type: "error",
                    payload: {
                        errorMessage: "failed to fetch data",
                        err,
                        status: err.response?.status,
                    },
                })
            );
    }, [selectedId]);
    return (
        <div>
            <h1>Users</h1>
            <select
                value={selectedId}
                onChange={(e) =>
                    dispatch({ type: "selectId", payload: e.target.value })
                }
            >
                <option value="">select User</option>
                {users.map((ele) => (
                    <option key={ele.id} value={ele.id}>
                        {ele.name}
                    </option>
                ))}
            </select>
            <TodoListing
                todos={todos}
                isLoading={isLoading}
                user={selectedUser}
            />
        </div>
    );
}

function TodoListing({ todos, isLoading, user }) {
    const [completedTasks, setCompletedTasks] = useState([]);
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        setCompletedTasks(() =>
            checked ? todos.filter((ele) => ele.completed) : todos
        );
    }, [checked, todos]);

    if (isLoading) {
        return <h1>Loading ... </h1>;
    }
    return (
        <>
            {todos.length > 0 && (
                <div>
                    <h2>
                        Todos Listing By - {user.name} - {todos.length}
                    </h2>
                    <input
                        type="checkbox"
                        id="checked"
                        checked={checked}
                        onChange={() => setChecked((e) => !e)}
                    />
                    <label htmlFor="checked">Show completed tasks</label>
                </div>
            )}

            {completedTasks.map((ele) => (
                <div key={ele.id}>
                    <p
                        style={
                            ele.completed
                                ? {
                                      textDecorationLine: "line-through",
                                      color: "red",
                                  }
                                : {}
                        }
                    >
                        {ele.id} - {ele.title}
                    </p>
                </div>
            ))}
        </>
    );
}

export default App;
