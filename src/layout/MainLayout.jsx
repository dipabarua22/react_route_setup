import Footer from "../pages/shared/Footer";
import NavBar from "../pages/shared/NavBar";
import { Outlet } from "react-router-dom";




const MainLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
            
            


            
        </div>
    );
};

export default MainLayout;








