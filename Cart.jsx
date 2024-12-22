import React from "react";
import { useCart } from "./CartContext";
// import './Cart.css';

export default function Cart() {
    const { cart, incrementQuantity, decrementQuantity, calculateTotalPrice } = useCart();

    return (
        <div className="cart">
            <h1>Cart</h1>
            {cart.length === 0 ? (
                <p>No Items</p>
            ) : (
                <ul>
                    {cart.map((product) => (
                        <li key={product.id} className="cart-item">
                            <img src={product.img} alt={product.name} className="cart-item-img" />
                            <span>{product.name} - Rs {product.price} x {product.quantity}</span>
                            <button onClick={() => incrementQuantity(product.id)}>+</button>
                            <button onClick={() => decrementQuantity(product.id)}>-</button>
                        </li>
                    ))}
                </ul>
            )}
            <div>
                <h2>Total Price: Rs {calculateTotalPrice()}</h2>
                <button onClick={() => alert("Order Confirmed")}>Place Your Order</button>
            </div>
        </div>
    );
}
