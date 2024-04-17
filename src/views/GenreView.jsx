
import { useLoaderData, useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import List from "../components/List/List";


export default function GenreView(){
    
    
    const games = useLoaderData();

    const {slug} = useParams();
    return (
        <>
            <div className="container min-vh-100">
            <Header  title={slug} />
            <div className="row content-justify-center ">
                <div className="col6 col-md-12 ">
                <List games={games} />
                </div>
            </div>
            </div>
        </>
    )
}


// Prima chiamata per tutti i giochi
export async function gamesGenreLoader({params}){
    const API_KEY = import.meta.env.VITE_API_KEY;
    const promise = await fetch(`https://api.rawg.io/api/games?key=${API_KEY}&genres=${params.slug}`);
    const json = await promise.json();
    return json.results;
}