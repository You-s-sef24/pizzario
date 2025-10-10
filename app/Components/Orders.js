"use client";

import '../globals.css';
import { useContext, useEffect } from "react";
import Link from "next/link";
import { UsersContext } from '../Contexts/UsersContext';
import { useRouter } from 'next/navigation';

export default function Orders() {
    const { isLoggedIn, loggedInUser } = useContext(UsersContext);
    const router = useRouter();
    const orders = loggedInUser.ordersHistory;

    useEffect(() => {
        if (!isLoggedIn) {
            router.push('/');
        }
    }, [isLoggedIn, router]);

    if (!isLoggedIn) {
        return null;
    }

    const renderOrders = orders.map((order) => {
        return (
            <Link href={`/orders/${order.id}`} className="review d-flex align-items-center border rounded shadow text-brown text-decoration-none p-3 mb-2" key={order.id}>
                <div className="col-1">
                    <h3 className='m-0'><i className="bi bi-basket-fill"></i></h3>
                </div>
                <div className="col-9 flex-column">
                    <h5 className='m-0'>Order: #{order.id}</h5>
                    <small className='text-muted'>Placed on {order.date} at {order.time}</small>
                </div>
                <div className="col">
                    <h5 className='m-0'>{order.Total} EGP</h5>
                </div>
            </Link>
        );
    });

    if (orders.length === 0) {
        return (
            <div className="content d-flex justify-content-center">
                <div className="d-flex flex-column">
                    <h3 className="text-center">No orders yet</h3>
                    <Link href={"/"} className="btn btn-brown">Order Now!</Link>
                </div>
            </div>
        );
    }
    return (
        <div className="container-fluid content">
            <h3>Orders History</h3>
            <hr />
            {renderOrders}
        </div>
    );
}