import { useParams } from 'react-router-dom'
import { useState, useEffect} from 'react'
import { useSelector } from 'react-redux'

import ProductCard from '../../components/product-card/ProductCard'

import './category.scss'
import { selectCategoriesMap } from '../../store/categories/categories.selectors'


const Category = () => {
    const { category } = useParams()
    const categoriesMap = useSelector(selectCategoriesMap)
    const [ products, setProducts] = useState(categoriesMap[category])
   
    useEffect(()=>{
        setProducts(categoriesMap[category])
    },[categoriesMap, category])

  return (
      <>
      <h1 style={{textTransform:'uppercase', display:'inline-block', marginLeft:'47%'}}>{category}</h1>
    <div className='category-container'>
        {products &&
            products.map((product)=>(
                <ProductCard key={product.id} sectionName={category} product={product} />
            ))
        }
   
    </div>
      </>
  )
}

export default Category