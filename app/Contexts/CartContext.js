"use client";

import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
    const [cart, setCart] = useState([]);
    const [totalItems, setTotalItems] = useState(0);
    const [subtotal, setSubtotal] = useState(0);
    const [deliveryFee, setDeliveryFee] = useState(0);
    const [total, setTotal] = useState(0);
    const [discount, setDiscount] = useState(0);

    const DELIVERY_FEE = 30;

    useEffect(() => {
        const savedCart = localStorage.getItem("cart");
        if (savedCart) {
            setCart(JSON.parse(savedCart));
        }
    }, []);

    useEffect(() => {
        let priceTotal = 0;
        cart.forEach(item => {
            priceTotal += item.quantity * item.price;
        });

        if (priceTotal > 1000) {
            setDiscount(10);
        } else {
            setDiscount(0);
        }
    }, [cart]);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));

        let itemsCount = 0;
        let priceTotal = 0;

        cart.forEach(item => {
            itemsCount += item.quantity;
            priceTotal += item.quantity * item.price;
        });

        const fee = itemsCount === 0 ? 0 : DELIVERY_FEE;

        setTotalItems(itemsCount);
        setSubtotal(priceTotal);
        setDeliveryFee(fee);
        setTotal((priceTotal + fee) - ((priceTotal + fee) * (discount / 100)));
    }, [cart, discount]);

    return (
        <CartContext.Provider value={{ cart, setCart, totalItems, subtotal, deliveryFee, total, discount }}>
            {children}
        </CartContext.Provider>
    );
}
