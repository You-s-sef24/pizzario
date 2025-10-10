"use client";

import { useContext, useEffect, useState } from "react";
import { UsersContext } from "../Contexts/UsersContext";
import { useRouter } from "next/navigation";

export default function Register() {
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        phone: "",
        ordersHistory: []
    });
    const [confPass, setConfPass] = useState('');
    const [error, setError] = useState({
        found: false,
        msg: ''
    });
    const { users, setUsers, setIsLoggedIn, setLoggedInUser, isLoggedIn } = useContext(UsersContext);
    const router = useRouter();

    useEffect(() => {
        if (isLoggedIn) {
            router.push('/');
        }
    }, [isLoggedIn, router])

    function handleSubmit(e) {
        e.preventDefault();
        const found = users.find((user) => user.email === userInfo.email);

        if (userInfo.firstName === '' || userInfo.lastName === '' || userInfo.phone === '' || userInfo.email === '' || userInfo.password === '' || confPass === '') {
            setError({ ...error, found: true, msg: "Please fill empty fields" })
            return;
        }
        if (userInfo.password !== confPass) {
            setError({ ...error, found: true, msg: "Password doesn't match" })
            return;
        }
        if (userInfo.password.length < 8) {
            setError({ ...error, found: true, msg: "Password too short" })
            return;
        }
        if (found) {
            setError({ ...error, found: true, msg: "User already exists!" })
            return;
        } else {
            const newUsersList = [...users];
            newUsersList.push(userInfo);
            setUsers(newUsersList);
            setLoggedInUser(userInfo);
            setIsLoggedIn(true);
            router.push('/');
        }
    }

    if (isLoggedIn) {
        return null;
    }

    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100 pt-3">
            <form onSubmit={(e) => { handleSubmit(e) }} className="d-flex flex-column gap-3 border p-5 rounded shadow mt-5">
                {error.found === true ? (
                    <div className={`alert alert-danger alert-dismissible fade ${error.found ? 'show' : 'd-none'}`} role="alert">
                        <button
                            type="button"
                            className="btn-close"
                            aria-label="Close"
                            onClick={() => { setError({ ...error, found: false }) }}
                        ></button>
                        <strong>{error.msg}</strong>
                    </div>
                ) : ("")}

                <h2 className="fw-bold text-brown text-center m-0">Register</h2>
                <div className="d-flex gap-2">
                    <div className="w-50">
                        <label htmlFor="firstName" className="form-label">First Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="firstName"
                            id="firstName"
                            placeholder=""
                            value={userInfo.firstName}
                            onChange={(e) => setUserInfo({ ...userInfo, firstName: e.target.value })}
                        />
                    </div>
                    <div className="w-50">
                        <label htmlFor="lastName" className="form-label">Last Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="lastName"
                            id="lastName"
                            placeholder=""
                            value={userInfo.lastName}
                            onChange={(e) => setUserInfo({ ...userInfo, lastName: e.target.value })}
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <input
                        type="tel"
                        className="form-control"
                        name="phone"
                        id="phone"
                        pattern="[0-9]{11}"
                        placeholder=""
                        value={userInfo.phone}
                        onChange={(e) => setUserInfo({ ...userInfo, phone: e.target.value })}
                    />
                </div>
                <div>
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder=""
                        value={userInfo.email}
                        onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
                    />
                </div>
                <div className="d-flex gap-2">
                    <div>
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            className={`form-control`}
                            name="password"
                            id="password"
                            placeholder=""
                            value={userInfo.password}
                            onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })}
                        />
                    </div>
                    <div>
                        <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                        <input
                            type="password"
                            className={`form-control`}
                            name="confirmPassword"
                            id="confirmPassword"
                            placeholder=""
                            value={confPass}
                            onChange={(e) => setConfPass(e.target.value)}
                        />
                    </div>
                </div>
                <button type="submit" className="btn btn-brown">
                    Register
                </button>
            </form>
        </div>
    );
}