import { useParams } from "react-router-dom"
import { useState,useEffect } from "react"
import axios from "axios";
function ProductsDetails(){
    let [data,setData]=useState([])
    let [loading,setLoading]=useState(false);
    let [error,setError]=useState(false);
    
    let {id}=useParams();
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
         <>
        <h2>Products Details</h2>
        <div>
        {data.length>0 && data.map((item)=>{
            if(item.id==id){
                return  <div key={item.id}>
                <img src={item.image} alt="zxbhcv" width={"200px"} />
                <h4>{item.title}</h4>
                <p>Categroy:-{item.category}</p>
                <p>Price:-{item.price}</p>
                <p>Description:-{item.description}</p>
                </div>
            }
        })}
        </div>
        </>
        </>
    )
}
export {ProductsDetails}