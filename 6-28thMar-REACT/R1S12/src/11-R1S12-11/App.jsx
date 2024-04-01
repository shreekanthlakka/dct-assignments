import { useEffect, useState } from "react";
const initialState = {
    title: "",
    description: "",
};
function App() {
    const [formDate, setFormData] = useState(function () {
        const localDate = localStorage.getItem("formdata");
        return localDate ? JSON.parse(localDate) : initialState;
    });

    useEffect(() => {
        localStorage.setItem("formdata", JSON.stringify(formDate));
    }, [formDate]);

    function handleSubmit(e) {
        e.preventDefault();
        localStorage.clear();
        // setTitle("");
        // setDescription("");
        setFormData(initialState);
    }

    return (
        <div>
            <h1>Story Book</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    id="title"
                    value={formDate.title}
                    onChange={(e) =>
                        setFormData({ ...formDate, title: e.target.value })
                    }
                />
                <br />
                <label htmlFor="description">Description</label>
                <textarea
                    id="description"
                    value={formDate.description}
                    onChange={(e) =>
                        setFormData({
                            ...formDate,
                            description: e.target.value,
                        })
                    }
                />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

// const [title, setTitle] = useState(function () {
//     const localData = localStorage.getItem("title");
//     return localData ? JSON.parse(localData) : "";
// });
// const [description, setDescription] = useState(function () {
//     const localData = localStorage.getItem("description");
//     return localData ? JSON.parse(localData) : "";
// });
// useEffect(() => {
//     localStorage.setItem("title", JSON.stringify(title));
//     localStorage.setItem("description", JSON.stringify(description));
// }, [title, description]);

export default App;
