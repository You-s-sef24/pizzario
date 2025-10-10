"use client";

import Link from 'next/link';
import '../globals.css';
import HeroSection from './HeroSection';
import { reviews } from '../data/reviews';
import { categories, menu } from '../data/menu';
import Footer from './Footer';

export default function Home() {
    const renderStars = (rating) => {
        let stars = [];
        for (let i = 0; i < rating; i++) {
            stars.push(<i key={i} className="bi bi-star-fill text-warning"></i>);
        }
        for (let i = rating; i < 5; i++) {
            stars.push(<i key={i} className="bi bi-star text-warning"></i>);
        }
        return stars;
    };

    const renderReviews = reviews.map((review) => {
        return (
            <div key={review.id} className='review border p-3 rounded shadow'>
                <div className='row align-items-center mb-2'>
                    <div className='col-1 d-flex justify-content-center'>
                        <i className="h3 bi bi-person-circle"></i>
                    </div>
                    <div className='col-10 d-flex justify-content-between align-items-center'>
                        <div className='d-flex flex-column'>
                            <h6 className='text-brown fw-bold mb-0'>{review.name}</h6>
                            <small className='text-muted'>{review.date}</small>
                        </div>
                        <div>{renderStars(review.rating)}</div>
                    </div>
                    <p className='text-wrap m-0'><i className='m-0'>&quot;{review.comment}&quot;</i></p>
                </div>
            </div>
        );
    });

    const renderCategories = categories.map((category) => {
        return (
            <Link href={`/categories/${category.name}`} className="card text-decoration-none" key={category.id}>
                <img className="card-img-top" src={category.image} alt={category.name} />
                <div className="card-body">
                    <h4 className="card-title text-center">{category.name}</h4>
                </div>
            </Link>
        );
    });

    const renderFeaturedPizzas = menu.map((item) => {
        if (item.id >= 7)
            return;
        else {
            return (
                <Link href={`/categories/${item.category}/${item.id}`} className="card text-decoration-none" key={item.id}>
                    <img className="card-img-top" src={item.image} alt={item.name} />
                    <div className="card-body justify-content-center d-flex flex-column gap-2">
                        <h4 className="card-title text-center">{item.name}</h4>
                    </div>
                </Link>
            );
        }
    });

    return (
        <div className='content'>
            {/* Hero section */}
            <HeroSection />

            {/* Featured Pizzas */}
            <div className='mt-4'>
                <p className='text-center mb-4'>Featured Pizzas</p>
                <div className='d-flex flex-wrap justify-content-center gap-2 mb-4'>
                    {renderFeaturedPizzas}
                </div>
            </div>

            {/* Categories */}
            <div>
                <p className='text-center mb-4'>Our Categories</p>
                <div className='d-flex gap-2 justify-content-center flex-wrap mb-4'>
                    {renderCategories}
                </div>
            </div>

            {/* Reviews */}
            <div>
                <p className='text-center mb-4'>From Our Customers</p>
                <div className='d-flex gap-3 flex-column mb-4 px-5'>
                    {renderReviews}
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
}