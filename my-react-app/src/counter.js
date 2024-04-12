
import React, { useState } from 'react';

function Counter() {
    let [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>Counter Application</h1>
            <h4>Count: {count}</h4>
            <button onClick={increment}>Increment</button>
        </div>
    );
}

export default Counter;
