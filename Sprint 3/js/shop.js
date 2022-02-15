// If you have time, you can move this variable "products" to a json file and load the data in this js. It will look more professional
var products = [{
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery'
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    }, {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery'
    }, {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    }, {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    }, {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    }, {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    }, {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    }, {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]

// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1

function buy(buttonID) {
    // 1. Loop for to the array products to get the item to add to cart
    for (let i = 0; i < products.length; i++) {
        if (buttonID == products[i].id) {
            // 2. Add found product to the cartList array
            cartList.push(products[i]);
            console.log(cartList);
        }
    }
}

// Exercise 2

function cleanCart() {
    cartList.length = 0;
}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    total = 0;
    for (let i = 0; i < cartList.length; i++) {
        total = total + cartList[i].price;
    }
    console.log(total)
}

// Exercise 4
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
    // We empty cart so running the function several times wont add more items each time
    cart.length = 0;
    console.log("cartList inicial: ", cartList)
    for (let i = 0; i < cartList.length; i++) {
        // Select the product we are working on in this loop (specificProduct)
        var specificProduct = cartList[i];
        // If the product is already in cart(cart.includes), find it(cart.find), store it in productExists and increase quantity
        if (cart.includes(specificProduct)) {
            var productExists = cart.find(x => x.id == specificProduct.id);
            productExists.quantity++
        }
        // If the product is not in cart(!cart.includes), set quantity to 1 and add it(cart.push) to the cart
        if (!cart.includes(specificProduct)) {
            specificProduct.quantity = 1;
            cart.push(specificProduct)
        }
    }
    console.log("cart final: ", cart)
}

// Exercise 5
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    for (let i = 0; i < cart.length; i++) {
        // Select the product we are working on in this loop (specificProduct)
        var specificProduct = cart[i];
        // Reset values in case the cart is modified and products are deleted from it
        specificProduct.subtotalWithDiscount = []
            // If the product is cooking oil, and there are 3 or more, calculate price subtotalWithDiscount (quantity * 10)
        if (specificProduct.name == "cooking oil") {
            if (specificProduct.quantity >= 3) {
                specificProduct.subtotalWithDiscount = specificProduct.quantity * 10;
            }
        }
        // If the product is Pasta, and there are 10 or more, calculate subtotalWithDiscount (quantity * price * 2/3)
        if (specificProduct.name == "Pasta") {
            if (specificProduct.quantity >= 10) {
                specificProduct.subtotalWithDiscount = specificProduct.quantity * specificProduct.price * 2 / 3;
                console.log("Total price is: ", specificProduct.subtotalWithDiscount)
            }
        }
    }
}


// ** Nivell II **

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

// Exercise 9
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
}