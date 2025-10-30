import {useState} from "react";
import Button from "../Button/Button.jsx";
import './ProfileEditor.css';

export default function ProfileEditor({dataUser, btnText, onSave}) {

    const [formData, setFormData] = useState(dataUser);

    const handleOnChange = (event) => {
        const {name, value} = event.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }
    const handleSubmit = () => {
        onSave(formData);
    }
    return (
        <div className="editor">
            <input
                className="edit-field"
                type="text"
                name="name"
                defaultValue={dataUser.name}
                onChange={handleOnChange}
            />

            <input
                className="edit-field"
                type="text"
                name="email"
                defaultValue={dataUser.email}
                onChange={handleOnChange}
            />

            <input
                className="edit-field"
                type="text"
                name="bio"
                defaultValue={dataUser.bio}
                onChange={handleOnChange}
            />

            <Button text={btnText} toggle={handleSubmit}/>
        </div>
    )
}
