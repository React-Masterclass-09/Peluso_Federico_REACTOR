import { useLoaderData } from "react-router-dom";
import Header from "../components/Header/Header";
import Detailview from "../components/Detailview/Detailview";

export default function Detail(){
    
    const game = useLoaderData();

    return (    
        <div className="container min-vh-100">
            <Header title='Dettaglio'   subtitle={game.name}/>
            <div className="row content-justify-center ">
                <div className="col12 col-md-8 ">
                  <Detailview game={game} id={game.name}/>
                </div>
            </div>
       </div>
    )
}
 
export async function gameLoader(  { params } ){
    const API_KEY = import.meta.env.VITE_API_KEY;
    const promise = await fetch(`https://api.rawg.io/api/games/${params.id}?key=${API_KEY}`);
    const json = await promise.json();
    return json;
}