import { Container, Typography } from '@mui/material'
import { usePageEffect } from '../../core/page.js'
import _ from 'lodash'

import { useState } from 'react'
import ShopProductList from '../../components/products/ShopProductList.js'
import medicines from '../../_mock/medicines.js'
import { useCurrentUser } from '../../core/auth.js'

export default function Dashboard(): JSX.Element {
  usePageEffect({ title: 'React App' })

  const me = useCurrentUser()

  const [openFilter, setOpenFilter] = useState(false)

  const handleOpenFilter = () => {
    setOpenFilter(true)
  }

  const handleCloseFilter = () => {
    setOpenFilter(false)
  }

  return (
    <Container sx={{ py: '15vh' }} maxWidth="lg">
      <Typography sx={{ mb: 2 }} variant="h1" align="center">
        Welcome back
        {me?.displayName && `, ${_.capitalize(me.displayName.split(' ')[0])}`}!
      </Typography>

      <Typography sx={{ mb: 4 }} variant="h3" align="center">
        Get a massive discount on the following products:
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

      <ShopProductList loading={false} products={medicines} />
      {/* <ProductCartWidget /> */}
    </Container>
  )
}
