import cloudinary from 'server/cloudinary.config'
import mongoDB from 'server/mongoDB.config'
import Product from 'server/models/Product'

mongoDB()

//method POST
export const uploadProduct = async (req,res) => {
	try{
    const {img,tags,name} = req.body

    const {public_id} = await cloudinary
		  .uploader
		  .upload(img,{
		  	upload_preset:'shop'
	    })

	  const {length} = await Product.find({},{page:1})
    
	  const currPage = Math.floor(length/20)+1

	  const newProduct = new Product({
	  	src:public_id,
	  	page:currPage,
	  	name,
	  	tags
	  })

	  const productSaved = await newProduct.save()

	  return res.status(200).json({
	  	succes:true,
	  	message:'Image uploaded successfully.',
	  	data:productSaved
	  })
	}catch(err){
		return res.status(500).json({error:err.message})
	}
}

//method GET
export const getProducts = async(req,res) => {
	try{
		const page = Number(req.headers['page-request'])

    const products = await Product.find({page},{src:1,tags:1})

		return res.status(200).json({
			succes:true,
			message:`Page ${page} sended.`,
			data:products
		})
	}catch(err){
		console.error(err)
		return res.status(500).json({error:err.message})
	}
}