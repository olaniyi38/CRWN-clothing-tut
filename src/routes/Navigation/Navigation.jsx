import {useContext} from 'react'
import { Link, Outlet } from "react-router-dom"
import {ReactComponent as CrwnLogo} from  '../../assets/crown.svg'
import CartDropDown from '../../components/cart-dropdown/CartDropDown'
import CartIcon from '../../components/cart-icon/CartIcon'
import { CartContext } from '../../contexts/cart.context'

import { UserContext } from '../../contexts/user.context'

import {signOutUser} from '../../utils/firebase/firebase.utils'

import './navigation.styles.scss'

const Navigation = () => {

  const { currentUser} = useContext(UserContext)
  const {isActive} = useContext(CartContext)
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