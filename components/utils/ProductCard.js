import {useState} from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Chip from '@material-ui/core/Chip'
import Grid from '@material-ui/core/Grid'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import {Image} from 'cloudinary-react'

import IconButton from '@material-ui/core/IconButton'
import ClearIcon from '@material-ui/icons/Clear'

import {useDispatch} from 'Store'

import useStyles from './Styles'


export default function ProductCard(props) {
  const classes = useStyles()
  const dispatch = useDispatch()
  return (
    <Grid item>
      <Card className={!props.cart?classes.card:classes.cartCard}>
      <CardActionArea className={classes.action}>
        <Image
          cloudName="dudyt4apn" 
          publicId={props.img}
          className={!props.cart?classes.media:classes.cartMedia}
        />
      </CardActionArea>
      {!props.cart?
        (<MainActions {...props}/>):
        (<CartingActions {...props}/>)}
      </Card>
    </Grid>
  )
}

function MainActions(props){
  const classes = useStyles()
  const {img,tags} = props
  return (
    <CardActions>
      <Grid 
        container
        spacing={1}
      >
        <Grid 
          container 
          item
          justify="center"
          spacing={1}
        >
          {tags && tags.map(tag=>(
            <Grid item key={tag}>
              <Tag tag={tag}/>
            </Grid>
          ))}
        </Grid>
        <Grid 
          container 
          item
          alignItems="center"
          justify="center"
        >
          <Carting {...props}/>
        </Grid>
      </Grid>
    </CardActions>
  )
}

function CartingActions(props){
  const classes = useStyles()
  const dispatch = useDispatch()

  const handleRemove = () => dispatch({type:'REMOVE_CART',id:props.id})

  return (
    <CardActions>
      <Grid 
        container
        alignItems="center"
        justify="center"
        direction="column"
      >
        <Grid item>
          {props.cantidad}x${props.prize}=${props.cantidad*props.prize}
        </Grid>
        <Grid item>
          <IconButton  
            size="small"
            onClick={handleRemove}
          >
            <ClearIcon fontSize="small" />
          </IconButton>
        </Grid>
      </Grid>
    </CardActions>
  )
}

function Tag({tag}){
  return (
    <Chip
      label={tag}
      clickable 
    />
  )
}

function Carting(props){
	const dispatch = useDispatch()
	const [factor, setFactor] = useState(1)

	const handleChange = ({target}) => setFactor(target.value)

  const handleAdd = () => dispatch({type:'ADD_CART',newProduct:props,cantidad:factor})

  return(
    <>
      <FormControl variant="standard">
        <Select
          value={factor}
          onChange={handleChange}
          label="Cantidad"
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={5}>5</MenuItem>
        </Select>
      </FormControl>
      <span>
        ${props.prize}
      </span>
      <Button size="small" onClick={handleAdd}>
        <ShoppingCartIcon 
          fontSize="small"
        />
      </Button>
    </>
  )
}