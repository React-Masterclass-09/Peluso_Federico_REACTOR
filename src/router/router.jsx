import { createBrowserRouter } from "react-router-dom";
import routes from "../routes/routes";
import Layout from "../components/Layout";
import Homepage, { gamesLoader } from "../views/Homepage";
import GenreView, { gamesGenreLoader } from "../views/GenreView";
import Detail, { gameLoader } from "../views/Detail";
import SigninView from "../views/SigninView";
import LoginView from "../views/LoginView";
import SettingsView from "../views/SettingsView";
import Authenticationlayout from "../components/AuthenticationLayout";
import ProfileSelection from "../components/ProfileSelection/ProfileSelection/";

import ProfileView from "../views/ProfileView";


const router = createBrowserRouter ([
    {
        
        path: routes.home,
        element:<Layout />,
        children:[
            {  
                path: routes.home,
                element:<Homepage />, 
                loader: gamesLoader

            },
            {
                path: routes.genre,
                element: <GenreView />,
                loader: gamesGenreLoader
            },
            { 
                path: routes.detail, 
                element:<Detail />, 
                loader: gameLoader 
            }
        ]
    },
    {   
        path : routes.auth,
        element : <Authenticationlayout />,
        children:[
            {
                path: routes.signin,
                element: <SigninView />
            },
            {
                path: routes.login,
                element: <LoginView />
            },
            {
                path: routes.profile,
                element: <ProfileView />
            },
            {
                path: routes.profile,
                element: <ProfileSelection />
            },
            {
                path: routes.settings,
                element:<SettingsView />
            }     
        ]
    }
])
export default  router ; 