"use client";

import { menu } from "@/app/data/menu";
import Link from "next/link";

export default function CategoryPage({ params }) {
    const { category } = params;

    const renderItems = menu.map((item) => {
        if (item.category === category) {
            return (
                <Link href={`/categories/${item.category}/${item.id}`} className="card text-decoration-none" key={item.id}>
                    <img className="card-img-top" src={item.image} alt={item.name} />
                    <div className="card-body justify-content-center d-flex flex-column gap-2">
                        <h4 className="card-title">{item.name}</h4>
                    </div>
                </Link>
            );
        }
    });

    return (
        <div className="container-fluid content">
            <div className='col-12'>
                <nav className="breadcrumb">
                    <Link className="breadcrumb-item text-brown text-decoration-none" href="/">Home</Link>
                    <span className="breadcrumb-item text-dark active" aria-current="page">{category}</span>
                </nav>
            </div>

            <h1 className="mb-4">{category}s</h1>
            <div className="d-flex justify-content-center flex-wrap gap-2">
                {renderItems}
            </div>
        </div>
    );
}