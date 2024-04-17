import { useLoaderData } from "react-router-dom";
import Header from "../components/Header/Header"
import List from "../components/List/List";


export default function Homepage(){
    const games = useLoaderData();
    return (
        <>
            <div className="container min-vh-100">
                <Header />  
                <div className="row content-justify-center ">
                    <div className="col6 col-md-12 ">
                        <List games={games}/>      
                        </div>
                </div>
            </div>
        </>
    )
}

// Prima chiamata per tutti i giochi
export async function gamesLoader(){
    const API_KEY = import.meta.env.VITE_API_KEY;
    const promise = await fetch(`https://api.rawg.io/api/games?key=${API_KEY}&dates=2023-03-01,2024-03-09`);
    const json = await promise.json();
    return json.results;
}