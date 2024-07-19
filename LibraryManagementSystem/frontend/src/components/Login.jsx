import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 60vh;
    justify-content: center;
    align-items: center;
    & > h2 {
        margin: 10px;
        padding: 10px;
    }
`;

const Field = styled.div`
    width: 400px;
    height: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;

    & > input {
        width: 100%;
        height: 50px;
        border: 2px solid black;
        border-radius: 10px;
        font-size: 20px;
        align-content: center;
        text-align: center;
    }
    & > button {
        width: 90%;
        height: 40px;
        font-size: large;
        font-weight: 600;
        align-self: center;
    }
`;

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (!email || !password) return;
        console.log(email + " " + password);
    }

    return (
        <Container>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <Field>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Field>
                <Field>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Field>
                <Field>
                    <button type="submit">Login</button>
                </Field>
            </form>
            <p>
                dont have an account ! <Link to="/signup">SignUp</Link> here
            </p>
        </Container>
    );
}

export default Login;
