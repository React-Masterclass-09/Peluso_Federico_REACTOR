import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Contexts/UserContext";
import supabase from "../../database/supabase";


export default function LiveChat({game}){
    const { profile } = useContext(UserContext);
    const [userMessage,setUserMessage] = useState();
    const [messages, setMessages] = useState();

    const handleChange = (e) => {
        setUserMessage( e.target.value);
    }
    const handleClick = async () => {
        const ins = [
            {   profile_id: profile.id, 
                game_id: game.id, 
                message: userMessage },
        ];
        const { data, error } = await supabase
            .from('messages')
            .insert(ins)
            .select()

    }
    const getMessages = async () => {
        let { data:  messages, error } = await supabase
        .from('messages')
        .select('*, profiles(id, username, avatar_url)')
        .eq('game_id', game.id);

 

        setMessages( () => messages );
    }
    useEffect(
        ()=>{
            getMessages();
             const channels = supabase.channel('custom-all-channel')
            .on(
                'postgres_changes',
                { event: '*', schema: 'public', table: 'messages' },
                (payload) => {
                    console.log('Change received!', payload)
                    getMessages();
                }
            )
            .subscribe();
            return () => {
                supabase.removeChannel(channels)
            }
        }
    )
    return (
        <>
            <div className="chat_section">
                {messages && messages.map(message => {
                    return (
                        <div key={message.id}>
                            <h5 className="lead">{message.message}</h5>
                            <div className="d-flex justify-content-end">
                                <h2>{message.profiles.username}</h2>
                                <img src={`${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/avatars/${message.profiles.avatar_url}`} 
                                    className="rounded-circle chat_img" 
                                    alt="" />   
                            </div>
                            <hr />
                        </div>
                    )
                })}
            </div>
            <div >
                <input type="text" className="chat_input" onChange={handleChange} />
                <button className="chat_btn" onClick={handleClick}>Invia</button>
            </div>
            
        </>
    )
}


