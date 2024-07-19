import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import "./app.css";

const Container = styled.div`
    width: 80%;
    margin: 20px;
    display: flex;
    flex-wrap: wrap;
`;

function App() {
    const [even, setEven] = useState([]);
    const [number, setNumber] = useState();
    const [isIntervelStopped, setIsIntervelStopped] = useState(false);
    const [evenNumberFrequency, setEvenNumberFrequency] = useState({});
    const id = useRef();
    function randomNumbers(min = 1, max = 100) {
        return Math.floor(Math.random() * max) + min;
    }

    function handleDeleteDuplicates() {
        const newEven = even.reduce((acc, val) => {
            return !acc.map((ele) => ele.number).includes(val.number)
                ? [...acc, val]
                : [...acc];
        }, []);
        setEven([...newEven]);
    }

    function showDuplicated() {
        const result = even.reduce((acc, val) => {
            return Object.keys(acc).includes(val.number.toString())
                ? { ...acc, [val.number]: acc[val.number] + 1 }
                : { ...acc, [val.number]: 1 };
        }, {});
        setEvenNumberFrequency(result);
    }

    useEffect(() => {
        showDuplicated();
    }, [even]);

    useEffect(() => {
        id.current = setInterval(() => {
            if (!isIntervelStopped) {
                setNumber(randomNumbers());
                if (number % 2 === 0) {
                    const obj = { id: Math.random(), number };
                    setEven((prev) => [...prev, obj]);
                }
            }
        }, 1000);
        return () => clearInterval(id.current);
    }, [number, even, isIntervelStopped]);

    return (
        <div>
            <p>Generate Random Number is : - {number}</p>
            <h3>Even numbers till now - {even.length} </h3>
            <button onClick={handleDeleteDuplicates}>delete duplicates</button>
            {/* <button onClick={() => setShowDuplicate((e) => !e)}>
                {showDuplicate ? "stop showing" : "show"} duplicates
            </button> */}
            <button onClick={() => setIsIntervelStopped((e) => !e)}>
                {isIntervelStopped ? "start" : "stop"} intervel
            </button>
            <Container>
                {even.map((ele) => (
                    <span
                        style={{ margin: "5px", paddingLeft: "15px" }}
                        key={ele.id}
                        className={
                            evenNumberFrequency[ele.number.toString()] > 1
                                ? "red"
                                : ""
                        }
                    >
                        {ele.number}
                    </span>
                ))}
            </Container>
        </div>
    );
}

export default App;
