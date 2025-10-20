'use strict'
import {residentsList} from "./residents-list.js";

// Додаткове завдання:
//
// Створити та описати сутності Багатоквартирного будинку, квартири, мешканців
// Додати можливість створювати нові будинки на певну кількість квартир з певною кількістю мешканців
// Кількість квартир в будинку та мешканців в кожній квартирі задає користувач
// Реалізувати перевірку на пусті значення
// Квартири - це Map всередині будинку, а Мешканці - це Set в квартирі
// Реалізувати функціонал виводу даних по будинку після створення
// Функціонал, що пов'язаний з розробкою UI є опціональним, проте загальна логіка взаємодії класів -
// обов'язкова до виконання,
const highlights = ['one-room', 'two-rooms', 'tree-rooms', 'four-rooms', 'five-rooms'];
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
export class Apartment {
    aResidents = [];
    aNumber;
    aRoomAmount;
    aFloor;
    container = null;
    apartmentNumberContainer = null;

    constructor(aNumber, aRoomAmount, aFloor) {
        this.aNumber = aNumber;
        this.aRoomAmount = aRoomAmount;
        this.aFloor = aFloor;
    }

    addResident(resident) {
        this.aResidents.push(resident);
    }

    draw() {
        this.container = document.createElement('div');
        this.apartmentNumberContainer = document.createElement('div');
        this.container.setAttribute('class', 'apartment');
        this.apartmentNumberContainer.setAttribute('class', 'apartment-number');
        this.apartmentNumberContainer.setAttribute('data-apartment-number', `${this.aNumber}`);
        this.apartmentNumberContainer.textContent = `Apartment №${this.aNumber}`;
        this.container.appendChild(this.apartmentNumberContainer);
        if (this.residentsCount <= 0) {
            const btnContainer = document.createElement('button');
            btnContainer.setAttribute('class', 'btn-add-resident');
            btnContainer.setAttribute('data-apartment-number', this.aNumber);
            btnContainer.setAttribute('data-floor-number', this.aFloor);
            btnContainer.textContent = `+`;
            this.container.appendChild(btnContainer);

            return this.container;
        }
        this.container.appendChild(this.apartmentNumberContainer);
        return this.container;
    }

    get residentsCount() {
        return this.aResidents.length;
    }
}

export class Resident {
    constructor(rName, rLastname) {
        this.rName = rName;
        this.rLastname = rLastname;
    }

    draw() {
        const residentContainer = document.createElement('p');
        residentContainer.setAttribute('class', 'resident');
        residentContainer.textContent = `${this.rName} ${this.rLastname}`;
        return residentContainer;
    }
}

export class Floor {
    apartments = new Map();
    fNumber;
    floorContainer = document.createElement('div');

    addApartment(apartment) {
        this.apartments.set(apartment.aNumber, apartment);
    }

    draw() {
        this.floorContainer = document.createElement('div');
        const floor = document.createElement('div');
        this.floorContainer.setAttribute('class', 'floor-container');
        this.floorContainer.setAttribute('data-floor-number', `${this.fNumber}`);
        floor.setAttribute('class', 'floor');
        floor.textContent = `Floor №${this.fNumber}`;
        this.floorContainer.appendChild(floor);
        if (this.fNumber < 1) {
            parent.appendChild(this.floorContainer);
        }
        return this.floorContainer;
    }
}

export class Building {
    floors = new Map();
    bFloorNumber = 1;
    buildingContainer = document.createElement('div');
    maxRoomsAmount = 4;


    constructor(maxRoomsAmount) {
        this.maxRoomsAmount = maxRoomsAmount;
    }

