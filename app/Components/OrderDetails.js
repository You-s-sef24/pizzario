"use client";

import { useContext, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { UsersContext } from "../Contexts/UsersContext";

export default function OrderDetails({ id }) {
    const { loggedInUser } = useContext(UsersContext);
    const orders = loggedInUser.ordersHistory;
    const order = orders.find((o) => String(o.id) === String(id));
    const { isLoggedIn } = useContext(UsersContext);
    const router = useRouter();

    useEffect(() => {
        if (!isLoggedIn) {
            router.push('/');
        }
    }, [isLoggedIn, router]);

    if (!isLoggedIn) {
        return null;
    }

    function addOneHour(timeStr) {
        const date = new Date(`1970-01-01 ${timeStr}`);

        if (order.items.length >= 3) {
            date.setHours(date.getHours() + 2);
        } else {
            date.setHours(date.getHours() + 1);
        }
        return date.toLocaleTimeString([], {
            hour: "numeric",
            minute: "2-digit",
            hour12: true
        });
    }

    const renderItems = order.items.map((item, index) => {
        return (
            <div className="row justify-content-center align-items-center mb-2" key={index}>
                <div className="col-9 d-flex flex-column">
                    <h4 className="text-wrap m-0">{item.name} {item.size ? (<small className="text-muted">({item.size})</small>) : ("")}</h4>
                    <p className="text-muted m-0">Quantity: {item.quantity}</p>
                </div>
                <div className="col-3">
                    <h4>{item.quantity * item.price} EGP</h4>
                </div>
            </div>
        );
    });

    if (!order) {
        return (
            <div className="container content">
                <nav className="breadcrumb mb-3">
                    <Link className="breadcrumb-item" href="/orders">Orders History</Link>
                    <span className="breadcrumb-item active">Order Details</span>
                </nav>
                <div className="alert alert-warning">
                    <h4>Order not found</h4>
                    <p>The order you’re looking for doesn’t exist.</p>
                    <Link href="/orders" className="btn btn-brown mt-2">Back to Orders</Link>
                </div>
            </div>
        );
    }


    return (
        <div className="container content">
            <nav className="breadcrumb mb-3">
                <Link className="breadcrumb-item text-decoration-none text-brown" href="/orders">Orders History</Link>
                <span className="breadcrumb-item active" aria-current="page">Order Details</span>
            </nav>
            <div className="mb-3">
                <h1>Order #{order.id}</h1>
                <p className="text-muted">Placed on {order.date} at {order.time}</p>
            </div>
            <div className="bg-white border rounded shadow p-4 mb-4">
                <h3 className="fw-bold mb-3">Order Summary</h3>
                {renderItems}
                <hr />
                <div className="d-flex justify-content-between">
                    <p>Subtotal</p>
                    <h3>{order.subTotal} EGP</h3>
                </div>
                <div className="d-flex justify-content-between">
                    <p>Delivery Fee</p>
                    <h3>{order.delivery} EGP</h3>
                </div>
                <div className="d-flex justify-content-between text-success">
                    <p>Discount</p>
                    <h3>{order.Discount}%</h3>
                </div>
                <div className="d-flex justify-content-between">
                    <h3 className="fw-bold m-0">Total</h3>
                    <h3 className="fw-bold m-0">{order.Total} EGP</h3>
                </div>
            </div>
            <div className="bg-white border rounded shadow p-4 mb-5">
                <h3 className="fw-bold mb-3">Delivery Information</h3>
                <div className="d-flex justify-content-between">
                    <p className="m-0">Address</p>
                    <p className="m-0">{order.deliveryAddress}</p>
                </div>
                <div className="d-flex justify-content-between">
                    <p className="m-0">Deliverd At</p>
                    <p className="m-0">{addOneHour(order.time)}</p>
                </div>
                <div className="d-flex justify-content-between">
                    <p className="m-0">Payment</p>
                    <p className="m-0">{order.paymentMethod}</p>
                </div>
            </div>
        </div>
    );
}