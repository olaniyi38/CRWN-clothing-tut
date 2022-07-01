import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'



import Button from '../../components/button/Button'
import { selectCategoriesMap } from '../../store/categories/categories.selectors'


import './product.scss'

const Product = () => {

  const { productName,sectionName } = useParams()

  const { categoriesMap } = useSelector(selectCategoriesMap)

  const productToShow = categoriesMap[sectionName].find((product)=>{
      return productName.toLowerCase() === product.name.toLowerCase()
  })

  console.log(productToShow);

  const { name, price, imageUrl } = productToShow

  return (
    <div>
        <h1 style={{marginLeft:'12rem', textDecoration:'underline'}}>Product Info</h1>
        <div className='product-info-container'>
        <div className="image-container">
           <img src={imageUrl} alt="" />    
        </div>
        <div className="description-container">
           <div>
               <h1>{name}</h1>
               <span className='price'>${price}</span>
               <Button> ADD TO CART</Button>
           </div>
        </div>
     </div>
    </div>
  )
}

export default Product