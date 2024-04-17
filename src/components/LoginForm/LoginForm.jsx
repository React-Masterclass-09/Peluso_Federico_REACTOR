
import { useContext,useState } from "react";
import { UserContext } from "../../Contexts/UserContext";
import routes from "../../routes/routes";
import { useNavigate } from "react-router-dom";

export default  function LoginForm(){

    const {login} = useContext(UserContext);
    const navigate = useNavigate();
    const [form, setForm] = useState(
        {
            email: '',
            password: ''
        }
    )

    const  handleChange = (e)=>{
        setForm( (prev) => ({...prev, [e.target.name] : e.target.value}));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(form);
        navigate(routes.home);
    }

    return(
        <form className="auth_form" onSubmit={handleSubmit}>
 
        <div className="mb-3">
            <input type='email' placeholder='Email' className="auth_input" name='email'  onChange={handleChange}/>
        </div>
        <div className="mb-3">
            <input type='password' placeholder='Password' className="auth_input" name='password' onChange={handleChange}/>
        </div>
        <button type="submit" className="auth_btn">Login</button>
        </form>
    )
}