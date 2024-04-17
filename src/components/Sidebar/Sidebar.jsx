import { useLoaderData, useRouteLoaderData } from 'react-router-dom';
import classes from './Sidebar.module.css'
import useFetch from '../../hooks/useFetch';
import List from '../List/List';
import GenreList from '../GenreList/GenreList';


export default function Sidebar(){
    const API_KEY = import.meta.env.VITE_API_KEY ;
    const geners = useFetch(`https://api.rawg.io/api/genres?key=${API_KEY}`);
    return (
        <>
            <div className={'wh-100 bg-secondary-C py-4 bd-links' + classes.sidebar_custom}>
            <h2 className={classes.sidebar_text}>Generi</h2>
            <GenreList geners={geners}/>
            <h2  className={classes.sidebar_text}>Piattaforma</h2>
            </div>
        </>
    )
}
