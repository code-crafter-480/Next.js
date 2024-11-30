"use client"
import {useEffect, useState} from 'react'

export default function Page () {

    const [product, setProduct] = useState([])

    useEffect( () => {
        async function fetchData() {
            let data = await fetch("https://dummyjson.com/products")
            data = await data.json()
            console.log(data)
            setProduct(data.products)
          }
          fetchData();
    }, [])

    return (
        <div>
            <h1>Product List</h1>
            {
                product.map((item, index) => (
                    <div key={index}>
                        <h3>Name:{item.title}, Price: {item.price} </h3>
                    </div>
                ))
            }
        </div>
    )
}