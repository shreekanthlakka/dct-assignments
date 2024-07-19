import styled from "styled-components";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const StyledOuterDiv = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

const Container = styled.div`
    display: flex;
    flex: 1;
`;

const Main = styled.main`
    flex: 1;
    padding: 5px;
`;

function AppLayout() {
    return (
        <div>
            <StyledOuterDiv>
                <Header />
                <Container>
                    <Main>
                        <Outlet />
                    </Main>
                </Container>
            </StyledOuterDiv>
        </div>
    );
}

export default AppLayout;
