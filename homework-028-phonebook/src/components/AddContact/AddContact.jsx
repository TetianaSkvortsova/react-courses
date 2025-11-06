import React from 'react';
import './AddContact.css';

function AddContact({addContact, disabled, text}) {
    return (
        <div className="add-contact">
            <button
                className="add-contact-button"
                type="button"
                onClick={addContact}
                disabled={disabled}>
                <span>{text}</span>
            </button>
        </div>
    );
}

export default AddContact;