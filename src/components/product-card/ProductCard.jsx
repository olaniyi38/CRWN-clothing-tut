import { useContext } from 'react'

import { CartContext } from '../../contexts/cart.context'

import './product-card.scss'
import Button from '../button/Button'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({product, sectionName}) => {
    const {name, imageUrl, price, id } = product

    const { addItemToCart } = useContext(CartContext)

    const addProductToCart = () =>{ 
      addItemToCart(product)
    }

    const navigate = useNavigate()

  const navigateToProductInfo = () => navigate(`/product/${sectionName}/${name.toLowerCase()}`)

  return (
    <div className='product-card-container'>
        <img src={imageUrl} alt={`${name}`} />
        <div className="footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>
        </div>
        <Button buttonType={'inverted'} onClick={addProductToCart}>ADD TO CART</Button>
        <Button buttonType={'inverted'} 
        style={{top:'200px'}}
        onClick={navigateToProductInfo}
        >
          SEE MORE
        </Button>
    </div>
  )
}

export default ProductCard