// If you have time, you can move this variable "products" to a json file and load the data in this js. It will look more professional
var products = [{
        id: 1,
        name: 'Nian Gao',
        price: 10,
        type: 'grocery'
    },
    {
        id: 2,
        name: 'Mochi',
        price: 23,
        type: 'grocery'
    }, {
        id: 3,
        name: 'Mixed Mitai',
        price: 10,
        type: 'grocery'
    }, {
        id: 4,
        name: 'Skin Care',
        price: 39,
        type: 'beauty'
    }, {
        id: 5,
        name: 'Serum',
        price: 24,
        type: 'beauty'
    }, {
        id: 6,
        name: 'Lipstick',
        price: 12,
        type: 'beauty'
    }, {
        id: 7,
        name: 'Red Kimono',
        price: 49,
        type: 'clothes'
    }, {
        id: 8,
        name: 'Blue Kimono',
        price: 49,
        type: 'clothes'
    }, {
        id: 9,
        name: 'White Kimono',
        price: 49,
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
    printCart();
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
    // Generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
    // We empty cart so running the function several times wont add more items each time
    cart.length = 0;
    console.log("cartList inicial: ", cartList)
    for (let i = 0; i < cartList.length; i++) {
        //Select the product we are working on in this loop (specificProduct)
        var specificProduct = cartList[i];
        //If the product is already in cart(cart.includes), find it(cart.find), store it in productExists and increase quantity
        if (cart.includes(specificProduct)) {
            var productExists = cart.find(x => x.id == specificProduct.id);
            productExists.quantity++
        }
        //If the product is not in cart(!cart.includes), set quantity to 1 and add it(.push) to the cart
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
        //Select the product we are working on in this loop (specificProduct)
        var specificProduct = cart[i];
        //Reset value in case the cart is modified and calculated again
        specificProduct.subtotalWithDiscount = []
        if (specificProduct.id == 1) {
            // If there are enough products for discount, modify price
            if (specificProduct.quantity >= 3) {
                specificProduct.price = 8;
                specificProduct.subtotalWithDiscount = specificProduct.quantity * specificProduct.price;
                // If there are not enough products for discount, set the price back to normal
            } else {
                specificProduct.price = 10;
                specificProduct.subtotalWithDiscount = specificProduct.quantity * specificProduct.price
            }
        }
        if (specificProduct.id == 2) {
            // If there are enough products for discount, modify price
            if (specificProduct.quantity >= 10) {
                specificProduct.price = 15.30;
                specificProduct.subtotalWithDiscount = specificProduct.quantity * specificProduct.price;
                // If there are not enough products for discount, set the price back to normal
            } else {
                specificProduct.price = 23;
                specificProduct.subtotalWithDiscount = specificProduct.quantity * specificProduct.price
            }
        }
        // If the products are not discounted, calculate total price as normal
        if (specificProduct.id !== 1) {
            if (specificProduct.id !== 2) {
                specificProduct.subtotalWithDiscount = specificProduct.quantity * specificProduct.price
            }
        }
    }
}



// ** Nivell II **

// Exercise 7

function addToCart(buttonID) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // Find the product we are adding in the products list
    for (let i = 0; i < products.length; i++) {
        if (buttonID == products[i].id) {
            // Select the product we are working on and make it a variable (specificProduct)
            var specificProduct = products[i];
            // 2. Add found product to the cart array or update its quantity in
            // If the product is already in cart(cart.includes), find it(cart.find), store it in productExists and increase quantity in case it has been added previously.
            if (cart.includes(specificProduct)) {
                var productExists = cart.find(x => x.id == specificProduct.id);
                productExists.quantity++
            }
            // If the product is not in cart(!cart.includes), set quantity to 1 and add it(.push) to the cart
            if (!cart.includes(specificProduct)) {
                specificProduct.quantity = 1;
                cart.push(specificProduct)
            }
        }
    }
    printCart()
}

// Exercise 8
function removeFromCart(removeId) {
    // Loop to get the item to remove from cart
    for (let i = 0; i < cart.length; i++) {
        if (removeId == cart[i].id) {
            var specificProduct = cart[i];
            // If there is only one in cart
            if (specificProduct.quantity == 1) {
                // Remove the product from the cartList array
                cart.splice(i, 1)
            }
            // If there are more than one in cart
            if (specificProduct.quantity > 1) {
                // Reduce quantity by 1
                specificProduct.quantity = specificProduct.quantity - 1
            }
        }
    }
    printCart();
}

// Exercise 9
var ul = document.getElementById("showCart");

function printCart() {
    // Reset the content of showCart so it won't stack if the function is called again
<<<<<<< HEAD
    ul.innerHTML = ''
    var totalCost = 0;
    // Calculate prices
    applyPromotionsCart()
    var totalPrice = document.getElementById('totalPrice');
    totalPrice.innerHTML = '';
    // Fill the shopping cart modal manipulating the shopping cart dom
=======
    ul.innerHTML = "Your Cart:"
        // Fill the shopping cart modal manipulating the shopping cart dom
>>>>>>> b09fdc6a8d394bf257df6f23728ac4850aa25d79
    for (let i = 0; i < cart.length; i++) {
        // Select the item we will be adding
        var productName = cart[i].name;
        var productQuantity = cart[i].quantity;
<<<<<<< HEAD
        var productID = cart[i].id;
        var productCost = cart[i].subtotalWithDiscount;
        totalCost = totalCost + productCost;
        // Create the li for the item
        var li = document.createElement('li');
        li.setAttribute('class', 'align-middle d-flex')
        var p = document.createElement('p');
        p.setAttribute('class', 'my-auto mx-3')
            // Button to increase units
        var increaseButton = document.createElement('button');
        increaseButton.setAttribute('onClick', 'addToCart(' + productID + ')');
        increaseButton.setAttribute('class', 'btn btn-warning m-1 w-auto');
        increaseButton.appendChild(document.createTextNode('+'));
        // Button to decrease units
        var decreaseButton = document.createElement('button');
        decreaseButton.setAttribute('onClick', 'removeFromCart(' + productID + ')');
        decreaseButton.setAttribute('class', 'btn btn-warning m-1 w-auto');
        decreaseButton.appendChild(document.createTextNode('-'));
        // Create the content of the li
        var productLine = document.createTextNode(productQuantity + ' - ' + productName + ' - ' + '$' + productCost);
        // Create the li and include it in the list
        li.appendChild(decreaseButton);
        li.appendChild(increaseButton);
        p.appendChild(productLine);
        li.appendChild(p);
        ul.appendChild(li);
    }
    var productTotalCost = document.createTextNode('Total: $' + totalCost)
    totalPrice.appendChild(productTotalCost);
}
=======
        var li = document.createElement('li');
        // This does nothing right now but will help later with styling
        // Create the content of the li
        var productLine = document.createTextNode(productQuantity + ' ' + productName);
        // Create the li and include it in the list
        li.appendChild(productLine);
        ul.appendChild(li);
    }
};
>>>>>>> b09fdc6a8d394bf257df6f23728ac4850aa25d79
