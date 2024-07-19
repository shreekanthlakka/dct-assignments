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
    height: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;

    & > label {
        display: inline-block;
    }

    & > input {
        width: 100%;
        height: 30px;
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

function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [role, setRole] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (!email || !password) return;
        console.log(email + " " + password);
    }

    return (
        <Container>
            <h2>SignUp here</h2>
            <form onSubmit={handleSubmit}>
                <Field>
                    <input
                        type="text"
                        placeholder=" name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Field>
                <Field>
                    <input
                        type="email"
                        placeholder=" email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Field>
                <Field>
                    <input
                        type="password"
                        placeholder=" password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Field>
                <Field>
                    <input
                        type="text"
                        placeholder=" PhoneNumber"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                </Field>
                <Field>
                    <label htmlFor="member">
                        <input
                            type="radio"
                            value={role}
                            id="member"
                            name="role"
                        />
                        member
                    </label>
                    <label htmlFor="librarian">
                        <input
                            type="radio"
                            value={role}
                            id="librarian"
                            name="role"
                        />
                        librarian
                    </label>
                </Field>
                <Field>
                    <button type="submit">SIgnUp</button>
                </Field>
            </form>
            <p>
                or <Link to="/login">Login</Link> here
            </p>
        </Container>
    );
}

export default SignUp;
