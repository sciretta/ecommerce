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
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'

import {Image} from 'cloudinary-react'

import useStyles from './Styles'


export default function ProductCard({img,tags}) {
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
              <Carting/>
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

function Carting(){
  return(
    <ButtonGroup disableElevation variant="outlined" color="primary">
      <Button size="small"><AddIcon fontSize="small"/></Button>
      <Button size="small"><RemoveIcon fontSize="small"/></Button>
    </ButtonGroup>
  )
}