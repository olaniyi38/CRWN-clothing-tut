import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import './css/index.css'

import App from "./App";
import { UserProvider} from "./contexts/user.context";
import { CategoriesProvider } from "./contexts/categories.context";
import { CartStateProvider } from "./contexts/cart.context";


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);



root.render(
  <StrictMode>
    <BrowserRouter>
        <UserProvider>
          <CategoriesProvider>
          <CartStateProvider>
            <App />
          </CartStateProvider>
          </CategoriesProvider>
        </UserProvider>
    </BrowserRouter>
    
  </StrictMode>
);

// import react from 'react'
// import reactDom from 'react-dom'

// const Person = (props) => {
//   return react.createElement('div', {}, [
//     react.createElement('h1', {}, props.name),
//     react.createElement('p', {}, props.occupation)
//   ])
// }

// const App = () => {
//   return react.createElement('div', {}, [
//     react.createElement('h1', {
//       className: 'title'
//     }, "Hello world"),
//     react.createElement(Person, {
//       name: 'yihus',
//       occupation: 'instructor'
//     }, null)

//   ])
// }

// reactDom.render(react.createElement(App), document.getElementById('root'))