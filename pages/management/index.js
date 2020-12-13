import {useState} from 'react'
import ProductCard from 'components/utils/ProductCard'

export default function Management(){
  const [fileInput,setFileInput] = useState('')
  const [previewSource,setPreviewSource] = useState('')
  const [tags,setTags] = useState([])
  const [name,setName] = useState('')
  const [prize,setPrize] = useState('')

  const handleTagLoad = () => {
    const tagInput = document.getElementById('tag-input')
    if(!tagInput)return
    setTags(oldTags=>([...oldTags,tagInput.value]))
  }

  const handleFileChange = ({target}) => {
    const file = target.files[0]
    previewFile(file)
  }

  const previewFile = file => {
   const reader = new FileReader()
   reader.readAsDataURL(file)
   reader.onloadend = () => {
     setPreviewSource(reader.result)
   }
  }

  const handleSubmitFile = e =>{
    e.preventDefault()
    if(!previewSource)return
    uploadProduct(previewSource)
  }

  const uploadProduct=(base64EncodedImage)=>{
    fetch('/api/uploadproduct',{
      method:'POST',
      body:JSON.stringify({
        img:base64EncodedImage,
        tags,
        name,
        prize
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res=>res.json())
    .then(res=>{
      setPreviewSource('')
      setTags([])
      setName('')
      setPrize('')
      console.log(res)
    })
  }

  return(
   <>
      <h1>Cargar imagen</h1>
      <div>
       <input 
          type="file"
          onChange={handleFileChange}
          value={fileInput} 
       />
       <input 
          placeholder="tags"
          type="text"
          id="tag-input"
       />
       <input 
          placeholder="name"
          type="text"
          value={name}
          onChange={({target})=>setName(target.value)}
       />
       <input 
          placeholder="prize"
          type="text"
          value={prize}
          onChange={({target})=>setPrize(target.value)}
       />
       <button onClick={handleTagLoad}>
         Load tag
       </button>
       <button onClick={handleSubmitFile}>
         Submit
       </button>
      </div>
      {previewSource && (
        <img
          style={{height:'350px'}}
          src={previewSource}
        />
      )}
      {name},{prize}
      {tags && tags.map(tag=><div>{tag}</div>)}
   </>
  )
}