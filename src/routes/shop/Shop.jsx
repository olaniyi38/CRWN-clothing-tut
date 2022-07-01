import SHOP_DATA from "../../shop-data"

import { useEffect } from "react"
import { useDispatch } from 'react-redux'

import { Routes, Route } from "react-router-dom"
import CategoriesPreview from "../categories-preview/CategoriesPreview"
import Category from "../category/Category"
import { setCategories} from "../../store/categories/categories.actions"

import './shop.scss'

const Shop = () => {
  const dispatch = useDispatch()
 
  useEffect(() => {
    //const getCategoriesMap = async () =>{
      const categories = SHOP_DATA
      dispatch(setCategories(categories))
    //}
    //getCategoriesMap()
  
  }, [])

  return (
      <Routes>
        <Route index element={<CategoriesPreview />} />
        <Route path="/:category" element={<Category />} />
      </Routes>
  )
}


export default Shop