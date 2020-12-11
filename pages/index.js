import Grid from '@material-ui/core/Grid'

import useGetProducts from 'hooks/useGetProducts'

import StartLayout from 'layouts/StartLayout'
import ProductCard from 'components/utils/ProductCard'

export default function Index() {
  const { products } = useGetProducts('observer')
  return (
    <StartLayout>
  	  {
        products.map(product=>(
          <ProductCard 
            img={product.src}
            tags={product.tags}
          />
        ))
      }
    </StartLayout>
  )
}
