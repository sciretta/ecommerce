import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
	//product card
  card: {
    width: 230
  },
  action:{
  	display:'flex',
  	justify:'center',
  	alignItems:'center'
  },
  media:{
    height:300
  },
  icon:{
    color:theme.palette.text.secondary
  },
  delete:{
    color:theme.palette.text.danger
  },
  //product card ===>cart
  cartCard: {
    marginTop:10,
    width: 190
  },
  cartMedia:{
    height:230
  }
}))

export default useStyles