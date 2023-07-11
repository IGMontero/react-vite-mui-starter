import { type PaletteOptions } from '@mui/material/styles'

export const light: PaletteOptions = {
  mode: 'light',

  primary: {
    main: '#C29147'
  },

  background: {
    default: 'rgb(240,242,245)'
  },

  example: {
    primary: '#49b4ff',
    secondary: '#ef3054'
  }
}

export const dark: PaletteOptions = {
  mode: 'dark',

  primary: {
    main: '#C29147'
  },

  background: {
    default: '#272727'
  },

  example: {
    primary: '#49b4ff',
    secondary: '#ef3054'
  }
}

export default { light, dark }

/**
 * Append custom variables to the palette object.
 * https://mui.com/material-ui/customization/theming/#custom-variables
 */
declare module '@mui/material/styles' {
  interface Palette {
    example: {
      primary: string
      secondary: string
    }
  }

  interface PaletteOptions {
    example: {
      primary: string
      secondary: string
    }
  }
}