    #upendFloor(bFloor) {
        bFloor.fNumber = this.bFloorNumber++;
        this.floors.set(bFloor.fNumber, bFloor);
    }

    createNewApartment(roomsAmount, bFloor) {
        const apartmentsAmount = [...this.floors.get(bFloor.fNumber).apartments].length;
        const aNumber = (bFloor.fNumber - 1) * this.maxRoomsAmount + 1 + apartmentsAmount;
        const newApartment = new Apartment(aNumber, roomsAmount, bFloor.fNumber);
        bFloor.addApartment(newApartment);
        const floorContainer = this.floors.get(bFloor.fNumber).floorContainer;
        floorContainer.appendChild(newApartment.draw());
    }

    createFloor() {
        const bFloor = new Floor();
        this.#upendFloor(bFloor);
        const floorContainer = bFloor.draw();
        const firstChild = this.buildingContainer.firstChild;
        firstChild.before(floorContainer);
    }

    draw(parent) {
        this.buildingContainer.setAttribute('class', 'building-container');
        [...this.floors.keys()].reverse().forEach((floorNumber) => {
            const floor = this.floors.get(floorNumber);
            const floorContainer = floor.draw();
            this.buildingContainer.appendChild(floorContainer);
            this.drawApartments(floor, floorContainer);
        })
        parent.appendChild(this.buildingContainer);
        return this.buildingContainer;
    }

    getFloor(floor) {
        return this.floors.get(floor);
    }

    drawResidents(apartment, apartmentContainer) {
        apartment.aResidents.forEach((resident) => {
            const residentContainer = resident.draw();
            apartmentContainer.appendChild(residentContainer);
        })
    }

    drawApartments(floor, floorContainer) {
        floor.apartments.forEach((apartment) => {
            const apartmentContainer = apartment.draw();
            floorContainer.appendChild(apartmentContainer);
            this.drawResidents(apartment, apartmentContainer);
        })
    }

    addNewResident(fNumber, aNumber, resident) {
        const apartment = this.floors.get(fNumber).apartments.get(aNumber);
        apartment.aResidents.push(resident);
        const residentContainer = resident.draw();
        apartment.apartmentNumberContainer.after(residentContainer);
    }

    toggleHighlightApartments(numberOfRooms, checkboxStatus) {
        if (checkboxStatus) {
            this.floors.forEach((floor) => {
                floor.apartments.forEach((apartment) => {
                    if (apartment.aRoomAmount === numberOfRooms) {
                        apartment.container.classList.add(highlights[numberOfRooms - 1]);
                    }
                })
            })
        } else {
            this.floors.forEach((floor) => {
                floor.apartments.forEach((apartment) => {
                    if (apartment.aRoomAmount === numberOfRooms) {
                        apartment.container.classList.remove(highlights[numberOfRooms - 1]);
                    }
                })
            })
        }
    }

    hasAmountRooms(amount) {
        return [...this.floors.keys()].some((key) => {
            const floor = this.floors.get(key);
            return [...floor.apartments.keys()].some((aptKey) => {
                const apt = floor.apartments.get(aptKey);
                return apt.aRoomAmount === amount;
            });
        })
    }

    static construct(totalFloors, apartmentsPerFloor, totalApartments, options) {
        const newBuilding = new Building(apartmentsPerFloor);

        for (let floorNumber = 0; floorNumber < totalFloors; floorNumber++) {
            const newFloor = new Floor();
            for (let j = 0; j < apartmentsPerFloor; j++) {
                const aNumber = (apartmentsPerFloor * floorNumber) + (j + 1);
                if (aNumber > totalApartments) {
                    break;
                }
                const roomAmount = getRandomInt(1, apartmentsPerFloor);
                const newApartment = new Apartment(aNumber, roomAmount, floorNumber + 1);
                const residents = getRandomInt(0, options.maxResidents);
                for (let k = 0; k < residents; k++) {
                    const index = getRandomInt(0, 399);
                    const rndResident = residentsList[index];
                    const newResident = new Resident(rndResident.name, rndResident.surname);
                    newApartment.addResident(newResident);
                }
                newFloor.addApartment(newApartment);
            }
            newBuilding.#upendFloor(newFloor);
        }
        return newBuilding;
    }
}
