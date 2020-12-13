import Grid from '@material-ui/core/Grid'

import {useStore} from 'Store'

import ProductCard from 'components/utils/ProductCard'

export default function DrawerContent() {
  const {cart} = useStore()
  
  return (
    <Grid 
      container
      alignItems="center"
      direction="column"
    >
      {
        cart &&
        cart.map(item=>(
          <Grid item key={Object.values(item)[0].id}>
            <ProductCard 
              cart
              {...Object.values(item)[0]}
            />
          </Grid>
        ))
      }
    </Grid>
  )
}