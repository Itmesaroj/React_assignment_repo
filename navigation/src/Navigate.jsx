import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navigate() {
    const navigate = useNavigate();

    const handleProgrammaticNavigation = (path) => {
        navigate(path);
    };

    return (
        <>
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Contact">Contact</Link>
            <Link to="/Products">Products</Link>

            <div>
                <button onClick={() => handleProgrammaticNavigation('/')}>Go to Home</button>
                <button onClick={() => handleProgrammaticNavigation('/About')}>Go to About</button>
                <button onClick={() => handleProgrammaticNavigation('/Contact')}>Go to Contact</button>
                <button onClick={() => handleProgrammaticNavigation('/Products')}>Go to Products</button>
            </div>
        </>
    );
}

export default Navigate;
