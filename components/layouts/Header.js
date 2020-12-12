import { useState } from 'react'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import InputBase from '@material-ui/core/InputBase'
import Badge from '@material-ui/core/Badge'
import IconButton from '@material-ui/core/IconButton'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

import {useStore} from 'Store'

import useStyles from './Styles'

export default function Header() {
  const classes = useStyles()
  const {cart} = useStore()
  let total = 0
  cart.map(item=>{
    total = total + Object.values(item)[0].cantidad
  })

  return(
    <AppBar position="static" className={classes.appbar}>
      <Toolbar className={classes.toolbar}>
        <Grid 
          container
          justify="space-between"
          alignItems="center"
        >
          <Grid item>
            <Logo/>
          </Grid>
          <Grid item>
            <IconButton>
              <Badge badgeContent={total} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

function Logo(){
  return(
    <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
      <Button 
        variant="text" 
        style={{textTransform:'none'}}
      >
        <Typography 
          color="textPrimary" 
          variant="h4"
        >
          eCommerce
        </Typography>
      </Button>
    </ButtonGroup> 
  )
}

// function Search(){
//   const classes = useStyles()
//   const dispatch = useDispatch()
//   const [tag,setTag] = useState('')

//   const handleClick = ({key}) => (key==='Enter')?dispatch({type:'ADD_TAG',newTag:tag}):null

//   const handleInput = ({target}) => setTag(target.value)

//   return(
//     <div 
//       className={classes.search} 
//       onKeyPress={handleClick}
//     >
//       <div className={classes.searchIcon}>
//         #
//       </div>
//       <InputBase
//         onChange={handleInput}
//         value={tag}
//         placeholder="Search…"
//         classes={{
//           root: classes.inputRoot,
//           input: classes.inputInput,
//         }}
//         inputProps={{ 'aria-label': 'search' }}
//       />
//     </div>
//   )
// }
