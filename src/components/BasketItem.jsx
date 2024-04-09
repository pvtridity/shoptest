function BasketItem(props) {
    const {id, 
        name, 
        price, 
        quantity, 
        removeFromBasket = Function.prototype,
        incQuantity = Function.prototype,
        decQuantity = Function.prototype,} = props;
    return (
            <li className="collection-item">
                {name}{" "}
                <i 
                class="material-icons basket-quantity"
                onClick={() => decQuantity(id)}>
                    <p className="cart-icons">remove_shopping_cart</p>
                    </i> 
                    x {quantity} 
                    <i 
                    class="material-icons basket-quantity"
                    onClick={() => incQuantity(id)}
                    > 
                    <p className="cart-icons">add_shopping_cart</p>
                    </i>{" "} 
                    = {price * quantity} руб.
                <span class="secondary-content" onClick={() => removeFromBasket(id)}>
                    <i class="material-icons basket-delete">clear</i>
                </span>
            </li>
    );
}

export {BasketItem};