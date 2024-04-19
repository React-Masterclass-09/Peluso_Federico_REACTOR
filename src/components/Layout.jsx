import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";
import classes from "./Layout.module.css";

export default function Layout(){
    return (
        <>
            <Navbar />
            <div className={ "container-fluid " + classes.body_outlet} >
                <div className="row">
                    <div className={"col-12 col-md-2 px-0 " + classes.body_sidebar} > 
                        <Sidebar />
                    </div>
                    <div className={ "col-12 col-md-10 py-4 " + classes.body_outlet} > 
                        <Outlet />
                    </div>
                </div>
            
            </div>
            
        </>
    )
} ;