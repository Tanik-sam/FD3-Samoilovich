var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Scales = /** @class */ (function () {
    function Scales() {
        this.list = [];
    }
    Scales.prototype.add = function (product) {
        this.list.push(product);
        return (this.list);
    };
    Scales.prototype.getSumScale = function () {
        var totalWeight = 0;
        for (var i = 0; i < this.list.length; i++) {
            totalWeight += this.list[i].weight;
        }
        return (totalWeight);
    };
    Scales.prototype.getNameList = function () {
        var nameList = [];
        for (var i = 0; i < this.list.length; i++) {
            nameList[i] = this.list[i].getName();
        }
        return (nameList);
    };
    return Scales;
}());
var Products = /** @class */ (function () {
    function Products() {
        this.weight = 0;
    }
    Products.prototype.getScale = function () {
        return (this.weight);
    };
    Products.prototype.getName = function () {
        return (this.name);
    };
    return Products;
}());
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple(_name, _color, _taste, _weight) {
        var _this = 
        // конструктор класса-потомка должен вызвать конструктор класса-предка
        _super.call(this) || this;
        _this.name = _name;
        _this.color = _color;
        _this.taste = _taste;
        _this.weight = _weight;
        return _this;
    }
    return Apple;
}(Products));
var Tomato = /** @class */ (function (_super) {
    __extends(Tomato, _super);
    function Tomato(_name, _color, _taste, _weight) {
        var _this = _super.call(this) || this;
        _this.name = _name;
        _this.color = _color;
        _this.taste = _taste;
        _this.weight = _weight;
        return _this;
    }
    return Tomato;
}(Products));
var scales = new Scales;
var apple1 = new Apple('golden', 'yelow', 'sweet', 200);
var tomato1 = new Tomato('red gigant', 'red', 'sour', 250);
var addA1 = scales.add(apple1);
console.log("Добавили яблоко ", addA1);
var addT1 = scales.add(tomato1);
console.log("Добавили к яблоку помидор ", addT1);
var weightTotal = scales.getSumScale();
console.log("Суммарная масса ", weightTotal, " гр ");
var nameTotal = scales.getNameList();
console.log("Названия сортов добавленных продуктов", nameTotal);
var a1 = apple1.getScale();
console.log("Масса одного яблока ", a1, " гр ");
var t1 = tomato1.getName();
console.log("Сорт помидора", t1);
//# sourceMappingURL=app.js.map