
import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Fake(){
const [loading, setLoading] = useState(false)
const [data, setData] = useState(null)

useEffect(() => {
    setLoading(true)

    const getData = async () =>{
        try {
            //Melakukan Axios POST ke backend pada endpoint /login
            const response = await axios.get(`https://api.escuelajs.co/api/v1/products`)
            const arr = response.data
            console.log(arr)
            setData(arr)
            setLoading(false)
    
            
            } catch (error) {
            // jika gagal, tampilkan alert 'Login Gagal'
            alert(error.response.data.error);
            }  
    }

    getData()

}, [])

return (  
    <section>
    <h1>Fake Shop API response:</h1>
    {loading && "Loading..."}
    {!!data && data.length > 0 ? data.map((product) => {
        return(
            <article key={product.id}>
            <h2>title: {product.title}</h2>
            <p>id: {product.id}</p>
            <p>description: {product.description}</p>
            <p>price: {product.price}</p>
            <img src={product.images[0]}></img>
            <img src={product.images[1]}></img>
            <img src={product.images[2]}></img>
            <h3>category name: {product.category.name}</h3>
            <p>category id: {product.category.name}</p>
            <p>category image: </p> <img src={product.category.image} alt='category' />
            </article>

        )   
        }):(<p>API did not provided any product, try again.</p>)
    }
    </section>
)
}

export default Fake