import IProduct from "./Product"

export default interface IProducts {
  products: IProduct[]
  isLoading: boolean
  error: string | null
}
