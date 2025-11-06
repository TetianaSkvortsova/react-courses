import React from 'react';
import Button from "../Button/Button.jsx";
import './ViewMode.css'

function ViewMode({contact, action, onDelete, disabled}) {

    const deleteAction = () => {
        onDelete(contact.id);
    }

    return (
        <div className='contact-row'>
            <div className='name'>{contact.name}</div>
            <div className='last-name'>{contact.surname}</div>
            <div className='phone-number'>{contact.phoneNumber}</div>
            <div className='actions'>
                <Button
                    text='Delete'
                    action={deleteAction}
                    className='delete-button'
                />
                <Button
                    text='Edit'
                    action={action}
                    className='edit-button'
                    disabled={disabled}
                />
            </div>

        </div>
    );
}

export default ViewMode;