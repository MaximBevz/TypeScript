enum Egender {
    MALE = 'male',
    FEMALE = 'female'
}

class Dep{
    public name: string;
    public age: number;
    public gender: Egender;
    public levelOfTrue: number;
    public minSum: number;
    public maxSum: number;

    constructor(name: string, age: number, gender: Egender, levelOfTrue: number, minSum: number, maxSum: number) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.levelOfTrue = levelOfTrue;
        this.minSum = minSum;
        this.maxSum = maxSum;
    }

    takeMoney(sum: number): void {
        if(this.levelOfTrue > 50 || this.minSum > sum) {
           console.log('Я не беру хабарі');
        } else if(this.minSum + (this.minSum * this.levelOfTrue / 100) < sum) {
            console.log('Ми рішимо ваше питання!');
        } else {
            console.log('Треба подумати...');
        }
    }
}

const littleDep = new Dep('Ivan', 22, Egender.MALE, 20, 440, 1000);
const littleDep1 = new Dep('Roman', 62, Egender.MALE, 10, 130, 1000);
const littleDep2 = new Dep('Fedor', 32, Egender.MALE, 3, 50, 1000);
const littleDep3 = new Dep('Yuriy', 42, Egender.MALE, 60, 10, 1000);
const Vitalina = new Dep('Vitalina', 32, Egender.FEMALE, 7, 700, 1000);
const Vitalka = new Dep('Vitalka', 40, Egender.MALE, 46, 200, 2000);
//
// littleDep.takeMoney(200);
// littleDep.takeMoney(460);
// littleDep.takeMoney(600);


class Part {
    public partName: string;
    public head: Dep;
    public members?: Array<Dep>;

    constructor(name: string, head: Dep, members?: Array<Dep>) {
        this.partName = name;
        this.head = head;
        this.members = members;
    }

    addDepToPart = (depName: Dep): void => {
        this.members.push(depName);
    }

    removeFromPart = (depName: Dep): void => {
        this.members = this.members?.filter(dep => dep !== depName);
    }

    showAllMoneyTaker = ():void => {
        this.members.forEach(dep => {
            if(dep.levelOfTrue > 10) {
                console.log(dep);
            }
        })
    }

    showBestMoneyTaker = ():void => {
        const depsSorted = this.members?.sort((a, b) => a.levelOfTrue - b.levelOfTrue);
        console.log(depsSorted[0]);
    }

    showAllDeps = () => {
        this.members?.forEach(dep => console.log(dep));
    }
}

const national = new Part('Nationalist', littleDep, [littleDep1]);
const ydar  = new Part('Ydar',littleDep3, [littleDep2, littleDep3, Vitalina]);

national.addDepToPart(Vitalka);
// national.showAllDeps();
// national.showAllMoneyTaker();
// national.removeFromPart(Vitalka);
// national.showBestMoneyTaker();

class Rada {
    public parts: Array<object> = [];

    addParts = (part: Part):void => {
        this.parts.push(part);
    }

    removePart = (removePart: Part): void => {
        const fractionIsTrue = this.parts?.filter(part => part !== removePart);
        this.parts = fractionIsTrue;
    }

    showParts = (): void => {
        this.parts?.forEach(part => console.log(part));
    }

    showSinglePart = (singlePart: Part): void => {
        this.parts?.forEach(part => {
            if(part === singlePart) {
                console.log(part);
            }
        })
    }

    showBestTakerFromRada = () => {
        let BestOfTheBest: Dep = null;
            this.parts.forEach((part) => {
            part['members']?.forEach(dep => {
                if(BestOfTheBest === null || BestOfTheBest.levelOfTrue > dep.levelOfTrue) {
                    BestOfTheBest = dep;
                }
            })
        });
        console.log(BestOfTheBest);
    }
}

const verhovna = new Rada();

verhovna.addParts(ydar);
verhovna.addParts(national);
// verhovna.showBestTakerFromRada();
// verhovna.showSinglePart(national);
// verhovna.showParts();
// verhovna.removePart(ydar);
// verhovna.showParts();


