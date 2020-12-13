import mongoose from 'mongoose'

export default async function connect(){
	try{
    await mongoose.connect(process.env.MONGODB_CONFIG_URI,{
    	useUnifiedTopology: true,
			useNewUrlParser:true
		})
		console.log('Conectado al cluster de mongoDB.')
	}catch(err){
    console.error(err.message)
	}
}