import './ProfileViewer.scss';
import Button from "../Button/Button.jsx";

export function ProfileViewer({dataUser,btnText, mode}){
    return (
        <div className="profile">
            <div className="profile-data">User name: {dataUser.name}</div>
            <div className="profile-data">User email: {dataUser.email}</div>
            <div className="profile-data">User bio: {dataUser.bio}</div>

            <Button text={btnText} toggle={mode} />
        </div>
    )
}