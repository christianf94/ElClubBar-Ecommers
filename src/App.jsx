import "./styles/App.css";
import {useState} from "react";
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Navbar from "./components/navbar/NavBar";
import Home from "./components/home/Home";
import ItemDetailContainer from "./components/global/ItemDetailContainer";
import Category from "./components/categories/Category";
import CartPage from "./components/cart/CartPage";
import Error404 from "./components/global/Error404";
import {Store} from "./store/index";

function App() {

  const [data, setData]= useState({
    items: [],
    qty: 0,
    totalPrice: 0,
  });
  
  return (
    <Store.Provider value={[data, setData]}>
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/category/:category_name?">
            <Category/>
          </Route>
          <Route path="/item/:id?">
            <ItemDetailContainer/>
          </Route>
          <Route path="/cart">
            <CartPage/>
          </Route>
          <Route path="*">
            <Error404/>
          </Route>
        </Switch>
      </BrowserRouter>
    </Store.Provider>
  )
}

export default App;

/*Event loop*/