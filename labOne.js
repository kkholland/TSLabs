var mountains = [
    {
        name: 'Kilimanjaro',
        height: 19341
    }, {
        name: 'Everest',
        height: 29029
    }, {
        name: 'Denali',
        height: 20310
    },
];
function findNameOfTallestMountain(mountains) {
    var tallest = null;
    if (mountains.length > 0) {
        for (var _i = 0, mountains_1 = mountains; _i < mountains_1.length; _i++) {
            var mountain = mountains_1[_i];
            if (!tallest) {
                tallest = mountain;
            }
            else if (mountain.height > tallest.height) {
                tallest = mountain;
            }
        }
        return tallest === null || tallest === void 0 ? void 0 : tallest.name;
    }
    else {
        return "no mountains listed";
    }
}
var tallestMountain = findNameOfTallestMountain(mountains);
console.log(tallestMountain);
var products = [
    {
        name: 'McDouble',
        price: 3
    }, {
        name: 'McNuggets',
        price: 5
    }, {
        name: 'Big Mac',
        price: 6
    }
];
function calcAverageProductPrice(products) {
    if (products.length > 0) {
        var total = 0;
        for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
            var product = products_1[_i];
            total += product.price;
        }
        return total;
    }
    else {
        return 0;
    }
}
var totalPrice = calcAverageProductPrice(products);
console.log(totalPrice);
var inventory = [
    {
        product: {
            name: 'motor',
            price: 10.00
        },
        quantity: 10
    }, {
        product: {
            name: 'sensor',
            price: 12.50
        },
        quantity: 4
    }, {
        product: {
            name: 'LED',
            price: 1.00
        },
        quantity: 20
    }
];
function calcInventoryValue(inventory) {
    if (inventory.length > 0) {
        var total = 0;
        for (var _i = 0, inventory_1 = inventory; _i < inventory_1.length; _i++) {
            var item = inventory_1[_i];
            total += (item.product.price * item.quantity);
        }
        return total;
    }
    else {
        return 0;
    }
}
var inventoryValue = calcInventoryValue(inventory);
console.log(inventoryValue);
