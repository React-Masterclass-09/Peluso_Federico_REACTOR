import AvatarForm from "../components/AvatarForm/AvatarForm"
import SettingsForm from "../components/SettingsForm/SettingsForm"

export default function SettingsView(){
    return (
    <div className="container">
        <div className="row vh-100 align-items-center justify-content-center">
            <div className="col-12 col-md-9">
                <h1 className="text-center mb-3">Modifica Dati</h1>
                    <SettingsForm />
                <AvatarForm />
            </div>
        </div>
    </div>
    )
}