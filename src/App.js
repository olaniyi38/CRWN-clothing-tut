import { Route, Routes} from "react-router-dom"
import Authentication from "./routes/authentication/Authentication"
import CheckOut from "./routes/checkout/CheckOut"
import Home from "./routes/home/Home"
import Navigation from "./routes/Navigation/Navigation"
import Product from "./routes/product/Product"
import Shop from "./routes/shop/Shop"




const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Navigation />}>
           <Route index element={<Home />} />
           <Route path="shop/*" element={<Shop />} /> 
           <Route path="auth" element={<Authentication />} />
           <Route path="checkout" element={<CheckOut />} />
           <Route path="product/:sectionName/:productName" element={<Product />} />
        </Route>

      </Routes>

  )
}

export default App