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

    useEffect(() => {
        let c = new URLSearchParams(window.location.search).get('category');
        let s = new URLSearchParams(window.location.search).get('sort');
        setCategory(c || '');
        setSort(s || '');
    }, []);

    useEffect(() => {
        let filteredData = [...products];

        if (category !== "") {
            filteredData = filteredData.filter(product => product.category === category);
        }
        if(category===""){
            filteredData = filteredData;
        }
        if (sort === "asc") {
            filteredData.sort((a, b) => a.price - b.price);
        } else if (sort === "desc") {
            filteredData.sort((a, b) => b.price - a.price);
        }

        setFilterData(filteredData);
    }, [category, sort, products]);

    const handleCategoryChange = (e) => {
        const value = e.target.value;
        if(sort!="" && value!=""){
            setSearchParams({ category: value,sort}); 
        }
        else{
            setSearchParams({ category: value}); 
        }
        
        setCategory(value); 
    };

    const handleSortChange = (e) => {
        const value = e.target.value;
        if(value!="" && category!=""){
            setSearchParams({ category: value,sort}); 
        }
        else{
            setSearchParams({ sort: value}); 
        }
        setSort(value); 
    };

    if (loading) return <LoadingIndicator />;
    if (error) return <ErrorIndicator />;

    return (
        <>
            <h1>Products List</h1>
            <select value={category} onChange={handleCategoryChange}>
                <option value="">All</option>
                <option value="men">Men</option>
                <option value="women">Women</option>
                <option value="kids">Kids</option>
                <option value="homedecor">HomeDecor</option>
            </select>

            <select value={sort} onChange={handleSortChange}>
                <option value="">---select option---</option>
                <option value="asc">Low to High Price</option>
                <option value="desc">High to Low Price</option>
            </select>

            <div>
                {filterData.map((product) => (
                    <div className="product-card" key={product.id}>
                        <img src={product.image} alt={product.title} />
                        <h2>Name: {product.title}</h2>
                        <h3>Brand: {product.brand}</h3>
                        <p>Category: {product.category}</p>
                        <p>Price: {product.price}</p>
                        <Link to={`/products/${product.id}`}>Click to view Product details</Link>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Products;
