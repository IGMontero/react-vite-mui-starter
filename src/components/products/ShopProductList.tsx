import { Skeleton, Grid } from '@mui/material'
import ShopProductCard from './ShopProductCard'
import { Product, ProductList } from './Products.types'

// ----------------------------------------------------------------------

const SkeletonLoad = (
  <>
    {[...Array(12)].map((_, index) => (
      <Grid item xs={12} sm={6} md={3} key={index}>
        <Skeleton
          variant="rectangular"
          width="100%"
          sx={{ paddingTop: '115%', borderRadius: 2 }}
        />
      </Grid>
    ))}
  </>
)

export default function ShopProductList({
  products,
  loading,
  ...other
}: ProductList) {
  return (
    <Grid container spacing={3} {...other}>
      {products.map((product: Product) => (
        <Grid key={product.id} item xs={12} sm={6} md={3}>
          <ShopProductCard product={product} />
        </Grid>
      ))}

      {loading && SkeletonLoad}
    </Grid>
  )
}
