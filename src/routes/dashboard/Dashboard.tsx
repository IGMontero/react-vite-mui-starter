import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Typography
} from '@mui/material'
import { usePageEffect } from '../../core/page.js'
import _ from 'lodash'

import { useState } from 'react'
import { useCurrentUser } from '../../core/auth.js'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search'

export default function Dashboard(): JSX.Element {
  usePageEffect({ title: 'Dashboard' })

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
      <Typography sx={{ mb: 4 }} variant="h1" align="center">
        Welcome back
        {me?.displayName && `, ${_.capitalize(me.displayName.split(' ')[0])}`}!
      </Typography>
      {/* <Typography sx={{ mb: 4 }} variant="h3" align="center">
        Get a massive discount on the following products:
      </Typography> */}
      {/* <Typography variant="h4" sx={{ mb: 5 }}>
        Products
      </Typography> */}
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
      {/* <ShopProductList loading={false} products={medicines} /> */}
      <Box display="flex" justifyContent="center">
        <MediaCard />
      </Box>
      <Box
        alignItems="center"
        flexDirection="column"
        textAlign="center"
        sx={{ mt: 2 }}
        display="flex"
        justifyContent="center"
      >
        <Button
          startIcon={<SearchIcon />}
          variant="contained"
          size="large"
          component={Link}
          to="/search"
          sx={{ mb: 1 }}
        >
          Search Discounted Drugs
        </Button>
        <Typography display="block" variant="caption">
          Up to 80% savings!
        </Typography>
      </Box>
      {/* <ProductCartWidget /> */}
    </Container>
  )
}

function MediaCard() {
  const me = useCurrentUser()
  return (
    <Card sx={{ maxWidth: 700, width: '100%' }}>
      <CardMedia
        sx={{ height: 240 }}
        image="static/assets/images/medicines/med_1.jpg"
        title="digital card"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {me?.displayName
            ? `${_.capitalize(me.displayName.split(' ')[0])}`
            : 'Your Name'}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This is your Bax Rx digital card. Congratulations!
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  )
}
