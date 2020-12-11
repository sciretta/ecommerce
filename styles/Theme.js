import { createMuiTheme } from '@material-ui/core/styles'
import blueGrey from '@material-ui/core/colors/blueGrey'
import grey from '@material-ui/core/colors/grey'

export const lightTheme = createMuiTheme({
  palette: {
  	primary:{
  		main:grey[400]
  	},
    secondary:{
      main:grey[900]
    },
    background:{
      paper:grey[800],
      default:grey[50],
      main:'rgb(20,20,20)'
    },
    text:{
      primary:grey[900]
    }
  },
  typography: {
    // h1:{
    //   fontFamily: 'Lobster, cursive'
    // }
  }
})