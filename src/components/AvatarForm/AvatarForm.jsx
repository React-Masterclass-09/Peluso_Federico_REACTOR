import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Contexts/UserContext";
import supabase from "../../database/supabase";
import routes from "../../routes/routes";

export default function AvatarForm(){
    const { profile, getUser} = useContext(UserContext);
    
    const [ preview, setPreview ] = useState();
    const [ file, setFile ] = useState();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFile( () => e.target.files[0] );
    }

    useEffect(
        () => {
            if(file){
                const imageUrl = URL.createObjectURL(file);
                setPreview( () => imageUrl );
            }
        },[file]
    )
    const handleSubmit = async (e) => { 
        e.preventDefault();
        const fileExt   = file.name.split('.').pop();
        const fileName  = `${profile.id}${Math.random()}.${fileExt}`;

        await supabase.storage.from('avatars').upload(fileName, file);
        await supabase.from('profiles').upsert({id: profile.id,avatar_url: fileName}).select();
        await getUser();
        navigate(routes.home);
        
    }

    return (
        <>
            <form className="auth_form" onSubmit={handleSubmit} > 
                <div className="mb-3">
                    <input type="file" className="form-control" onChange={handleChange} />
                </div>
                <button type="submit" className="auth_btn">Carica</button>
            </form>
            <img src={preview} alt="" loading='lazy' />
        </>
    )
}