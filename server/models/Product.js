import { Schema,model,models } from 'mongoose'

delete models['Product']

const ProductSchema = new Schema({
	src:{
		type:String,
		required:true,
		unique:true
	},
	tags:[{
		type:String
	}],
	page:{
		type:Number,
		required:true,
		default:null
	},
	name:{
		type:String,
    required:true
	},
	prize:{
		type:String,
    required:true,
    default:'0'
	}
})

export default model('Product',ProductSchema)