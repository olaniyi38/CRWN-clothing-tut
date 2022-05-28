import { useParams } from 'react-router-dom'
import { useState, useEffect, useContext} from 'react'
import './category.scss'
import { CategoriesContext } from '../../contexts/categories.context'
import ProductCard from '../../components/product-card/ProductCard'

const Category = () => {
    const { category } = useParams()
    const { categoriesMap } = useContext(CategoriesContext)
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