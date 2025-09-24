'use strict'

// import {Apartment} from "./app";

const highlights = ['one-room', 'two-rooms', 'tree-rooms', 'four-rooms', 'five-rooms'];

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const createBuilding = document.querySelector('.create-building');
const createApartment = document.querySelector('.create-apartment');
const searchApartment = document.querySelector('.search-flats');
createBuilding.addEventListener('click', (event) => {
    searchApartment.style.display = 'flex';
    event.target.remove();
    const btnCreateApartment = document.querySelector('.create-apartment');
    btnCreateApartment.style.display = 'block';
    const apartmentsPerFloor = 4;
    let totalApartments;
    do {
        totalApartments = Number(prompt('Enter a number of apartments'));
    } while (isNaN(totalApartments) || totalApartments === 0);
    const totalFloors = ((totalApartments % apartmentsPerFloor) === 1) || (totalApartments % apartmentsPerFloor) === 0 ? totalApartments / apartmentsPerFloor : Math.trunc(totalApartments / apartmentsPerFloor) + 1;
    const newBuilding = Building.construct(totalFloors, apartmentsPerFloor, totalApartments, {maxResidents: 7});
    const parent = document.querySelector('.wrapper');
    const buildingContainer = newBuilding.draw(parent);

    buildingContainer.addEventListener('click', (event) => {
        if (event.target.tagName === 'BUTTON') {
            let residentsAmount;
            do {
                residentsAmount = Number(prompt('Enter a number of residents (max 7)'));
            } while (isNaN(residentsAmount) || residentsAmount === 0 || residentsAmount > 7);

            for (let i = 0; i < residentsAmount; i++) {
                let rName;
                do {
                    rName = prompt('Enter resident name');
                } while (!rName || rName.length === 0);

                let rLastname;
                do {
                    rLastname = prompt('Enter resident lastname');
                } while (!rLastname || rLastname.length === 0);

                const fNumber = Number(event.target.getAttribute("data-floor-number"));
                const aNumber = Number(event.target.getAttribute("data-apartment-number"));

                const newResident = new Resident(rName, rLastname);
                newBuilding.addNewResident(fNumber, aNumber, newResident);
                event.target.remove();
            }
        }
    })

    createApartment.addEventListener('click', () => {
        const lastFloor = Number([...newBuilding.floors.keys()].length);
        const apartmentsAmount = [...newBuilding.floors.get(lastFloor).apartments].length;

        let roomsAmount;
        do {
            roomsAmount = Number(prompt('Enter a number of rooms (max 5)'));
        } while (isNaN(roomsAmount) || roomsAmount === 0 || roomsAmount > 5);

        if (apartmentsAmount === apartmentsPerFloor) {
            newBuilding.createFloor();
            const currentFloor = newBuilding.getFloor(lastFloor + 1);
            newBuilding.createNewApartment(roomsAmount, currentFloor);
        } else {
            const currentFloor = newBuilding.getFloor(lastFloor);
            newBuilding.createNewApartment(roomsAmount, currentFloor);
        }
    })

    searchApartment.addEventListener('click', (event) => {
        if (event.target.tagName === 'INPUT') {
            const numberOfRooms = Number(event.target.id);
            const checkboxStatus = event.target.checked;
            const isApartmentPresent = newBuilding.hasAmountRooms(numberOfRooms);
            if (!isApartmentPresent && checkboxStatus) {
                alert(`There isn't ${numberOfRooms} rooms apartment`);
                event.preventDefault();
            } else {
                newBuilding.toggleHighlightApartments(numberOfRooms, checkboxStatus);
            }
        }
    });
    console.log(newBuilding);
})




