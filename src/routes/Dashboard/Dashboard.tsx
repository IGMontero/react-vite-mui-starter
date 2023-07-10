import { Api, GitHub } from '@mui/icons-material'
import { Box, Button, Stack, Container, Typography } from '@mui/material'
import { usePageEffect } from '../../core/page.js'

import { useState } from 'react'
import products from '../../_mock/products.js'
import ShopProductList from '../../components/products/ShopProductList.js'

export default function Dashboard(): JSX.Element {
  usePageEffect({ title: 'React App' })

  const [openFilter, setOpenFilter] = useState(false)

  const handleOpenFilter = () => {
    setOpenFilter(true)
  }

  const handleCloseFilter = () => {
    setOpenFilter(false)
  }

  return (
    <Container sx={{ py: '20vh' }} maxWidth="lg">
      <Typography sx={{ mb: 2 }} variant="h1" align="center">
        Welcome to our app!
      </Typography>

      <Typography sx={{ mb: 4 }} variant="h3" align="center">
        Lorem ipsum.
      </Typography>

      <Typography variant="h4" sx={{ mb: 5 }}>
        Products
      </Typography>

      {/* <Stack
        direction="row"
        flexWrap="wrap-reverse"
        alignItems="center"
        justifyContent="flex-end"
        sx={{ mb: 5 }}
      >
        <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
          <ProductFilterSidebar
            openFilter={openFilter}
            onOpenFilter={handleOpenFilter}
            onCloseFilter={handleCloseFilter}
          />
          <ProductSort />
        </Stack>
      </Stack> */}

      <ShopProductList loading={false} products={products} />
      {/* <ProductCartWidget /> */}
    </Container>
  )
}
