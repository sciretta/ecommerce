import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
	//product card
  card: {
    width: 260
  },
  action:{
  	display:'flex',
  	justify:'center',
  	alignItems:'center'
  },
  media:{
    height:300
  },
  //product card ===>cart
  cartCard: {
    marginTop:10,
    width: 170
  },
  cartMedia:{
    height:230
  }
}))

export default useStyles