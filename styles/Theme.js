import { createMuiTheme } from '@material-ui/core/styles'
import blueGrey from '@material-ui/core/colors/blueGrey'
import grey from '@material-ui/core/colors/grey'
import red from '@material-ui/core/colors/red'

export const lightTheme = createMuiTheme({
  palette: {
  	primary:{
  		main:grey[600]
  	},
    secondary:{
      main:grey[900]
    },
    background:{
      paper:grey[800],
      default:grey[50]
    },
    text:{
      primary:grey[900],
      secondary:grey[50],
      danger:red[700]
    }
  },
  typography: {
    h1:{
      // fontFamily: 'Lobster, cursive',
      fontSize:80,
      fontWeight:'bold'
    },
    h2:{
      // fontFamily: 'Lobster, cursive',
      fontSize:30,
      fontWeight:'bold'
    },
    h3:{
      // fontFamily: 'Lobster, cursive',
      fontSize:50
    }
  },
   props: {
    MuiWithWidth: {
      initialWidth: 'lg'
    }
  }
})