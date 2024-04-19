import { useContext, useState } from "react";
import { UserContext } from "../../Contexts/UserContext";
import { useNavigate } from "react-router-dom";
import routes from "../../routes/routes";
import classes from '../../components/ProfileSelection/ProfileSelection.module.css';

export default function SettingsForm(){
    const {  updateProfile } = useContext(UserContext);
    const navigate = useNavigate();

    const [form, setForm ] = useState(
        {
            first_name: '',
            last_name: '',
            username: ''
        }
    )

    const handleSubmit = async  (e) => {
        e.preventDefault();
        await updateProfile(form);
        navigate(routes.profile);
    }

    const handleChange = (e) => {
        console.log(e);
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
    
    return (
        <>
        
        <form className='auth_form' onSubmit={handleSubmit} >
            <div className={"mb-3 "+classes.profile_card} >
            <input type="text" placeholder="Nome" className="auth_input" name="first_name" onChange={handleChange} />
            </div>
            <div className={"mb-3 "+classes.profile_card }>
            <input type="text" placeholder="Cognome" className="auth_input" name="last_name" onChange={handleChange} />
            </div>
            <div className={"mb-3 "+classes.profile_card }>
                <input type="text" placeholder="Username" className="auth_input" name="username" onChange={handleChange}  />
            </div>
            <button type='submit' className='auth_btn'>Modifica</button>
        </form>

        </>
    )

}