import { fade, makeStyles, withStyles } from '@material-ui/core/styles'

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  //header
  appBarShift: {
    boxShadow:'none',
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth
  },
  appBar: {
    boxShadow:'none',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    })
  },
  hide: {
    display: 'none'
  },

  //drawer content

}))

export const buttonStyle = withStyles((theme) => ({
  root: {
    marginTop:5,
    backgroundColor: 'rgb(0,160,35)',
    '&:hover': {
      backgroundColor:'rgb(0,170,30)',
    }
  }
}))

export default useStyles