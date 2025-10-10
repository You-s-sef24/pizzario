// AboutUs.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../Components/Footer";

export default function AboutUs() {
    return (
        <div className="mt-5 pt-3">
            <header className="bg-brown text-white text-center py-5">
                <h1>About Us</h1>
                <p className="lead">Learn more about who we are and what we do</p>
            </header>

            <section className="bg-light py-5">
                <div className="container text-center">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <h2>Our Story</h2>
                            <p>
                                Our journey began with a simple idea — to bring people together
                                through quality products and unforgettable experiences. What
                                started as a small passion project has grown into a community
                                built on trust, creativity, and dedication.
                            </p>
                            <p>
                                Over the years, we’ve stayed true to our values of excellence
                                and innovation. Every step we take is guided by our love for
                                what we do and our commitment to those we serve.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container text-center my-5">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h2>Who We Are</h2>
                        <p>
                            Welcome to our website! We are a passionate team dedicated to
                            delivering high-quality products and services. Our mission is to
                            make life easier for our customers with innovation, reliability,
                            and care.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-light py-5">
                <div className="container text-center">
                    <h2>Our Mission</h2>
                    <p className="mt-3">
                        We aim to create solutions that inspire and empower people around
                        the world. Integrity, creativity, and customer satisfaction are at
                        the heart of everything we do.
                    </p>
                </div>
            </section>

            <Footer />
        </div>
    );
}
