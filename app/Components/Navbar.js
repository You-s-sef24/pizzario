"use client";

import { useContext } from 'react';
import '../globals.css';
import Link from "next/link";
import { UsersContext } from '../Contexts/UsersContext';
import { CartContext } from '../Contexts/CartContext';

export default function Navbar({ page }) {
    const { isLoggedIn, logout } = useContext(UsersContext);
    const { totalItems } = useContext(CartContext);
    const pages = ["Register", "Sign in", "About Us", "Contact Us","Privacy"];

    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light shadow-sm p-2 bg-body rounded">
            <div className="container-fluid">
                <Link className="navbar-brand text-brown d-flex align-items-center gap-1 fw-bold" href="/">
                    <i className='bxr bx-pizza-alt'></i>  <i>Pizzario</i>
                </Link>

                {!pages.includes(page) ? (
                    <div className="d-flex align-items-center gap-2">
                        <Link className="nav-link d-flex gap-2 rounded-pill bg-brown text-white p-2 px-3" href="/cart">
                            <i className="bi bi-cart2"></i>
                            <span>{totalItems}</span>
                        </Link>
                        {isLoggedIn ? (
                            <div className="dropdown open">
                                <h3
                                    className="m-0 fw-bold dropdown-toggle"
                                    type="button"
                                    id="triggerId"
                                    data-bs-toggle="dropdown"
                                >
                                    <i className="bi bi-person-circle"></i>
                                </h3>
                                <div className="dropdown-menu dropdown-menu-end" aria-labelledby="triggerId">
                                    <Link className="dropdown-item" href="/orders">Orders</Link>
                                    <Link className="dropdown-item" href="/settings">Setting</Link>
                                    <button className="dropdown-item text-danger" onClick={() => {
                                        logout();
                                    }}>
                                        Logout
                                    </button>
                                </div>
                            </div>
                        ) : (<Link href={'/signin'} className='btn btn-brown'>Sign in</Link>)}
                    </div>
                ) : ("")}
            </div>
        </nav>
    );
}