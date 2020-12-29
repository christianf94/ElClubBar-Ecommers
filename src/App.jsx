import "./styles/App.css"
import Navbar from "./components/navbar/NavBar"
import Home from "./components/home/Home"
import Beers from "./components/categories/beers/Beers"
function App() {
  const showSection = (section) => {
    switch(section){
      case "HOME" : return <Home/>
      case "BEERS": return <Beers/> 
      default: return <Home/>
    }
  }
  return (
  <>
    <Navbar />
    <Home/>
    {showSection("BEERS")}
  </>
  )
}

export default App;

/*Event loop*/