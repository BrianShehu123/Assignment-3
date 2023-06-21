function addToCart(item, quantity) {
    if (typeof item !== 'object') {
        return 'Error';
    }

    if (cart[item])
        cart[item] += quantity;

        cart[item] = quantity;
}

function removeFromCart(item, quantity) {
    if (typeof item!== 'object') {
        return 'Error';
    }

    if (cart[item]) {
        if (cart[item] <= quantity) {
            delete cart[item];
        } else {
            cart[item] -= quantity;
    
        }
    }
}

function calculateTotal(item, quantity) {
    if (typeof item!== 'object') {
        return 'Error';
    }

 return item.cost * quantity;
        
}

module.exports = {addToCart, removeFromCart, calculateTotal};