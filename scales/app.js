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
        this.products = [];
    }
    Scales.prototype.add = function (product) {
        this.products.push(product);
    };
    Scales.prototype.getSumScale = function () {
        var overallScale = 0;
        this.products.map(function (product) {
            overallScale += product.scale;
        });
        return overallScale;
    };
    Scales.prototype.getNameList = function () {
        var names = [];
        this.products.map(function (product) {
            names.push(product.name);
        });
        return names;
    };
    return Scales;
}());
var Product = /** @class */ (function () {
    function Product(_name, _scale) {
        this.name = _name;
        this.scale = _scale;
    }
    Product.prototype.getScale = function () {
        return this.scale;
    };
    Product.prototype.getName = function () {
        return this.name;
    };
    return Product;
}());
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple(_name, _scale) {
        return _super.call(this, _name, _scale) || this;
    }
    return Apple;
}(Product));
var Tomato = /** @class */ (function (_super) {
    __extends(Tomato, _super);
    function Tomato(_name, _scale) {
        return _super.call(this, _name, _scale) || this;
    }
    return Tomato;
}(Product));
var Cucumber = /** @class */ (function (_super) {
    __extends(Cucumber, _super);
    function Cucumber(_name, _scale) {
        return _super.call(this, _name, _scale) || this;
    }
    return Cucumber;
}(Product));
var apple1 = new Apple("apple1", 200);
var apple2 = new Apple("apple2", 50);
var tomato1 = new Tomato("tomato1", 100);
var tomato2 = new Tomato("tomato2", 80);
var cucumber = new Cucumber("cucumber1", 250);
var scales = new Scales();
scales.add(apple1);
scales.add(apple2);
scales.add(tomato1);
scales.add(tomato2);
scales.add(cucumber);
console.log(scales.getSumScale());
console.log(scales.getNameList());
//# sourceMappingURL=app.js.map