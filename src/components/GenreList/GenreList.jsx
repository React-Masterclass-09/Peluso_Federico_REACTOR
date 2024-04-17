import GenreLink from "../GenreLink/GenreLink"
import classes from '../Sidebar/Sidebar.module.css'

export default function GenreList({geners}){
    return (
        <div className={classes.scroll_box}>
        {geners && geners.results.map( genre =>  {
            return(
                <GenreLink genre={genre} key={genre.id}/>
            )
        })
        } 
        </div>
    )
}