"use client";

import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../globals.css';
import Footer from "../Components/Footer";

export default function Contact() {
    const [userInfo, setUserInfo] = useState({
        name: "",
        email: "",
        message: ""
    });

    return (
        <div className="mt-5 pt-3">
            <header className="bg-brown text-white text-center py-5">
                <h1>Contact Us</h1>
                <p className="lead">We’d love to hear from you</p>
            </header>

            <section className="container my-5">
                <div className="row g-5">
                    <div className="col-md-7">
                        <h2>Get in Touch</h2>
                        <form onSubmit={(e)=>{
                            e.preventDefault();
                            alert(`Thank you, ${userInfo.name}! Your message has been received.`);
                            setUserInfo({ name: "", email: "", message: "" });
                        }}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" className="form-control" id="name" placeholder="Enter your name" required value={userInfo.name} onChange={(e) => {
                                    setUserInfo({ ...userInfo, name: e.target.value });
                                }} />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" placeholder="Enter your email" required value={userInfo.email} onChange={(e) => {
                                    setUserInfo({ ...userInfo, email: e.target.value });
                                }} />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea className="form-control" id="message" rows="5" placeholder="Write your message here..." required value={userInfo.message} onChange={(e) => {
                                    setUserInfo({ ...userInfo, message: e.target.value });
                                }}></textarea>
                            </div>

                            <button type="submit" className="btn btn-brown px-4">Send Message</button>
                        </form>
                    </div>

                    <div className="col-md-5">
                        <h2>Contact Info</h2>
                        <ul className="list-unstyled mt-3">
                            <li className="mb-2">
                                <strong>📍 Address:</strong> 123 Main Street, Giza, Egypt
                            </li>
                            <li className="mb-2">
                                <strong>📞 Phone:</strong> +20 111 565 8096
                            </li>
                            <li className="mb-2">
                                <strong>📧 Email:</strong> ym849447@gmail.com
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
