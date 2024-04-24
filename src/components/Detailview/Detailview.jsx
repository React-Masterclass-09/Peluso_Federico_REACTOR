import { useContext } from "react";
import { UserContext } from "../../Contexts/UserContext";
import { useLoaderData } from "react-router-dom";


import HeartIcon from "../HeartIcon/HeartIcon";
import LiveChat from "../LiveChat/Livechat";
import ReviewSection from "../ReviewSection/ReviewSection";



export default function Detailview(){
    const {profile} = useContext(UserContext);
    const game = useLoaderData();    
//        <img className='platforms__platform' src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PScwIDAgMTYgMTYnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHBhdGggZD0nTTAgMTMuNzcybDYuNTQ1LjkwMlY4LjQyNkgwek0wIDcuNjJoNi41NDVWMS4yOTZMMCAyLjE5OHptNy4yNjUgNy4xNWw4LjcwNCAxLjJWOC40MjVINy4yNjV6bTAtMTMuNTd2Ni40Mmg4LjcwNFYweicgZmlsbD0nI0ZGRicvPjwvc3ZnPg==" />

    const platforms = game.platforms;
    return (
        <>
         <div  className={"platform"}>
         {platforms && platforms.map( platform =>{
            return ( 
                 <span key={platform.platform.name}  id={platform.platform.name}>{platform.platform.name} </span>
            )
            })}
         </div>
    
            <div className="container-fluid" >
                 <div className="row" >
                    

                     <div className="col-10" >
                        <h6>{game.name}</h6>
                    </div>
                    <div className="col-2" >
                        {profile && <HeartIcon game={game} key='1'/>}
                    </div>
                </div>

                 <div className="row row-cols-2" style={
                    {
                        background: ` url(${game.background_image})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        height:'500px'
                    }
                } >
                    
                     
                </div>   
        
                <div className="row" >
                    <div className="col-12" >
                     <h2> {game.description_raw}</h2>
                    </div>
                    
                </div>
                <div className="row" >
                    <div className="col" >
                        {profile && <ReviewSection  game={game} key='2'/>}
                     </div>
                </div>
                <div className="row" >
                    <div className="col" >
                        {profile && <LiveChat  game={game} key='3'/>}
                     </div>
                </div>
            <br/><br/><br/><br/>
         </div>
        
        </>
    )
}

export async function getGame({params}){
    const  API_KEY = import.meta.env.VITE_API_KEY;
    const  VITE_API_URL = import.meta.env.VITE_API_URL;
    const promise = await fetch( `${VITE_API_URL}/games/${params.id}?key=${API_KEY}`);
    const json = await promise.json();
    return json;
}