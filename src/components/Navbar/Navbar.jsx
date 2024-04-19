
import routes from '../../routes/routes';
import classes from './Navbar.module.css';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';

import { useContext } from 'react';
import { UserContext } from '../../Contexts/UserContext';



export default function Navbar(){
    const { profile, signOut } = useContext(UserContext);   

    return (
        <div className="sticky-top">
            <nav className="navbar navbar-expand-lg bg-body-tertiary flex-column flex-md-row bd-navbar">
              <div className="container-fluid" >
                
                <Link className={"navbar-brand" + classes.brand} to={routes.home}>
                <img src={logo} className='img-fluid rlogo' alt="logo" />

                </Link>
                
                <div className={"d-flex flex-row-reverse" + classes.header2} id="navbarSupportedContent">
                    
                    <ul className="navbar-nav  ms-auto ms-auto   me-auto mb-2 mb-lg-0">
                    {!profile 
                    && 
                    <>
                        <div className="nav-item">
                          <Link className={' me-3 ' + classes.nav_link_custom} to={routes.signin}>Registrati</Link> 
                        </div>
                        <div className="nav-item">
                            <Link className={classes.nav_link_custom} to={routes.login}>Login</Link>
                        </div>
                    </>
                    ||
                    <>
                        <div className="nav-item">
                          <Link className={' me-3 ' + classes.nav_link_custom} to={routes.profile} >{profile.username}</Link> 
                        </div>
                        <div className="nav-item">
                          <Link className={' me-3 ' + classes.nav_link_custom} onClick={()=>signOut()} >Logout</Link> 
                          
                        </div>
                    </>
                    }
                    </ul>
                 </div>
              </div>
            </nav>
        </div>
    )
 
}