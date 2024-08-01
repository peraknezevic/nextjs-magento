import { API_URL } from "./const"
import axios from "axios"

export const getCategories = () => {
  return axios({
    url: API_URL,
    method: "post",
    data: {
      query: `
            query CategoriesList {
                categoryList(filters: {ids: {in: ["2"]}}) {
                    children_count
                    children {
                    id
                    level
                    name
                    path
                    url_path
                    url_key
                    image
                    description
                    children {
                        id
                        level
                        name
                        path
                        url_path
                        url_key
                        image
                        description
                    }
                    }
                }
                }
            `,
    },
  }).then((res) => {
    return res.data
  })
}
