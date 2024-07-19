import { useEffect } from "react";
import { useState } from "react";

const colorsData = [
    { id: 1, color: "red" },
    { id: 2, color: "green" },
    { id: 3, color: "yellow" },
    { id: 4, color: "black" },
    { id: 5, color: "pink" },
    { id: 6, color: "orange" },
];

function App() {
    const [color, setColor] = useState("");
    useEffect(() => {
        document.querySelector("body").style.backgroundColor = color;
    }, [color]);
    return (
        <div>
            <select value={color} onChange={(e) => setColor(e.target.value)}>
                <option value="">Select Colors</option>
                {colorsData.map((ele) => (
                    <option key={ele.id} value={ele.color}>
                        {ele.color}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default App;
