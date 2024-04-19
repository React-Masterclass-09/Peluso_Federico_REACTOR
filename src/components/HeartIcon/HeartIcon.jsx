import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Contexts/UserContext";
import supabase from "../../database/supabase";

export default function HeartIcon( {game} ){
    
    const { profile } = useContext(UserContext);
    const [isFavorite,setIsFavourite] = useState(false);
    
    const getFavourite = async ()  => {
        let {data: favourites, error } = await supabase
        .from('favourites')
        .select()
        .eq('profile_id',profile.id)
        .eq('game_id',game.id);

        if(favourites.length > 0){
            setIsFavourite(true);
        } else{
            setIsFavourite(false);
        }
    }


    useEffect( ()=> {
        getFavourite(),
        []
    })

    const handleClick = async() => {
        setIsFavourite( (prev) => !prev );
        if( !isFavorite ){
            const { data , error } = await supabase
            .from('favourites')
            .insert([
                {'profile_id': profile.id, 'game_id': game.id, 'game_name': game.name }
            ])
            .select();
        }else{
            let del = {'profile_id': profile.id,'game_id':game.id} ; 
            
            const { error } = await supabase
            .from('favourites')
            .delete()
            .match(del);
     
            console.log('001');
            console.log(error);
        }
    }

    return <i className={`${isFavorite ? 'fa-solid' : 'fa-regular'} fa-heart fa-2x text-accentC pointer`} onClick={handleClick}></i>

}