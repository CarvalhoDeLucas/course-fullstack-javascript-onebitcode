class App {
    constructor() {
        this.spaceship = null;
    }

    start() {
        this.enrollSpaceship();
        let chosenOption;

        do {
            chosenOption = this.showInitialMenu();
            this.redirectFeature(chosenOption);
        } while(chosenOption != '3');

        this.printAndExit();
    }

    enrollSpaceship() {
        let spaceshipNmae = prompt('Qual o nome da nave?');
        let crewQuantity = prompt('Qual a quantidade de tripulantes?');
        let spaceshipKind = this.askForSoaceshipKind();

        if (spaceshipKind == '1') {
            let weaponsQuantity = prompt('Quantas armas a nave possui?');
            this.spaceship = new BattleSpaceship(spaceshipNmae, crewQuantity, weaponsQuantity);
        } else {
            let sitsQuantity = prompt('Quantos lugares a nave possui?');
            this.spaceship = new TransportSpaceship(spaceshipNmae, crewQuantity, sitsQuantity);
        }
    }

    askForSoaceshipKind() {
        let chosenOption;

        while(!['1', '2'].includes(chosenOption)) {
            chosenOption = prompt('Qual o tipo da nave?\n1 - Batalha\n2 - Transporte');
        }

        return chosenOption;
    }

    showInitialMenu() {
        const prompMessage = 'O que você deseja fazer?\n' +
                                '1 - Acelerar a nave\n' +
                                '2 - Trocar a nave\n' +
                                '3 - Imprimir e sair';

        let chosenOption = prompt(prompMessage);
        while(!['1', '2', '3'].includes(chosenOption)) {
            chosenOption = prompt(prompMessage);
        }

        return chosenOption;
    }

    redirectFeature(chosenOption) {
        switch(chosenOption) {
            case '1':
                this.accelerateSpaceship();
                break;
            case '2':
                this.enrollSpaceship();
                break;
        }
    }

    accelerateSpaceship() {
        let acceleration = Number(prompt('Quanto gostaria de acelerar?'));
        this.spaceship.speedUp(acceleration);
    }

    printAndExit() {
        let finalMessage = 'Nome: ' + this.spaceship.name + '\n' +
                            'Quantidade de tripulantes: ' + this.spaceship.crewQuantity + '\n' +
                            'Velocidade atual: ' + this.spaceship.currentVelocity + '\n';

        alert(finalMessage);
    }
}