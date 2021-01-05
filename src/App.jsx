import "./styles/App.css"
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Navbar from "./components/navbar/NavBar"
import Home from "./components/home/Home"
import ItemDetailContainer from "./components/global/ItemDetailContainer"
import Category from "./components/categories/Category"
import CartPage from "./components/cart/CartPage"
import Error404 from "./components/global/Error404"
function App() {
  
  return (
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
    <Route path="/cheackout">
      
    </Route>
    <Route path="*">
      <Error404/>
    </Route>
  </Switch>
</BrowserRouter>
  )
}

export default App;

/*Event loop*/