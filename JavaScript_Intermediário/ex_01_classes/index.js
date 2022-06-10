class Spaceship {
    constructor(name, crewQuantity) {
        this.name = name;
        this.crewQuantity = crewQuantity;
        this.isHitched = false;
        this.entraceDoorsOpen = false;
    }

    hitch() {
        this.isHitched = true;
        this.entraceDoorsOpen = true;
    }
}

function showMenu() {
    let chosenOption;

    while(chosenOption != '1' && chosenOption != '2' && chosenOption != '3') {
        chosenOption = prompt('O que deseja fazer?\n' +
                                '1 - Engatar nave\n' +
                                '2 - Imprimir naves\n' +
                                '3 - Sair do programa');
    }

    return chosenOption;
}

function createSpaceship() {
    let spaceshipName = prompt('Informe o nome da nave');
    let crewQuantity = prompt('Informe a quantidade de tripulantes');
    let spacehip = new Spaceship(spaceshipName, crewQuantity);

    return spacehip;
}

function printSpaceshipList(spaceships) {
    let spaceshipsList = '';
    spaceships.forEach((spaceship, index) => {
        spaceshipsList += (index + 1) + ' - ' + spaceship.name + ' (' + spaceship.crewQuantity + ' tripulantes)\n'
    });
    alert(spaceshipsList);
}

let hitchedSpacesships = [];
let chosenOption;

while(chosenOption != '3') {
    chosenOption = showMenu();

    switch(chosenOption) {
        case '1':
            let spaceshipToAdd = createSpaceship();
            spaceshipToAdd.hitch();
            hitchedSpacesships.push(spaceshipToAdd);
            break;
        case '2':
            printSpaceshipList(hitchedSpacesships);
            break;
    }
}
