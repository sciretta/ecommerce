import {useState} from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
import WhatsAppIcon from '@material-ui/icons/WhatsApp'
import ModalForm from 'components/utils/ModalForm'

import useStyles, {buttonStyle} from './Styles'
import {useStore} from 'Store'

import ProductCard from 'components/utils/ProductCard'


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

export default function DrawerContent() {
  const {cart} = useStore()
  const [openModal, setOpenModal] = useState(false)
  const [name,setName] = useState('')
  const [number,setNumber] = useState('')

  const [success,setSuccess] = useState(false)
  const [error,setError] = useState(false)

  const handleOpen = () => {
    setOpenModal(true)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
  }

  const handleCloseAlert = () => {
    setSuccess(false)
    setError(false)
  }

  const handleSend = () => {
    const nameAproved = name.length>=3?true:false
    const numberAproved = number.length>=8?true:false

    if(nameAproved && numberAproved){
      fetch('/api/sendclient',{
        method:'POST',
        body:JSON.stringify({name,number,cart:cart.map(item=>Object.values(item)[0])}),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res=>res.json())
      .then(res=>{
        console.log(res)
        if(res.error){
          setError(true)
          setName('')
          setNumber('')
        }else{
          setOpenModal(false)
          setSuccess(true)
          setName('')
          setNumber('') 
        } 
      })
      .catch(err=>setError(true))
    }else{
      setError(true)
    }
  }

  return (
    <>
    <Grid 
      container
      alignItems="center"
      direction="column"
    >
      <Grid item>
        <ContactButton handleClick={handleOpen} message="Enviar Carrito"/>
      </Grid>
      <ModalForm 
        open={openModal} 
        handleClose={handleCloseModal}
        setName={setName}
        setNumber={setNumber}
        ContactButton={<ContactButton handleClick={handleSend} message="Ordenar Compra"/>}
      />
      {
        cart &&
        cart.map(item=>(
          <Grid item key={Object.values(item)[0].id}>
            <ProductCard 
              cart
              {...Object.values(item)[0]}
            />
          </Grid>
        ))
      }
    </Grid>
    <Snackbar
        anchorOrigin={{ vertical:'top', horizontal:'center' }}
        open={success}
        onClose={handleCloseAlert}
        autoHideDuration={5000}
      >
        <Alert severity="success">
          Tu orden ha sido enviada!
        </Alert>
      </Snackbar>
      <Snackbar
        anchorOrigin={{ vertical:'top', horizontal:'center' }}
        open={error}
        onClose={handleCloseAlert}
        autoHideDuration={5000}
      >
        <Alert severity="error">
          Algo ha salido mal, intenta de nuevo!
        </Alert>
      </Snackbar>
    </>
  )
}

const ColorButton = buttonStyle(Button)

function ContactButton({handleClick,message}){
  return(
    <ColorButton
      variant="contained"
      size="large"
      startIcon={<WhatsAppIcon />}
      style={{textTransform:'none',fontWeight:'700'}}
      onClick={handleClick}
    >
      {message}
    </ColorButton>
  )
}

