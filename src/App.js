import Navbar from "./components/navbar";
import Catergories from "./components/categories";
import Saleimg from "./components/sale";
import Topics from "./components/topics";
import Recommend from "./components/recommend";
import Product from "./components/product";
import Footer from "./components/footer";
function App(){
    return(
        <div>
            <Navbar />
  <Catergories />
  <Saleimg />
  <Recommend />
  <Topics />
  <Product />
  <Footer />
        </div>
    )
}
export default App