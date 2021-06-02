var Egender;
(function (Egender) {
    Egender["MALE"] = "male";
    Egender["FEMALE"] = "female";
})(Egender || (Egender = {}));
var Dep = /** @class */ (function () {
    function Dep(name, age, gender, levelOfTrue, minSum, maxSum) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.levelOfTrue = levelOfTrue;
        this.minSum = minSum;
        this.maxSum = maxSum;
    }
    Dep.prototype.takeMoney = function (sum) {
        if (this.levelOfTrue > 50 || this.minSum > sum) {
            console.log('Я не беру хабарі');
        }
        else if (this.minSum + (this.minSum * this.levelOfTrue / 100) < sum) {
            console.log('Ми рішимо ваше питання!');
        }
        else {
            console.log('Треба подумати...');
        }
    };
    return Dep;
}());
var littleDep = new Dep('Ivan', 22, Egender.MALE, 20, 440, 1000);
var littleDep1 = new Dep('Roman', 62, Egender.MALE, 10, 130, 1000);
var littleDep2 = new Dep('Fedor', 32, Egender.MALE, 3, 50, 1000);
var littleDep3 = new Dep('Yuriy', 42, Egender.MALE, 60, 10, 1000);
var Vitalina = new Dep('Vitalina', 32, Egender.FEMALE, 7, 700, 1000);
var Vitalka = new Dep('Vitalka', 40, Egender.MALE, 46, 200, 2000);
//
// littleDep.takeMoney(200);
// littleDep.takeMoney(460);
// littleDep.takeMoney(600);
var Part = /** @class */ (function () {
    function Part(name, head, members) {
        var _this = this;
        this.addDepToPart = function (depName) {
            _this.members.push(depName);
        };
        this.removeFromPart = function (depName) {
            var _a;
            _this.members = (_a = _this.members) === null || _a === void 0 ? void 0 : _a.filter(function (dep) { return dep !== depName; });
        };
        this.showAllMoneyTaker = function () {
            _this.members.forEach(function (dep) {
                if (dep.levelOfTrue > 10) {
                    console.log(dep);
                }
            });
        };
        this.showBestMoneyTaker = function () {
            var _a;
            var depsSorted = (_a = _this.members) === null || _a === void 0 ? void 0 : _a.sort(function (a, b) { return a.levelOfTrue - b.levelOfTrue; });
            console.log(depsSorted[0]);
        };
        this.showAllDeps = function () {
            var _a;
            (_a = _this.members) === null || _a === void 0 ? void 0 : _a.forEach(function (dep) { return console.log(dep); });
        };
        this.partName = name;
        this.head = head;
        this.members = members;
    }
    return Part;
}());
var national = new Part('Nationalist', littleDep, [littleDep1]);
var ydar = new Part('Ydar', littleDep3, [littleDep2, littleDep3, Vitalina]);
national.addDepToPart(Vitalka);
// national.showAllDeps();
// national.showAllMoneyTaker();
// national.removeFromPart(Vitalka);
// national.showBestMoneyTaker();
var Rada = /** @class */ (function () {
    function Rada() {
        var _this = this;
        this.parts = [];
        this.addParts = function (part) {
            _this.parts.push(part);
        };
        this.removePart = function (removePart) {
            var _a;
            var fractionIsTrue = (_a = _this.parts) === null || _a === void 0 ? void 0 : _a.filter(function (part) { return part !== removePart; });
            _this.parts = fractionIsTrue;
        };
        this.showParts = function () {
            var _a;
            (_a = _this.parts) === null || _a === void 0 ? void 0 : _a.forEach(function (part) { return console.log(part); });
        };
        this.showSinglePart = function (singlePart) {
            var _a;
            (_a = _this.parts) === null || _a === void 0 ? void 0 : _a.forEach(function (part) {
                if (part === singlePart) {
                    console.log(part);
                }
            });
        };
        this.showBestTakerFromRada = function () {
            var BestOfTheBest = null;
            _this.parts.forEach(function (part) {
                var _a;
                (_a = part['members']) === null || _a === void 0 ? void 0 : _a.forEach(function (dep) {
                    if (BestOfTheBest === null || BestOfTheBest.levelOfTrue > dep.levelOfTrue) {
                        BestOfTheBest = dep;
                    }
                });
            });
            console.log(BestOfTheBest);
        };
    }
    return Rada;
}());
var verhovna = new Rada();
verhovna.addParts(ydar);
verhovna.addParts(national);
// verhovna.showBestTakerFromRada();
// verhovna.showSinglePart(national);
// verhovna.showParts();
// verhovna.removePart(ydar);
// verhovna.showParts();
