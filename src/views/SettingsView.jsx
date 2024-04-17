import AvatarForm from "../components/AvatarForm/AvatarForm"
import SettingsForm from "../components/SettingsForm/SettingsForm"

export default function SettingsView(){
    return (
        <div className="container">
            <div className="row vh-100 justify-content-center align-items-center">
                <div className="col-12 col-md-8">
                    <SettingsForm />
                    <AvatarForm />
                </div>
            </div>
        </div>
    )
}