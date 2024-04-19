import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import classes from "./Layout.module.css";
export default function AuthenticationLayout() {
    return (
        <>
            <Navbar />
            <div className={ "container-fluid " + classes.body_outlet} >
                <div className="row">
                    <div className={ "col-12 col-md-10 py-4 " }  > 
                        <Outlet />
                    </div>
                </div>
            </div>
      </>
    )
}