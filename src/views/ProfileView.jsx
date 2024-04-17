import { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";
import ProfileSelection from "../components/ProfileSelection/ProfileSelection";

export default function ProfileView(){
    const {profile} = useContext(UserContext);
    
    return (

        <div className="container">
            <div className="row vh-100 align-items-center justify-content-center">
                <div className="col-12 col-md-9">
                    <h1 className="text-center mb-3">La tua scheda del personaggio</h1>
                    {profile && <ProfileSelection />}
                </div>
            </div>
        </div>

    )
}