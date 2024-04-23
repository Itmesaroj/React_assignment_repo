import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LoadingIndicator from './LoadingIndicator';
import ErrorIndicator from "./ErrorIndicator";

function ProductDetails() {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const { id } = useParams();

    async function getData(url) {
        try {
            let response = await fetch(url);
            return await response.json();
        } catch (error) {
            console.log(error);
        }
    }

    async function fetchData(url) {
        setLoading(true);
        try {
            const apiResponse = await getData(url);
            setProduct(apiResponse.data);
            setLoading(false);
        } catch (error) {
            setError(true);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products/${id}`);
    }, [id]); 

    if (loading) return <LoadingIndicator />;
    if (error) return <ErrorIndicator />;

    return (
        <>
            <h1>Product Details</h1>
            <div className="product-card" key={product.id}>
                <img src={product.image} alt={product.title} />
                <h2>Name: {product.title}</h2>
                <h3>Brand: {product.brand}</h3>
                <p>Category: {product.category}</p>
                <p>Price: {product.price}</p>
            </div>
        </>
    );
}

export default ProductDetails;
