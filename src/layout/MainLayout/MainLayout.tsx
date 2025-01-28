import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Header, Footer } from "../../components/common";
import { ToastList } from "../../components/feedback";
import styles from "../MainLayout/style.module.css";
const { container, wrapper } = styles;

const MainLayout = () => {
    return (
    <Container className={container}>
        <Header />
        <div className={wrapper}>
        <Outlet />
        </div>
        <ToastList />
        <Footer />
    </Container>
    );
};

export default MainLayout;