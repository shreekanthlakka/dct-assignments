import styled from "styled-components";
import Logo from "./Logo";
import { Link } from "react-router-dom";

const Container = styled.div`
    background-color: rgb(210, 210, 210);
    color: white;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    min-height: 60px;
    align-items: center;
    & > a {
        text-decoration: none;
        color: black;
    }
`;

function Header() {
    return (
        <Container>
            <Link to="/">
                <Logo />
            </Link>
        </Container>
    );
}

export default Header;
