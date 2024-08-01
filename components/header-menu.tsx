import { getCategories } from "../lib/data"

type Categories = {}

export const getServerSideProps = async () => {
  const data = await getCategories()
  return { props: { data } }
}

export default function HeaderMenu({ data }) {
  console.log(data)
  return <div>HeaderMenu</div>
}
