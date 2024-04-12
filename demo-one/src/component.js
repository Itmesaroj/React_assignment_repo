import { useState,useEffect } from "react";


// Fetching Data from an API:

function FetchData(){
    let [data,setData]=useState([]);
    useEffect(()=>{
        const fetchData = async () => {
            try {
              const response = await fetch('https://jsonplaceholder.typicode.com/posts');
              const data = await response.json();
              setData(data);
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };
        fetchData();  
    },[])

    return(
        <div>
            <h2>FetchData:</h2>
            {data ? (
                <ul>
                {data.map((item) => (
                    <li key={item.id}>
                        {item.title}
                    </li>
                ))}
                </ul>
            ) : (
            <p>Loading...</p>
            )}
        </div>
    )
}


function ExternalEvents(){
    useEffect(()=>{
        let MouseMove=(event)=>{
            console.log('Mouse X:', event.clientX);
        }
        window.addEventListener('mousemove', MouseMove);
    },[])
    return <p>Move your mouse to see clientX value in console.</p>;
}

function TitleDocument(){
    let [count,setCount]=useState(0);
    useEffect(()=>{
        window.document.title=`Count:${count}`;
    },[count]); 

    return(
        <div>
            <h2>Document Title</h2>
            <p>Count: {count}</p>
            <button onClick={() => setCount((prevCount) => prevCount + 1)}>Increment Count</button>
        </div>
    )
}

export{FetchData,ExternalEvents,TitleDocument}