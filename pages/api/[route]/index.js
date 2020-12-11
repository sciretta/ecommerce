import { 
  uploadProduct,
  getProducts
} from 'server/controllers/Products'

export default async (req, res) => {
	const { method,query:{route} } = req
  
  switch(route){
    case 'uploadproduct':
      if(method==='POST')
        return uploadProduct(req,res)
      else
        return res.status(400).json({message:'Invalid method.'}) 
      break
    case 'getproducts':
      if(method==='GET')
        return getProducts(req,res)
      else
        return res.status(400).json({message:'Invalid method.'}) 
      break
  	default:
  	  res.status(400).json({error:'Invalid route.'})
  }
}