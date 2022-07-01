
import { Link, Outlet } from "react-router-dom"
import { useSelector } from 'react-redux'


import { selectCurrentUser } from '../../store/user/user.selector'
import { selectIsCartOpen } from '../../store/cart/cart.selector'


import CartDropDown from '../../components/cart-dropdown/CartDropDown'
import CartIcon from '../../components/cart-icon/CartIcon'

import { signOutUser } from '../../utils/firebase/firebase.utils'


import {ReactComponent as CrwnLogo} from  '../../assets/crown.svg'
import './navigation.styles.scss'

const Navigation = () => {

  const currentUser = useSelector(selectCurrentUser)
 
  const isActive = useSelector(selectIsCartOpen)
  
  const signOutHandler = async () => {
   await signOutUser()
  }
   
  return (
    <>
        <nav className="navigation">
            <Link to="/" className="logo-container">
            <CrwnLogo className="logo" />
            </Link>
            <div className="nav-links-container">
                <Link className="nav-link" to='/shop'>
                SHOP
                </Link>
                {
                  currentUser ?
                  <span className="nav-link" onClick={signOutHandler}>
                  SIGN-OUT
                  </span> :
                  <Link className="nav-link" to='/auth'>
                  SIGN-IN
                  </Link>
                }
                <CartIcon />
            </div>
                { isActive && <CartDropDown /> }
        </nav>
        <Outlet />
    </>

  )
}

export default Navigation