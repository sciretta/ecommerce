import {useState} from 'react'
import Grid from '@material-ui/core/Grid'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'

import useStyles from './Styles'

export default function ModalForm(props){
  const classes = useStyles()
  const {setName,setNumber} = props

  const handleName = ({target}) => setName(target.value)
  const handleNumber = ({target}) => setNumber(target.value)

  return(
    <Modal
      aria-labelledby="spring-modal-title"
      aria-describedby="spring-modal-description"
      className={classes.modal}
      open={props.open}
      onClose={props.handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500
      }}
    >
      <Grid 
        container 
        direction="column"
        justify="space-between"
        alignItems="center"
        className={classes.paper}
      >
        <Grid item>
          <TextField onChange={handleName} label="Nombre" variant="outlined" />
        </Grid>
        <Grid item>
          <TextField onChange={handleNumber} color="secondary" label="Numero" variant="outlined" />
        </Grid>
        <Grid item>
          <Typography variant="body1" color="textSecondary">
            Envianos tu carrito y te
          </Typography>
          <Typography variant="body1" color="textSecondary">
            atenderemos lo mas pronto posible.
          </Typography>
        </Grid>
        <Grid item>
          {props.ContactButton}
        </Grid>
      </Grid>
    </Modal>
  )
}
