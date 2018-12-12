
class Horse {
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
    }
}

class Racer extends Horse {
    constructor(name, breed) {
        super(name, breed);
        this.distance = 0;
        this.speed = 0;
        this.setSpeed();
    }

    setSpeed() {
        this.speed = Math.floor(Math.random() * 5) + 10;
    }

    run() {
        this.timeout = setInterval(() => {
            this.distance += this.speed;
            this.setSpeed();
        }, 1000);
    }

    stop() {
        clearInterval(this.timeout);
    }
}

class Race {
    constructor() {
        this.horses = [];
    }

    createRace(horsesArray) {
        this.horses = horsesArray;
    }

    startRace() {
        this.horses.forEach(elem => elem.run());
        const hx = setInterval(() => {
            this.horses.forEach((elem) => {
                console.log(`\n* Horse: ${elem.name}`);
                console.log(`* Breed: ${elem.breed}`);
                console.log(`* Distance: ${elem.distance}`);
            });
            console.log('__');
        }, 2000);

        setTimeout(() => {
            clearInterval(hx);
            this.horses.forEach(elem => elem.stop());
            this.horses.sort((a, b) => b.distance - a.distance);
            if (this.horses[0].distance === this.horses[1].distance) {
                console.log('\n No winner!');
            } else {
                console.log(`\nWinner: ${this.horses[0].name}`);
                console.log(`Breed: ${this.horses[0].breed}`);
                console.log(`Distance: ${this.horses[0].distance}`);
            }
        }, 10000);
    }
}

const horsesArray = [
    new Racer('WAWOLD', 'Ardennes horse'),
    new Racer('GARDINA', 'Colorado Ranger'),
    new Racer('ANDIRULD', 'Dutch harness horse'),
    new Racer('ALBETOLF', 'Gidran'),
    new Racer('ISANGO', 'Holsteiner horse'),
    new Racer('ABERY', 'Iomud'),
    new Racer('LIAGONO', 'Karabair'),
    new Racer('UVERAD', 'Kiger Mustang'),
    new Racer('JOEZ', 'Latvian horse'),
    new Racer('VIDARAD', 'Mangalarga'),
];

const race = new Race();
race.createRace(horsesArray);
race.startRace();
