// Task #3--------------------------------
// Дано масив об’єктів. Вивести масив телефонних номерів користувачів в яких баланс більше ніж 2000 доларів. І знайти суму всіх балансів користувачів
let allBalances = 0;
const phoneArr = [];
for (let i = 0, length = users.length; i < length; i++) {
    const balance = users[i].balance;
    allBalances += balance;
    if (balance > 2000) {
        phoneArr.push(users[i].phone);
    }
}
document.write(`<p>Phone numbers where balances > 2000:<br>${phoneArr.join('<br>')}</p>`)
document.write(`<p>Sum of all balances: ${allBalances.toFixed(2)}</p>`)
