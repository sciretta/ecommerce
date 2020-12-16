import Grid from '@material-ui/core/Grid'

import { useRouter } from 'next/router'
import useGetProduct from 'hooks/useGetProduct'

import StartLayout from 'layouts/StartLayout'
import ProductView from 'components/views/ProductView'

export default function Index() {
  const {query} = useRouter()
  const {product} = useGetProduct(query.productId)
  return (
    <StartLayout>
  	  <ProductView {...product}/>
    </StartLayout>
  )
}
