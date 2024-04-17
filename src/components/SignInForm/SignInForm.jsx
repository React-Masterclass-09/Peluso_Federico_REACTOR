
import { useContext, useState } from "react";
import { UserContext } from "../../Contexts/UserContext";
import { useNavigate } from "react-router-dom";
import routes from "../../routes/routes";


export default function SignInForm(){
    
    const {signUp} = useContext(UserContext);

    const navigate = useNavigate();
    const [form, setForm] = useState(
        {
            email: '',
            password: ''
            ,
            options:{
                data:{
                    first_name:'',
                    last_name:'',
                    username:''
                }
            }
        }
    )
    const handleSubmit = async (e)=>{
        e.preventDefault(); // evita il ricarica della pagina
        await signUp(data);
        navigate(routes.home);
    }

    const  handleChange = (e)=>{
        setForm((prev)=>({...prev, [e.target.name] : e.target.value}));
    }
 
    const profileHandleChange = (e)=>{
        
        setForm( (prev) => ({...prev, options: {
            data: {
                ...prev.options.data,
                [e.target.name] : e.target.value
            }
        } }))
    }
    return ( 
        <form className="auth_form" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input type='text' placeholder='Nome' className="auth_input" name='first_name'  onChange={profileHandleChange}></input>
                </div>
                <div className="mb-3">
                    <input type='text' placeholder='Cognome' className="auth_input" name='last_name'  onChange={profileHandleChange}></input>
                </div>
                <div className="mb-3">
                    <input type='text' placeholder='Username'  className='auth_input'  name='username'  onChange={profileHandleChange}></input>
                </div>
                <div className="mb-3">
                    <input type='email' placeholder='Email' className="auth_input" name='email'  onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <input type='password' placeholder='Password' className="auth_input" name='password' onChange={handleChange}/>
                </div>
                <button type="submit" className="auth_btn">Registrati</button>
        </form>
    )
}