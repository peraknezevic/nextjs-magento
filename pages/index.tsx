import { Category } from "../lib/types"
import Header from "./components/header"
import client from "../lib/apollo-client"
import { gql } from "@apollo/client"
import type {
  InferGetServerSidePropsType,
  GetServerSideProps,
  GetStaticProps,
} from "next"

export const getStaticProps = (async (context) => {
  const { data } = await client.query({
    query: gql`
      query CategoriesList {
        categories(filters: { ids: { eq: "2" } }) {
          items {
            uid
            name
            url_path
            children {
              uid
              name
              url_path
              children {
                uid
                name
                url_path
              }
            }
          }
        }
      }
    `,
  })

  return {
    props: {
      categories: data.categories.items[0].children,
    },
  }
}) satisfies GetStaticProps<{
  categories: Category[]
}>

// export const getServerSideProps = (async () => {
//   const { data } = await client.query({
//     query: gql`
//       query CategoriesList {
//         categories(filters: { ids: { eq: "2" } }) {
//           items {
//             uid
//             name
//             url_path
//             children {
//               uid
//               name
//               url_path
//               children {
//                 uid
//                 name
//                 url_path
//               }
//             }
//           }
//         }
//       }
//     `,
//   })

//   return {
//     props: {
//       categories: data.categories.items[0].children,
//     },
//   }
// }) satisfies GetServerSideProps<{ categories: Category[] }>

export default function Home({ categories }: { categories: Category[] }) {
  return (
    <main>
      <Header categories={categories} />
      <div className="hero">
        <h1>New Tires For Sale Online</h1>
      </div>
    </main>
  )
}
