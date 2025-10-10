"use client";

import { useContext, useEffect, useState } from "react";
import { UsersContext } from "../Contexts/UsersContext";
import { useRouter } from "next/navigation";

export default function Settings() {
    const { isLoggedIn, loggedInUser, setLoggedInUser } = useContext(UsersContext);
    const [info, setInfo] = useState({
        firstName: loggedInUser?.firstName,
        lastName: loggedInUser?.lastName,
        phone: loggedInUser?.phone,
        password: "",
        newPass: ""
    });
    const [error, setError] = useState({
        found: null,
        msg: ""
    });
    const router = useRouter();

    useEffect(() => {
        if (!isLoggedIn) {
            router.push('/');
        }
    }, [isLoggedIn, router]);

    function handleSubmit(e) {
        e.preventDefault();
        if (info.firstName === '' || info.lastName === '' || info.phone === '') {
            setError({ ...error, found: true, msg: "Please fill empty fields" })
            return;
        }
        setLoggedInUser({ ...loggedInUser, firstName: info.firstName, lastName: info.lastName, phone: info.phone });
    }

    function handleChangePass(e) {
        e.preventDefault();
        if (info.password === "" || info.newPass === "") {
            setError({ ...error, found: true, msg: "Please fill empty fields" })
            return;
        }
        if (info.password !== loggedInUser.password) {
            setError({ ...error, found: true, msg: "Wrong Password" })
            return;
        }
        if (info.password === loggedInUser.password && info.newPass.length < 8) {
            setError({ ...error, found: true, msg: "Password too short" })
            return;
        }
        if (info.password === loggedInUser.password && info.newPass.length >= 8) {
            setError({ ...error, found: false, msg: "Password Changed Successfully" })
            setLoggedInUser({ ...loggedInUser, password: info.newPass });
            setInfo({ ...info, password: '', newPass: '' });
        }
    }

    if (!isLoggedIn) {
        return null;
    }

    return (
        <div className="container content">
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Edit Information
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <form className="accordion-body" onSubmit={(e) => {
                            handleSubmit(e);
                        }}>
                            {error.found ? (
                                <div className="alert alert-danger alert-dismissible fade show" role="alert">
                                    <button
                                        type="button"
                                        className="btn-close"
                                        aria-label="Close"
                                        onClick={() => { setError({ ...error, found: false }) }}
                                    ></button>
                                    <strong>{error.msg}</strong>
                                </div>
                            ) : ("")
                            }

                            <div className="d-flex gap-1 mb-2">
                                <div>
                                    <label htmlFor="" className="form-label">First name</label>
                                    <input type="text" className="form-control" id="" value={info.firstName} required onChange={(e) => {
                                        setInfo({ ...info, firstName: e.target.value });
                                    }} />
                                </div>
                                <div>
                                    <label htmlFor="" className="form-label">Last name</label>
                                    <input type="text" className="form-control" id="" value={info.lastName} required onChange={(e) => {
                                        setInfo({ ...info, lastName: e.target.value });
                                    }} />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="" className="form-label">Phone number</label>
                                <input type="tel" className="form-control" id="" value={info.phone} pattern="[0-9]{11}" required onChange={(e) => {
                                    setInfo({ ...info, phone: e.target.value });
                                }} />
                            </div>
                            <button type="submit" className="d-flex btn btn-outline-brown mt-2 ms-auto" disabled={info.firstName === loggedInUser.firstName && info.lastName === loggedInUser.lastName && info.phone === loggedInUser.phone}>Save Changes</button>
                        </form>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                            Change Password
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <form className="accordion-body" onSubmit={(e) => {
                            handleChangePass(e);
                        }}>
                            {error.found !== null ? (
                                <div className={`alert ${error.found ? 'alert-danger' : 'alert-success'} alert-dismissible fade show`} role="alert">
                                    <button
                                        type="button"
                                        className="btn-close"
                                        aria-label="Close"
                                        onClick={() => { setError({ ...error, found: null }) }}
                                    ></button>
                                    <strong>{error.msg}</strong>
                                </div>
                            ) : ("")
                            }

                            <div className="d-flex gap-1">
                                <div>
                                    <label htmlFor="" className="form-label">Old Password</label>
                                    <input type="password" className="form-control" id="" value={info.password} required onChange={(e) => {
                                        setInfo({ ...info, password: e.target.value });
                                    }} />
                                </div>
                                <div>
                                    <label htmlFor="" className="form-label">New Password</label>
                                    <input type="password" className="form-control" id="" value={info.newPass} required onChange={(e) => {
                                        setInfo({ ...info, newPass: e.target.value });
                                    }} />
                                </div>
                            </div>
                            <button type="submit" className="d-flex btn btn-outline-brown mt-2 ms-auto" disabled={info.password === '' || info.newPass === ''}>Save Changes</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}