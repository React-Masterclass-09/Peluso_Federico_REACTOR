
import routes from '../../routes/routes';
import classes from './Navbar.module.css';
import { Link } from 'react-router-dom';

import { useContext } from 'react';
import { UserContext } from '../../Contexts/UserContext';



export default function Navbar(){
    const { profile, signOut } = useContext(UserContext);   

    return (
        <div className="sticky-top">
            <nav className="navbar navbar-expand-lg bg-body-tertiary flex-column flex-md-row bd-navbar">
              <div className="container-fluid" >
                
                <Link className={"navbar-brand" + classes.brand} to={routes.home}><span className='text-accentC'>R</span>eactor</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <i className={"fas fa-search "+ classes.search_img}></i>
                    <input type='text' className={'d-block-mx-auto ' + classes.search_input}  placeholder='Ricerca ... '/>
                    <ul className="navbar-nav  ms-auto ms-auto <!-- lo definisce a dx --> me-auto mb-2 mb-lg-0">   
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