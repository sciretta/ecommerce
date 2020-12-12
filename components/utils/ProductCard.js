import {useState} from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Typography from '@material-ui/core/Typography'
import Chip from '@material-ui/core/Chip'
import Grid from '@material-ui/core/Grid'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import {Image} from 'cloudinary-react'

import {useDispatch} from 'Store'

import useStyles from './Styles'


export default function ProductCard(props) {
	const {img,tags} = props
  const classes = useStyles()
  return (
    <Grid item>
      <Card className={classes.card}>
      <CardActionArea className={classes.action}>
        <Image
          cloudName="dudyt4apn" 
          publicId={img}
          className={classes.media}
        />
      </CardActionArea>
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
              justify="center"
              spacing={1}
            >
              <Carting {...props}/>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </Grid>
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
	console.log(props)

  const handleAdd = () => dispatch({type:'ADD_CART',newProduct:props,cantidad:factor})

  return(
    <ButtonGroup disableElevation variant="outlined" color="primary">
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
      <Button size="small" onClick={handleAdd}>
        <ShoppingCartIcon 
          fontSize="small"
        />
      </Button>
    </ButtonGroup>
  )
}