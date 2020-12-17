import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
	//product card
  card: {
    width: 235
  },
  action:{
  	display:'flex',
  	justify:'center',
  	alignItems:'center'
  },
  media:{
    height:220
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
  },

  //modal form
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #000',
    boxShadow: theme.shadows[5],
    borderRadius:4,
    padding: theme.spacing(2, 4, 3),
    
    width:'50vw',
    height:'60vh'
  },
  typography:{
    widht:50,
    border:'5px solid black'
  }
}))

export default useStyles