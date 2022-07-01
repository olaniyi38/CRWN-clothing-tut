import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { createUserDocumentFromAuth,onAuthStateChangedListener } from './utils/firebase/firebase.utils';
import { setCurrentUser } from './store/user/user.actions';


import Home from './routes/home/Home';
import Navigation from './routes/Navigation/Navigation'
import Authentication from './routes/authentication/Authentication';
import Shop from './routes/shop/Shop';
import Checkout from './routes/checkout/CheckOut';

const App = () => {
  
  const dispatch = useDispatch()

  useEffect(()=>{
    const subscribe = onAuthStateChangedListener((user)=>{
      user && createUserDocumentFromAuth(user)

      dispatch(setCurrentUser(user))
     })
  
     return subscribe
   
  }, [])

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
