import { useEffect, useState } from "react";
import { URI } from "../main";
import axios from "axios";

const initialState = {
    users: [],
    posts: [],
    todos: [],
};

function App() {
    const [data, setData] = useState(initialState);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        Promise.all([
            axios.get(`${URI}/users`),
            axios.get(`${URI}/posts`),
            axios.get(`${URI}/todos`),
        ])
            .then(([usersRes, postsRes, todosRes]) => {
                setData({
                    users: usersRes.data,
                    posts: postsRes.data,
                    todos: todosRes.data,
                });
                setIsLoading(false);
            })
            .catch((err) => console.log(err))
            .finally(() => setIsLoading(false));
    }, []);

    return (
        <div>
            <h2>DashBoard</h2>

            {!isLoading && (
                <div>
                    <h3>Users - {data.users.length}</h3>
                    <h3>posts - {data.posts.length}</h3>
                    <h3>todos - {data.todos.length}</h3>
                </div>
            )}
        </div>
    );
}

export default App;
