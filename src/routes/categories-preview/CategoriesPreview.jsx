import { useContext } from "react"

import { CategoriesContext } from "../../contexts/categories.context"
import CategoryPreview from "../../components/category-preview/CategoryPreview"

import './categories-preview.scss'

const CategoriesPreview = () => {
    const { categoriesMap } = useContext(CategoriesContext)
  return (
  <>
    {
      Object.keys(categoriesMap).map((title, index)=> {
       const products = categoriesMap[title]
      return (
        <>
         <CategoryPreview key={index} title={title} items={products} />
       </>
       )
     })
       }

    </>
  )
}

export default CategoriesPreview