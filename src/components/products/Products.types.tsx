export type Product = {
  id: string
  name: string
  cover: string
  price: number
  colors: string[]
  status: string | undefined
  priceSale: number | null
}

export type ProductList = {
  products: Array<Product>
  loading: boolean | null | undefined
}
