
import supabase from "../database/supabase";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export function UserContextProvider({children}){
    
    const [user, setUser] = useState(null) ;
    const [profile, setProfile] = useState(null) ;

    const getUser = async () =>{
        const { data: {session}, error } = await supabase.auth.getSession();
        if(session){
            const { user } = session;
            // coalescing operator equivale -> aaa ? bbb : null 
            setUser(() => user ?? null);
            let { data: profiles } = await supabase 
            .from('profiles')
            .select()
            .eq('id', user.id); 

            setProfile(profiles[0]);
        }
    }
    
    /* al caricanento della pagina viene preso l'utente */
    useEffect(
        ()=>{
            getUser();
        },[]
    );

    const signOut = async() =>{
        await supabase.auth.signOut();
        setUser(null);
        setProfile(null);
    }

    const signUp= async( newUser )=>{

        const { error } = await supabase.auth.signUp(newUser);
        await getUser();
     
    }

    const login = async ( loggedUser )=>{
        await supabase.auth.signInWithPassword(loggedUser);
        await getUser();
    }

    const updateProfile  = async ( newProfile )=> {
        const  { data, error } = await supabase
        .from('profiles')
        .update(newProfile)
        .eq('id', user.id)
        .select();
        console.log(data);
        await getUser();
    }

    return (
        <UserContext.Provider value={{user, profile, signOut, signUp, login, updateProfile, getUser}}>
            {children}
        </UserContext.Provider>
    )
}