import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
	//product view
  media:{
    height:400,
    maxWidth:500,
    border:'1px solid black',
  	borderRadius:3
  },
  textAlign:{
  	textAlign:'center'
  },
  container:{
  	[theme.breakpoints.down('md')]: {
      width:'100%'
    }
  }
}))

export default useStyles