// Task #2-----------------------------------
// Відомі 2 відстані. Одна - в кілометрах, інша - в футах (1 фут = 0,305м, 1км = 1000м). Яка відстань менша?
const dis1 = parseInt(prompt('Enter distance feet'), 10) * 0.305;
const dis2 = parseInt(prompt('Enter distance kilometers'), 10) * 1000;

if (dis1 > dis2) {
    console.log(`Distance #1 in meters = ${dis1}, 
    Distance #2 in meters = ${dis2},
    distance #1 > than distance #2`);
} else if (dis1 < dis2) {
    console.log(`Distance #1 in meters = ${dis1}, 
    Distance #2 in meters = ${dis2},
    distance #1 < than distance #2`);
} else {
    console.log(`Distance #1 in meters = ${dis1}, 
    Distance #2 in meters = ${dis2},
    distance #1 = than distance #2`);
}