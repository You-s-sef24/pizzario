"use client";

import '../globals.css';
import { menu } from "@/app/data/menu";
import { useContext, useState } from "react";
import { CartContext } from "../Contexts/CartContext";
import Link from 'next/link';

export default function ItemDetails({ id }) {
    const item = menu.find((item) => item.id.toString() === id);
    const { cart, setCart } = useContext(CartContext);

    const [itemToAdd, setItemToAdd] = useState({
        id: item ? item.id : null,
        name: item ? item.name : "",
        image: item ? item.image : "",
        size: item && item.category === "Pizza" ? item.sizes[0].name : "",
        price: item && item.category === "Pizza" ? item.sizes[0].price : item ? item.price : 0,
        quantity: 1,
    });

    if (!item) {
        return <div>Item not found</div>;
    }

    const renderIngredients = item.ingredients.map((ingredient, index) => (
        <span key={index} className="badge bg-brown me-2 mb-2">{ingredient}</span>
    ));
    let renderSizes = null;
    if (item.category === "Pizza") {
        renderSizes = item.sizes.map((size, index) => (
            <button key={index} className={`btn ${itemToAdd.size === size.name ? "btn-brown" : "btn-outline-brown"} me-2`} onClick={() => {
                setItemToAdd({
                    ...itemToAdd,
                    size: size.name,
                    price: size.price,
                });
            }}>{size.name}</button>
        ));
    }

    function handleAdd(customItem = null) {
        const product = customItem || itemToAdd;

        const existingItemIndex = cart.findIndex(cartItem =>
            cartItem.id === product.id && cartItem.size === (product.size || "")
        );

        let newCart = [...cart];
        if (existingItemIndex >= 0) {
            newCart[existingItemIndex].quantity += 1;
        } else {
            newCart.push({
                ...product,
                size: product.size || "",
                quantity: 1
            });
        }
        setCart(newCart);
    }


    const renderItems = menu.map((item) => {
        if (item.category === "Drink" || item.category === "Salad") {
            return (
                <div className="card" key={item.id}>
                    <img className="card-img-top" src={item.image} alt={item.name} />
                    <div className="card-body d-flex flex-column">
                        <h4 className="card-title">{item.name}</h4>
                        <button className='btn btn-brown w-100 mt-auto' onClick={() => { handleAdd(item) }}>Add to Cart</button>
                    </div>
                </div>
            );
        }
    });

    return (
        <div className="container-fluid content d-flex flex-column">
            <div className="row mb-4">
                <div className='col-12'>
                    <nav className="breadcrumb">
                        <Link className="breadcrumb-item text-brown text-decoration-none" href="/">Home</Link>
                        <Link className="breadcrumb-item text-brown text-decoration-none" href={`/categories/${item.category}`}>{item.category}</Link>
                        <span className="breadcrumb-item text-dark active" aria-current="page">{item.name}</span>
                    </nav>
                </div>

                <div className="col-12 col-md-6 d-flex justify-content-center align-items-center mb-3">
                    <img src={item.image} alt={item.name} className="img-fluid rounded" />
                </div>
                <div className="col-12 col-md-6 d-flex flex-column justify-content-center text-center text-md-start mb-3">
                    <h1 className="fw-bold mb-4">{item.name}</h1>
                    <h5 className="fw-bold">Description</h5>
                    <p className="mb-4">{item.description}</p>
                    <h5 className="fw-bold">Ingredients</h5>
                    <div className="d-flex justify-content-center justify-content-md-start flex-wrap mb-4">
                        {renderIngredients}
                    </div>
                    {item.category === "Pizza" ?
                        (
                            <>
                                <h5 className="fw-bold">Size</h5>
                                <div className="d-flex justify-content-center justify-content-md-start gap-1 mb-4">
                                    {renderSizes}
                                </div>
                            </>
                        ) : (<></>)}
                    <div className="d-flex justify-content-center justify-content-md-start align-items-center gap-2">
                        <h3 className="fw-bold text-brown m-0">{itemToAdd.price.toFixed(2)} EGP</h3>
                        <button className="btn btn-brown w-25" onClick={() => { handleAdd() }}>Add to Cart</button>
                    </div>
                </div>
            </div>

            <h3>Additional Items</h3>
            <div className='d-flex overflow-auto gap-2'>
                {renderItems}
            </div>
        </div>
    );
}