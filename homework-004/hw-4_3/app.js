// Основне завдання, cтворити скрипт яки повинен виконувати наступне:
// запитати у користувача рік народження;
// запитати в нього, в якому місті він живе;
// запитати його улюблений вид спорту.
// При натисканні на ОК показуємо вікно, де має бути відображена наступна інформація:
//
// його вік;
// якщо користувач вкаже Київ, Вашингтон чи Лондон, то показати йому повідомлення - "Ти живеш у столиці..." і на місце точок підставляємо країну, столицею якої є місто. Інакше показуємо йому “ти живеш у місті…”, де місце точок – введене місто.

//
// Додаткове завдання
// Якщо в якомусь випадку він не захоче вводити інформацію і натисне Скасувати, показати йому повідомлення – “Шкода, що Ви не захотіли ввести свій(ю) …” і вказуємо, що він не захотів вводити – дату народження, місто чи вид спорту .

const yearOfBirth = prompt('Please enter your year of birth');
const city = prompt('What city do you live in?');
const age = 2025 - parseInt(yearOfBirth);

if (!yearOfBirth) {
    alert(`I'm sorry you didn't enter your year of birth`);
}

switch (city) {
    case "Kyiv":
        alert(`You are ${age} years old. You live in the capital of Ukraine!`);
        break;
    case "London":
        alert(`You are ${age} years old. You live in the capital of United Kingdom!`);
        break;
    case "Washington":
        alert(`You are ${age} years old. You live in the capital of USA!`);
        break;
    case null:
        alert(`I'm sorry you didn't enter your city. You are ${age} years old.`);
        break;
    default:
        !yearOfBirth ? alert(`You live in ${city}`) : alert(`You are ${age} years old. You live in ${city}`);
        break;
}

// Додаткове завдання *
// Вибираємо самі три види спорту та три чемпіони у цих видах. Відповідно, якщо користувач вкаже один із цих видів спорту, то показуємо йому повідомлення “Круто! Хочеш стати …? і підставляємо на місце точок ім'я та прізвище чемпіона.
//
// Все це має бути відображено в одному вікні (алерті).
const sport = prompt('What is your favorite sport?');
if (!sport) {
    alert(`I'm sorry you didn't enter your favorite sport`);
} else {
    switch (sport) {
        case "boxing":
            alert(`Cool! Do you want to be like Oleksandr Usyk?`);
            break;
        case "athletics":
            alert(`Cool! Do you want to be like Yaroslava Mahuchikh?`);
            break;
        case "fencing":
            alert(`Cool! Do you want to be like Olha Kharlan?`);
            break;
    }
}
