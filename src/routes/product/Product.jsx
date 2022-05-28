import { useContext } from 'react'
import { useParams } from 'react-router-dom'



import Button from '../../components/button/Button'
import { CategoriesContext } from '../../contexts/categories.context'

import './product.scss'

const Product = () => {

  const { productName,sectionName } = useParams()

  const { categoriesMap } = useContext(CategoriesContext)

  const productToShow = categoriesMap[sectionName].find((product)=>{
      return productName.toLowerCase() === product.name.toLowerCase()
  })

  console.log(categoriesMap);
 

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