import CategoryPreview from "../../components/category-preview/CategoryPreview"

import './categories-preview.scss'
import { useSelector } from "react-redux"
import { selectCategoriesMap } from "../../store/categories/categories.selectors"

const CategoriesPreview = () => {
    const categoriesMap = useSelector(selectCategoriesMap)
  
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