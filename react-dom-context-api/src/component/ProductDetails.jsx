import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LoadingIndicator from './LoadingIndicator';
import ErrorIndicator from "./ErrorIndicator";

function ProductDetails() {
    const [user, setProduct] = useState({});
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
        fetchData(`https://reqres.in/api/users/${id}`);
    }, [id]); 

    if (loading) return <LoadingIndicator />;
    if (error) return <ErrorIndicator />;
console.log(user)
    return (
        <>
            <h1>Product Details</h1>
            <div className="product-card" key={user.id}>
                <div key={user.id}>
                <img src={user.avatar} alt="" />
                <h2>{user.first_name} {user.last_name}</h2>
                <p>{user.email}</p>
           </div>
            </div>
        </>
    );
}

export default ProductDetails;
