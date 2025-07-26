// Task #2-----------------------------------
// Відомі 2 відстані. Одна - в кілометрах, інша - в футах (1 фут = 0,305м, 1км = 1000м). Яка відстань менша?
const dis1 = parseInt(prompt('Enter distance feet')) * 0.035;
const dis2 = parseInt(prompt('Enter distance kilometers'));

if (dis1 > dis2) {
    console.log('Distance #1 in kilometers =', dis1, 'distance #1 > than distance #2');
} else if (dis1 < dis2) {
    console.log('Distance #1 in kilometers =', dis1, 'distance #1 < than distance #2');
} else {
    console.log('distance #1 = distance #2');
}