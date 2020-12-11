import { useState, useEffect } from 'react'

export default function useGetProducts(observer){
	const [products,setProducts] = useState([])
	const [page,setPage] = useState(1)

	useEffect(()=>{
    if(typeof page !== 'number')return

  	fetch('/api/getproducts',{
    	method:'GET',
    	headers: {
        'Content-Type': 'application/json',
        'Page-Request': page
      }
    })
    .then(res=>res.json())
    .then(res=>{
    	setProducts(res.data)
    })
    
	},[page])
	
	return {products}
}