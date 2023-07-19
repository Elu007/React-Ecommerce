import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

const Home = () => {
    const [products, setProducts] = useState();

    useEffect(() =>{
      axios.get('/api/products/:id').then(
        response => {
          setProducts(response.data);
        }
      ).catch(error => {
        console.error(error);
      })
    },[])

    return (
        <>
            <div className='products'>
                {products?.map((products) => {
                    return (
                        <div key={products.id}>
                            <img className='img' src={products.image} alt="img" />
                            <h1>{products.name}</h1>
                        </div>
                    );
                })}
            </div>
        </>
    )
}

export default Home
