import { useState } from 'react'
import { useRouter } from 'next/router'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Badge from '@material-ui/core/Badge'
import IconButton from '@material-ui/core/IconButton'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

import clsx from 'clsx'

import {useStore} from 'Store'

import useStyles from './Styles'

export default function Header({open,onOpen}) {
  const classes = useStyles()
  const {cart} = useStore()
  let total = 0
  cart.map(item=>{
    total = total + Object.values(item)[0].cantidad
  })

  return(
    <AppBar 
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}>
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
            <IconButton 
              className={clsx(open && classes.hide)} 
              onClick={onOpen}
            >
              <Badge badgeContent={total} color="secondary" showZero>
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
  const router = useRouter()
  const handleClick = () => {
    router.push('/')
  }
  return(
    <ButtonGroup variant="text" color="primary">
      <Button 
        onClick={handleClick}
        variant="text" 
        style={{textTransform:'none'}}
      >
        <Typography 
          color="textPrimary" 
          variant="h2"
        >
          eCommerce
        </Typography>
      </Button>
    </ButtonGroup> 
  )
}
