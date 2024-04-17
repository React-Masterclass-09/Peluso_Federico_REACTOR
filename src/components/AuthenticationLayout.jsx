import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import classes from "./Layout.module.css";
export default function AuthenticationLayout() {
    return (
        <>
            <Navbar />
            <div className="container-fluid " >
                <div className="row">
                    <div className={ "col-12 col-md-10 py-4 " + classes.body_outlet} > 
                        <Outlet />
                    </div>
                </div>
            </div>
 
        </>
    )
}