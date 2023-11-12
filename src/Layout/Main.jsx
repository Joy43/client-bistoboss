import { Outlet } from "react-router-dom";
import Fotter from "../Home/Shared/Fotter";
import Navbar from "../Home/Shared/Navbar";


const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Fotter></Fotter>
        </div>
    );
};

export default Main;