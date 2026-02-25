import Container from "../components/Container/Container";
import { Outlet } from "react-router-dom";

function Layout() {
    return(
        <Container>
            <Outlet />
        </Container>
    );
}

export default Layout;