// Task #3--------------------------------
// Дано масив об’єктів. Вивести масив телефонних номерів користувачів в яких баланс більше ніж 2000 доларів. І знайти суму всіх балансів користувачів
let allBalances = 0;
for (let i = 0, length = users.length; i < length; i++) {
    const balance = users[i].balance;
    allBalances += balance;
    if (balance > 2000) {
        document.write(`<p>Phone number: ${users[i].phone}</p>`)
    }
}
document.write(`<p>All balances: ${allBalances.toFixed(2)}</p>`)