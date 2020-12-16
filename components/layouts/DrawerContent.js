import {useState} from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import WhatsAppIcon from '@material-ui/icons/WhatsApp'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'

import useStyles from './Styles'
import {useStore} from 'Store'

import ProductCard from 'components/utils/ProductCard'

export default function DrawerContent() {
  const {cart} = useStore()
  
  return (
    <Grid 
      container
      alignItems="center"
      direction="column"
    >
      <Grid item>
        <ContactButton/>
      </Grid>
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
  )
}

function ContactButton(){
  const classes = useStyles()
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return(
    <>
      <Button
        variant="contained"
        className={classes.whatsapp}
        size="large"
        startIcon={<WhatsAppIcon />}
        style={{textTransform:'none'}}
        onClick={handleOpen}
      >
        Enviar Carrito
      </Button>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <div className={classes.paper}>modal</div>
      </Modal>
    </>
  )
}
