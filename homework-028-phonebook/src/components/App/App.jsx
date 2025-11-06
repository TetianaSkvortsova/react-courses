import React, {useEffect, useState} from 'react';
import './App.css';
import Header from "../Header/Header.jsx";
import ListItem from "../ListItem/ListItem.jsx";
import AddContact from "../AddContact/AddContact.jsx";

function App() {

    const [contacts, setContacts] = useState([]);
    useEffect(() => {
        const loadContacts = async () => {
            const response = await fetch('contacts.json');
            const result = await response.json();
            setContacts(result.contacts);
        }
        loadContacts();
    }, []);

    const updateContact = (updatedContact) => {
        setContacts((prevContacts) => (
            prevContacts.map((contact) =>
                contact.id === updatedContact.id ? updatedContact : contact
            )
        ));
    };

    const deleteContact = (id) => {
        const filteredContacts = contacts.reduce((newArray, currentContact) => {
            if (currentContact.id !== id) {
                newArray.push(currentContact);
            }
            return newArray;
        }, [])

        setContacts(filteredContacts);
    }

    const deleteNewContact = (id) => {
        deleteContact(id);
        resetNewContactIndex();
        enableAddButton();
    }

    const [newContact, setNewContact] = useState(-1);
    const resetNewContactIndex = () => {
        setNewContact(-1);
    }

    const [disabled, setDisabled] = useState(false);
    const enableAddButton = () => {
        setDisabled(false);
    }

    const addContact = () => {
        setContacts((prevState) => {
            return [
                {
                    id: Date.now(),
                    name: '',
                    surname: '',
                    phoneNumber: ''
                },
                ...prevState
            ]
        })
        setNewContact(0);
        setDisabled(true);
    }

    return (
        <>
            <Header/>
            {contacts.length > 0 && (
                <div className='phone-book'>
                    <AddContact addContact={addContact} disabled={disabled} text={'Add New Contact'}/>
                    {contacts.map((contact, index) =>
                        <ListItem
                            contact={contact}
                            key={`${contact.id}-${index}`}
                            onUpdate={updateContact}
                            onDelete={deleteContact}
                            newContactIndex={newContact}
                            index={index}
                            resetNewContactIndex={resetNewContactIndex}
                            enableAddButton={enableAddButton}
                            onCancelNewContact={deleteNewContact}
                            disabled={disabled}
                        />
                    )}
                </div>
            )}
        </>
    )
}

export default App
