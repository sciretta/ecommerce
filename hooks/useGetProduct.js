import { useState, useEffect } from 'react'

export default function useGetProducts(productId){
  const [product,setProduct] = useState({})

	useEffect(()=>{
    if(productId === undefined)return

  	fetch('/api/getproduct',{
    	method:'GET',
    	headers: {
        'Content-Type': 'application/json',
        'Product-Id': productId
      }
    })
    .then(res=>res.json())
    .then(res=>{
    	setProduct(res.data)
    })
    
	},[productId])
	
	return {product}
}