"use client";

import '../globals.css';
import { useContext, useMemo, useState } from "react";
import { CartContext } from "../Contexts/CartContext";
import { useRouter } from 'next/navigation';
import { UsersContext } from '../Contexts/UsersContext';
import Link from 'next/link';

export default function Cart() {
    const { cart, setCart, subtotal, total, deliveryFee, discount, totalItems } = useContext(CartContext);
    const { isLoggedIn, setLoggedInUser, loggedInUser } = useContext(UsersContext);
    const [info, setInfo] = useState({
        name: `${loggedInUser?.firstName ?? ""} ${loggedInUser?.lastName ?? ""}`.trim(),
        phone: loggedInUser?.phone,
        deliveryAddress: "",
        paymentMethod: "Cash On Delivery",
        cardName: "",
        cardNo: "",
        expiry: "",
        cvv: ""
    });
    const [error, setError] = useState(false);
    const [orderPlaced, setOrderPlaced] = useState(false);
    const router = useRouter();

    function validateInfo(info) {
        if (!info.name || !info.phone || !info.deliveryAddress || !info.paymentMethod) {
            return false;
        }

        if (info.paymentMethod === "Credit Card") {
            if (!info.cardName || !info.cardNo || !info.expiry || !info.cvv) {
                return false;
            }
        }
        return true;
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (isLoggedIn && validateInfo(info)) {
            const newOrdersList = [...loggedInUser.ordersHistory];
            newOrdersList.push({
                id: Date.now(),
                date: new Date().toLocaleDateString("en-GB"),
                time: new Date().toLocaleTimeString([], {
                    hour: "numeric",
                    minute: "2-digit",
                    hour12: true
                }),
                name: info.name,
                phone: info.phone,
                deliveryAddress: info.deliveryAddress,
                paymentMethod: info.paymentMethod,
                items: cart,
                subTotal: subtotal,
                Discount: discount,
                delivery: deliveryFee,
                Total: total
            });

            setLoggedInUser({ ...loggedInUser, ordersHistory: newOrdersList });
            setOrderPlaced(true);
            setError(false);
            setTimeout(() => {
                router.push("/");
                setCart([]);
                setInfo({
                    name: "",
                    phone: "",
                    deliveryAddress: "",
                    paymentMethod: "Cash On Delivery",
                    cardName: "",
                    cardNo: "",
                    expiry: "",
                    cvv: ""
                });
            }, 2000);
        } else {
            setError(true);
        }
    }

    const renderCartItems = useMemo(() => {
        return cart.map((item, index) => {

            function handleIncrease(id, size) {
                setCart(cart.map(item =>
                    item.id === id && item.size === size
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                ));
            }

            function handleDecrease(id, size) {
                setCart(cart.map(item =>
                    item.id === id && item.size === size && item.quantity > 1
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                ));
            }

            function handleDelete(id, size) {
                setCart(cart.filter(item => !(item.id === id && item.size === size)));
            }

            return (
                <div key={index} className="row align-items-center border rounded p-1 mb-2">
                    <div className="col-2 col-md-2">
                        <img src={item.image} alt={item.name} className="cart-image rounded w-100" />
                    </div>
                    <div className="col-4 col-md-7 flex-column">
                        <h5 className="text-truncate mb-1">{item.name}</h5>
                        {item.size ? (<small className="text-muted">Size: {item.size}</small>) : ("")}
                    </div>
                    <div className='col-6 col-md-3 d-flex justify-content-around align-items-center'>
                        <div className='d-flex align-items-center gap-1'>
                            <button className='btn btn-brown' onClick={() => { handleDecrease(item.id, item.size) }}>-</button>
                            <p className='mx-1 m-0'>{item.quantity}</p>
                            <button className='btn btn-brown' onClick={() => { handleIncrease(item.id, item.size) }}>+</button>
                        </div>
                        <p className='text-center text-truncate fw-bold m-0 mx-1'>{item.price} EGP</p>
                        <button className='btn btn-danger' onClick={() => { handleDelete(item.id, item.size) }}><i className="bi bi-trash-fill"></i></button>
                    </div>
                </div>
            );

        });
    }, [cart, setCart]);

    if (totalItems === 0) {
        return (
            <div className='d-flex content justify-content-center align-items-center'>
                <div className='d-flex flex-column'>
                    <p>Your cart is empty</p>
                    <Link href={'/'} className='btn btn-brown'>
                        Order Now!
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="container-fluid">
            <div className="row mt-5 pt-3">
                <div className="col-12 col-md-8">
                    <h3 className="fw-bold">Your Cart</h3>
                    <div>
                        {renderCartItems}
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <form className="border p-3 rounded shadow" onSubmit={(e) => {
                        handleSubmit(e);
                    }}>
                        {error || orderPlaced ? (
                            <div className={`alert ${error ? 'alert-danger' : 'alert-success'} alert-dismissible fade show`} role="alert">
                                <button
                                    type="button"
                                    className="btn-close"
                                    aria-label="Close"
                                    onClick={() => { setError(false) }}
                                ></button>
                                <strong>{!error && orderPlaced ? 'Order Placed Successfully!' : 'Please fill empty fields'}</strong>
                            </div>
                        ) : ("")}

                        <h4 className="fw-bold">Checkout</h4>
                        <label className="form-label">Name</label>
                        <input className="form-control mb-2" type="text" placeholder="Enter your name" value={info.name} onChange={(e) => {
                            setInfo({ ...info, name: e.target.value });
                        }} />
                        <label className="form-label">Phone</label>
                        <input className="form-control mb-2" type="tel" pattern="[0-9]{11}" placeholder="Enter your phone number" value={info.phone} onChange={(e) => {
                            setInfo({ ...info, phone: e.target.value });
                        }} />
                        <label className="form-label">Delivery Address</label>
                        <textarea className="form-control mb-2" placeholder="Enter your delivery address" value={info.deliveryAddress} onChange={(e) => {
                            setInfo({ ...info, deliveryAddress: e.target.value });
                        }}></textarea>
                        <hr />

                        <h4 className="fw-bold">Payment</h4>

                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="paymentMethod" id="Cash On Delivery" checked={info.paymentMethod === "Cash On Delivery"} value={"Cash On Delivery"} onChange={(e) => {
                                setInfo({ ...info, paymentMethod: e.target.value });
                            }} />
                            <label className="form-check-label" htmlFor="CashOnDelivery"> Cash on Delivery </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="paymentMethod" id="Credit Card" checked={info.paymentMethod === "Credit Card"} value={"Credit Card"} onChange={(e) => {
                                setInfo({ ...info, paymentMethod: e.target.value });
                            }} />
                            <label className="form-check-label" htmlFor="CreditCard">Credit Card</label>
                        </div>
                        {
                            info.paymentMethod === "Credit Card" ? (
                                <div className='review fade'>
                                    <hr />
                                    <h5 className="mb-3">Payment details</h5>

                                    <div className="mb-3">
                                        <label htmlFor="cardName" className="form-label">Name on card</label>
                                        <input type="text" id="cardName" className="form-control" placeholder="Full name as on card" required value={info.cardName} onChange={(e) => {
                                            setInfo({ ...info, cardName: e.target.value });
                                        }} />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="cardNumber" className="form-label">Card number</label>
                                        <input type="text" id="cardNumber" className="form-control" pattern="[0-9]{16}" placeholder="xxxx xxxx xxxx xxxx" required value={info.cardNo} onChange={(e) => {
                                            setInfo({ ...info, cardNo: e.target.value });
                                        }} />
                                    </div>

                                    <div className="row align-items-center g-2 mb-3">
                                        <div className="col-6">
                                            <label htmlFor="expiry" className="form-label">Expiry</label>
                                            <input type="text" id="expiry" className="form-control" placeholder="MM/YY" required value={info.expiry} onChange={(e) => {
                                                setInfo({ ...info, expiry: e.target.value });
                                            }} />
                                        </div>
                                        <div className="col-6">
                                            <label htmlFor="cvv" className="form-label">CVV</label>
                                            <input type="text" id="cvv" className="form-control" pattern="[0-9]{3}" placeholder="123" required value={info.cvv} onChange={(e) => {
                                                setInfo({ ...info, cvv: e.target.value });
                                            }} />
                                        </div>
                                    </div>
                                </div>
                            ) : ("")
                        }
                        <hr />
                        <div className="d-flex justify-content-between align-items-center mb-1">
                            <p className="m-0">Subtotal</p>
                            <p className="m-0">{subtotal} EGP</p>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-1">
                            <p className="m-0">Delivery Fee</p>
                            <p className="m-0">{deliveryFee} EGP</p>
                        </div>
                        <div className="d-flex justify-content-between align-items-center text-success mb-1">
                            <p className="m-0">Discount</p>
                            <p className="m-0">{discount}%</p>
                        </div>
                        <div className="d-flex justify-content-between align-items-center text-brown mb-3">
                            <h5 className="fw-bold m-0">Total</h5>
                            <h5 className="fw-bold m-0">{total} EGP</h5>
                        </div>
                        {isLoggedIn ? (
                            <button type='submit' className={`btn btn-outline-brown w-100`} disabled={totalItems === 0}>Place Order</button>
                        ) : (
                            <Link href={'/signin'} className={`btn btn-outline-brown w-100`}>Sign in</Link>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
}