"use client";

import '../globals.css';
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { UsersContext } from "../Contexts/UsersContext";
import { useRouter } from "next/navigation";

export default function Signin() {
    const [user, setUser] = useState({ email: "", password: "" });
    const { users, setLoggedInUser, setIsLoggedIn, isLoggedIn } = useContext(UsersContext);
    const [error, setError] = useState({
        found: false,
        msg: ''
    });
    const router = useRouter();

    useEffect(() => {
        if (isLoggedIn) {
            router.push('/');
        }
    }, [isLoggedIn, router])

    function handleSubmit(e) {
        e.preventDefault();
        const found = users.find((u) => u.email === user.email && u.password === user.password);
        if (found) {
            setLoggedInUser(found);
            setIsLoggedIn(true);
            setError({ ...error, found: false, msg: '' });
            router.push('/');
        } else {
            setError({ ...error, found: true, msg: "Invalid email or password" });
            return;
        }
    }

    if (isLoggedIn) {
        return null;
    }
    
    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100 pt-3">
            <form onSubmit={(e) => { handleSubmit(e) }} className="d-flex flex-column gap-3 border p-5 rounded shadow mt-5">
                <div className={`alert alert-danger alert-dismissible fade ${error.found ? 'show' : 'd-none'}`} role="alert">
                    <button
                        type="button"
                        className="btn-close"
                        aria-label="Close"
                        onClick={() => { setError({ ...error, found: false }) }}
                    ></button>
                    <strong>{error.msg}</strong>
                </div>

                <h2 className="fw-bold text-brown text-center m-0">Sign in</h2>
                <div>
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder=""
                        value={user.email}
                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                    />
                </div>
                <div>
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        id="password"
                        placeholder=""
                        value={user.password}
                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                    />
                </div>
                <button type="submit" className="btn btn-brown">
                    Login
                </button>
                <p className="text-center m-0">Don&apos;t have an account?<Link className="text-brown" href={'/register'}>Register</Link></p>
            </form>
        </div>
    );
}