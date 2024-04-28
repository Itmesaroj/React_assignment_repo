import axios from "axios"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
function Products(){

let [data,setData]=useState([])
    let [loading,setLoading]=useState(false);
    let [error,setError]=useState(false);
    async function getData(url){
        try{
            let data=await axios.get(url);
            return data;
        }
      catch(error){
       setError(true);

      }
    }
    async function fetchData(url){
        setLoading(true);
        try{
            let respones=await getData(url);
            setLoading(false);
            setData(respones.data);
        }
        catch(error){
            setError(true)
            setLoading(false)
        }
    }
    useEffect(()=>{
        fetchData("http://localhost:3000/products");
    },[])

    function addData(id){
       let array=JSON.parse(localStorage.getItem("User"))||[]
       data.forEach((item)=>{
        if(item.id==id){
            array.push(item);
            localStorage.setItem("User",JSON.stringify(array));
        }
       })
    }
    if(loading){
        return (
            <div>Loading.....</div>
        )
    }
    if(error){
        return(
            <div>Error incounter in the fatch request</div>
        )
    }
    return(
        <>
        <h2>Products Details</h2>
        <div>
            {data.length>0 && data.map((item)=>
            <div key={item.id}>
                    <img src={item.image} alt="zxbhcv" width={"200px"} />
                    <h4>{item.title}</h4>
                    <p>Categroy:-{item.category}</p>    
                    <p>Price:-{item.price}</p>
                    <button onClick={()=>{
                        addData(item.id)
                    }}>Add Data</button>
                    <Link to={`${item.id}`}>Click for more details about products</Link>
            </div>
            )}
        </div>
        </>
    )
}
export {Products}