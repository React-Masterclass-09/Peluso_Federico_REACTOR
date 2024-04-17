import { Link } from "react-router-dom"
import classes from '../GenreLink/GenreLink.module.css'
import routes from "../../routes/routes"

export default function Header({title, subtitle}){
    
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <div className="display-2">
                        <h5>
                            <Link className={' ' +classes.custom_genre_link+' '+classes.custom_genre_link_text} to={routes.home}> Home </Link> 
                        {subtitle?<Link className={' ' +classes.custom_genre_link+' '+classes.custom_genre_link_text} to='/'> {' | ' + subtitle} </Link> :''}</h5> 
                    </div>
                </div>
            </div>
        </div>
    )
}