
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './user/pages/Home';




function App() {
  return (
    <div className="App">
       <Navbar/>
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/signup" element={<Signup/>} />
              <Route path="/products" element={<Home/>} />
              <Route path="/product-details" element={<ProductDetails/>} />
              <Route path="/cart" element={<Cart/>} />
              <Route path="/checkout" element={<Checkout/>} />
              <Route path="/order" element={<Order/>} />

          </Routes>
      
       <Footer/>
    </div>
  );
}

export default App;
