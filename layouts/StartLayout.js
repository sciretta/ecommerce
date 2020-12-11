import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'

import useStyles from './Styles'

import Header from 'components/layouts/Header'

export default function StartLayout({children}) {
  const classes = useStyles()
  return(
    <div 
      className={classes.startLayout}
    > 
      <CssBaseline/>
      <Header/>
      <Container>
        <Grid 
          container
          justify="center"
          spacing={1}
        >
          {children}
        </Grid>
        <Grid 
          container
          justify="center"
        >
        </Grid>
      </Container>
    </div>
  )
}
