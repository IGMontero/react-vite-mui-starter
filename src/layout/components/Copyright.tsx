import { Link, Typography } from '@mui/material'

export default function Copyright(props: React.ComponentProps<any>) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      sx={{ marginBottom: '1rem' }}
      {...props}
    >
      {/* {'Copyright © '} */}© {new Date().getFullYear()} - Prototype by{' '}
      <Link color="inherit" target="_blank" href="https://igmontero.com/">
        Ignacio Montero
      </Link>
      {'.'}
    </Typography>
  )
}
