import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
	//product card
  card: {
    width: 260,
    //height:350
  },
  action:{
  	display:'flex',
  	justify:'center',
  	alignItems:'center'
  },
  media:{
    height:300
  }
}))

export default useStyles