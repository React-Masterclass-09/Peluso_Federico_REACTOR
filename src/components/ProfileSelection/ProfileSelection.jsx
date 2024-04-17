import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Contexts/UserContext";
import classes from './ProfileSelection.module.css';
import imgdef from '../../assets/imgdef.jpg'
import { Link } from 'react-router-dom';
import routes from "../../routes/routes";
import AvatarForm from "../AvatarForm/AvatarForm";
import supabase from "../../database/supabase";

export default function ProfileSelection(){
    

    const { profile, user } = useContext(UserContext);
    const [userFavourites, setUserFavourites] = useState();
    const [userReviews, setUserReviews] = useState();
    
    
        const getFavourites = async () => {
            let { data: favourites, error } = await supabase
            .from('favourites')
            .select()
            .eq('profile_id', profile.id);

            setUserFavourites(favourites);
        }
        const getReviews = async() => {
            let { data: review, error } = await supabase
            .from('review')
            .select()
            .eq('profile_id', profile.id);

            setUserFavourites(review);
        }

        useEffect(
            () => {
               getFavourites();
               getReviews();
            },[]
        )
    
    return (
        <>
            <div className={classes.profile_card + ' row'}>
                {profile &&
                    <>
                        <div className="col-12 col-md-3">
                            <img src={profile.avatar_url ? `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/avatars/${profile.avatar_url}` : Ryu} className='img-fluid rounded-circle' alt="Immagine del profilo" />
                            <p className="lead">Nome Utente: {profile.first_name} {profile.last_name}</p>
                            <p className="lead">Nickname: {profile.username}</p>
                            <p className="lead">Email: {user.email}</p>
                        </div>
                        <div className="col-12 col-md-9">
                            <h3>I tuoi preferiti</h3>
                            <ul>
                                {userFavourites && userFavourites.map(favourite => {
                                    return <li key={favourite.id}>{favourite.game_desc}</li>
                                })}
                            </ul>
                            <h3>Le tue recensioni</h3>
                            <ul>
                                {userReviews && userReviews.map(review =>{
                                    return (
                                        <li key={review.id}>
                                            <p>{review.game_desc}</p>
                                            <p>{review.review}</p>
                                            <hr />
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </>
                }
            </div>
            <div className="row">
                <div className="col-12 d-flex justify-content-center mt-3">
                    <Link to={routes.settings}>
                        <button className="m-0 auth_btn fw-bold">Modifica Personaggio</button>
                    </Link>
                </div>
            </div>
        </>
    )
}