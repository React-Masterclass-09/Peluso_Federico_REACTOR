import { useContext, useEffect, useState } from "react"
import supabase from "../../database/supabase"
import { UserContext } from "../../Contexts/UserContext"

export default function ReviewSection({ game }) {

    const { profile } = useContext(UserContext);
    const [description, setDescription] = useState();
    const [reviews, setReviews] = useState();

    const handleChange = (e) => {
        setDescription(() => e.target.value);
    }

    const handleClick = async () => {
        const ins = [
            { profile_id: profile.id, game_id: game.id, game_desc: game.name, review: description },
        ];
        const { data, error } = await supabase
            .from('reviews')
            .insert(ins)
            .select()
         getReviews()
    }

    const getReviews = async () => {
        let { data: reviews, error } = await supabase
        .from('reviews')
        .select('*, profiles(id,username)')
        .eq('game_id', game.id);

     
        setReviews(() => reviews);
    }
    
    useEffect(
        () => {
            getReviews()
        }, []
    )


    return (
        <>
            <div className="col-12 mt-3">
                <h2 className="text-center">Si dice in giro </h2>
                <div className="review_section">
                    {reviews && reviews.map(review => {
                        return (
                            <div key={review.id}>
                                <h2 className="lead">{review.profiles.username}</h2>
                                <h5 className="lead">{review.review}</h5>
                               
                            </div>
                        )
                    })}
                </div>
                <input type="text" className="review_input" placeholder="Rispondi...." onChange={handleChange} />
                <button className="review_btn" onClick={handleClick}>Invia</button>
            </div>

        </>
    )
}