import './App.css'
import {useState} from "react";
import {ProfileViewer} from "../ProfileViewer/ProfileViewer.jsx";
import Header from "../Header/Header.jsx";
import ProfileEditor from "../ProfileEditor/ProfileEditor.jsx";

const user = {
    name: 'John Doe',
    email: 'j.doe@example.com',
    bio: 'React enthusiast',
}

function App() {

    const [isEditing, setIsEditing] = useState(false);

    const toggleMode = () => {
        setIsEditing(prev => !prev);
    }

    const [newDataUser, setNewDataUser] = useState(user);
    const handleSave = (formData) => {
        setNewDataUser((prevUser) => ({
            ...prevUser,
            ...formData
        }));
        toggleMode();
    }

    const headerName = isEditing ? 'Edit Profile' : 'Profile Viewer';
    const btnText = isEditing ? 'Save' : 'Edit';

    return (
        <>
            <Header text={headerName}/>
            {
                !isEditing ?
                    <ProfileViewer dataUser={newDataUser} btnText={btnText} mode={toggleMode}/> :
                    <ProfileEditor dataUser={newDataUser} btnText={btnText} onSave={handleSave}/>
            }
        </>
    )
}

export default App
