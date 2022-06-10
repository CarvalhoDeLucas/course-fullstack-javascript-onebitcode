let spaceship = {
    velocity: 0,
    speedUp: function(acceleration) {
        this.velocity += acceleration
    }
}

function registerSpaceship() {
    spaceship.name = prompt('Informe o nome da nave');
    spaceship.type = prompt('Informe o tipo da nave');
    spaceship.maxVelocity = Number(prompt('Informe a velocidade máxima da nave (km/s)'));
}

function accelerate() {
    let acceleration = Number(prompt('Quanto você quer acelerar?'));
    spaceship.speedUp(acceleration);

    if (spaceship.velocity > spaceship.maxVelocity) {
        alert('VELOCIDADE MÁXIMA ULTRAPASSADA!' +
                '\nVelocidade da Nave: ' + spaceship.velocity + 'km/s.' +
                '\nVelocidade máxima da Nave: ' + spaceship.maxVelocity + 'km/s.');
    }
}

function stop() {
    alert('Nome: ' + spaceship.name 
            + '.\nTipo: ' + spaceship.type 
            + '.\nVelocidade da nave: ' + spaceship.velocity
            + '.\nMáxima da nave: ' + spaceship.maxVelocity);
            
    spaceship.velocity = 0;
}

function showMenu() {
    let choseOption;
    
    do {
        choseOption = prompt('Você deseja:\n1 - Acelerar\n2 - Parar');

        switch(choseOption) {
            case '1':
                accelerate();
                break;
            case '2':
                stop();
                break;
            default:
                alert('Opção inválida!');
        }
    } while(choseOption != '2');
}

registerSpaceship();
showMenu();
