import {useState} from 'react'
import Grid from '@material-ui/core/Grid'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import withWidth, { isWidthDown } from '@material-ui/core/withWidth'

import {useDispatch} from 'Store'

import {Image} from 'cloudinary-react'

import useStyles from './Styles'

function ProductView(props) {
  const classes = useStyles()
  let cols = 1

  if (isWidthDown('md', props.width)) {
    cols = 2
  }

  return(
    <Grid 
      container
      alignItems="center"
      direction="row"
    >
      <Grid  
        sm={12} md={12} lg={12}
        justify="center"
      >
        <Typography variant="h1" className={classes.textAlign}>
          {props.name}
        </Typography>
      </Grid>
      <Grid 
        item 
        sm={12} md={12} lg={12} 
        container={cols===2?true:false} 
        justify="center"
      >
        <GridList cols={2} cellHeight={400}>
          <GridListTile cols={cols}>
            <Grid 
              container={cols===2?true:false} 
              justify="center"
            >
              <Image
                className={classes.media}
                cloudName="dudyt4apn" 
                publicId={props.src}
              />
            </Grid>
          </GridListTile>
          <GridListTile cols={cols}>
            <Grid 
              style={{height:'100%'}}
              container 
              direction="column"
              justify="space-between"
              alignItems="space-between"
            >
              <Grid item>
                {props.tags && props.tags.map(tag=>(
                  <Typography variant="h6" className={classes.textAlign}>
                    • {tag}
                  </Typography>
                ))}
              </Grid>
              <Grid item>
                <Typography variant="h3" className={classes.textAlign}>
                  ${props.prize}
                </Typography>
              </Grid>
              <Grid item container justify="center">
                <CartButton 
                  cart={{
                    id:props._id,
                    img:props.src,
                    tags:props.tags,
                    prize:props.prize
                  }}
                />
              </Grid>
            </Grid>
          </GridListTile>
        </GridList>
      </Grid>
    </Grid>
  )
}

function CartButton({cart}){
  const dispatch = useDispatch()
  const handleAdd = () => dispatch({type:'ADD_CART',newProduct:cart,cantidad:1})
  return(
    <Button
      variant="contained"
      color="secondary"
      size="large"
      startIcon={<ShoppingCartIcon />}
      onClick={handleAdd}
    >
      Add Cart
    </Button>
  )
}

export default withWidth()(ProductView)
