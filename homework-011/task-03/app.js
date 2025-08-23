// Task #3--------------------------------
// Створіть об'єкт, який матиме одну властивість з масивом об'єктів. Які представляють контакти у вашій контактній книзі.
// Кожен об'єкт має містити ім'я, номер телефону та адресу електронної пошти.
// Додайте метод для пошуку контакту за ім'ям та метод для додавання нових контактів.
'use strict'

const phoneBook = {
    contacts: [
        {
            name: 'Alice',
            phoneNumber: '80504567896',
            email: 'alice@gmail.com',
        },
        {
            name: 'John',
            phoneNumber: '80681237852',
            email: 'john@gmail.com',
        },
        {
            name: 'Mark',
            phoneNumber: '80673697878',
            email: 'Mark@gmail.com',
        },
        {
            name: 'Jack',
            phoneNumber: '8951477863',
            email: 'jack@gmail.com',
        },
    ],
    contactsSearch: function (contactName) {
        return this.contacts.find((item) => {
            if (item.name.toLowerCase() === contactName.toLowerCase()) {
                console.log(`Name: ${item.name}\nPhone: ${item.phoneNumber}\nEmail: ${item.email}\n`);
                return item;
            }
        });
    },
    addContact: function (name, phoneNumber, email) {
        this.contacts.push({
            name,
            phoneNumber,
            email,
        });
        return this.contacts;
    },
}

const contactByName = prompt('Enter a contact name');
phoneBook.contactsSearch(contactByName);

const newContactName = prompt('Enter a new contact name');
const newContactPhone = prompt('Enter a new contact phone number');
const newContactEmail = prompt('Enter a new contact email');


const updatedPhoneBook = phoneBook.addContact(newContactName, newContactPhone, newContactEmail);
function showPhoneBook (phoneBook)
{
    phoneBook.forEach((item) => {
        console.log(`Updated Phone Book\n--------\nName: ${item.name}\nPhone: ${item.phoneNumber}\nEmail: ${item.email}\n--------------------`);
    })
}

showPhoneBook(updatedPhoneBook);
