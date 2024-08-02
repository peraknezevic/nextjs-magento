export type Category = {
  __typename: string
  uid: string
  name: string
  url_path: string
  children: Category[]
}
