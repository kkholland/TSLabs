//Find tallest mountain
interface Mountain{
    name: string;
    height: number;
}

const mountains: Mountain[] = [
    {
        name: 'Kilimanjaro',
        height: 19341
    },{
        name: 'Everest',
        height: 29029
    },{
        name: 'Denali',
        height: 20310
    },
]

function findNameOfTallestMountain(mountains:Mountain[]){
    let tallest = null;

    if (mountains.length > 0){
       for (let mountain of mountains){
            if(!tallest){
                tallest = mountain;
            } else if(mountain.height > tallest.height){
                tallest = mountain;
            }
        }

        return tallest?.name; 
    } else {
        return "no mountains listed";
    }
    
}


let tallestMountain = findNameOfTallestMountain(mountains);

console.log(tallestMountain);


//Product Calculation
interface Product{
    name: string;
    price: number;
}

const products: Product[] = [
    {
        name: 'McDouble',
        price: 3
    },{
        name: 'McNuggets',
        price: 5
    },{
        name: 'Big Mac',
        price: 6
    }
];

function calcAverageProductPrice(products:Product[]):number{
    if (products.length >0){
        let total = 0;
        for (let product of products){
            total += product.price;
        }
        return total;
    } else{
        return 0;
    }
    
}

let totalPrice = calcAverageProductPrice(products);
console.log(totalPrice);


//Inventory Value
interface InventoryItem {
    product: Product;
    quantity: number;
}

const inventory: InventoryItem[] = [
    {
        product: {
            name: 'motor', 
            price: 10.00
        },
        quantity: 10
    },{
        product: {
            name: 'sensor',
            price: 12.50
        },
        quantity: 4
    },{
        product: {
            name: 'LED',
            price: 1.00
        },
        quantity: 20
    }
];

function calcInventoryValue(inventory:InventoryItem[]): number{
    if (inventory.length > 0){
        let total = 0;
        for (let item of inventory){
            total += (item.product.price * item.quantity);
        }
        return total;
    }else{
        return 0;
    }
}

let inventoryValue = calcInventoryValue(inventory);
console.log(inventoryValue);

