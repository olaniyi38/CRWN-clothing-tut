
import './product-card.scss'
import Button from '../button/Button'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addItemToCart } from '../../store/cart/cart.actions'
import { selectCartItems } from '../../store/cart/cart.selector'

const ProductCard = ({product, sectionName}) => {

  const dispatch = useDispatch()

    const {name, imageUrl, price} = product

    const cartItems = useSelector(selectCartItems)

    const addProductToCart = () =>{ 
     dispatch(addItemToCart(cartItems, product))
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