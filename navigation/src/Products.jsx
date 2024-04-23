import React, { useState, useEffect } from "react";
import LoadingIndicator from "./LoadingIndicator";
import ErrorIndicator from "./ErrorIndicator";
import { Link, useSearchParams } from "react-router-dom";

function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [category, setCategory] = useState('');
    const [sort, setSort] = useState('');
    const [filterData, setFilterData] = useState([]);
    const [, setSearchParams] = useSearchParams();

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
            const res = await getData(url);
            setProducts(res.data);
            setLoading(false);
        } catch (error) {
            setError(true);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products`);
    }, []);

   
    if (loading) return <LoadingIndicator />;
    if (error) return <ErrorIndicator />;

    return (
        <>
           

            <div>
                {products.map((product) => (
                    <div className="product-card" key={product.id}>
                        <img src={product.image} alt={product.title} />
                        <h2>Name: {product.title}</h2>
                        <h3>Brand: {product.brand}</h3>
                        <p>Category: {product.category}</p>
                        <p>Price: {product.price}</p>
                        
                    </div>
                ))}
            </div>
        </>
    );
}

export default Products;