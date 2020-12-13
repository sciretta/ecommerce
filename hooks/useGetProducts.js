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
      const data = res.data.map(item=>({
        id:item._id,
        img:item.src,
        tags:item.tags,
        prize:Number(item.prize)
      }))
    	setProducts(data)
    })
    
	},[page])
	
	return {products}
}