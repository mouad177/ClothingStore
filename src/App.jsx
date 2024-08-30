import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Products from './pages/Products'
import Clothing from './pages/Clothing'
import WinterClothing from './pages/WinterClothing'
import Caps from './pages/Caps'
import Shoes from './pages/Shoes'
import Product1 from './pages/Product1'
import Product2 from './pages/Product2'
import Product3 from './pages/Product3'
import Product4 from './pages/Product4'
import Product5 from './pages/Product5'
import Product6 from './pages/Product6'
import Product7 from './pages/Product7'
import Product8 from './pages/Product8'
import Product9 from './pages/Product9'
import Product10 from './pages/Product10'
import Product11 from './pages/Product11'
import Product12 from './pages/Product12'
import Product13 from './pages/Product13'
import Product14 from './pages/Product14'
import Product15 from './pages/Product15'
import Product16 from './pages/Product16'
import Product17 from './pages/Product17'
import Product18 from './pages/Product18'
import Product19 from './pages/Product19'
import Product20 from './pages/Product20'
import Product21 from './pages/Product21'
import Product22 from './pages/Product22'
import Product23 from './pages/Prodcut23'
import Product24 from './pages/Product24'
import Product25 from './pages/Product25'
import Product26 from './pages/Product26'
import Product28 from './pages/Product28'
import Product27 from './pages/Product27'
import Product29 from './pages/Product29'
import Product30 from './pages/Product30'
import Product31 from './pages/Product31'
import Product33 from './pages/Product33'
import Product32 from './pages/Product32'
import Contact from './pages/Contact'
import AboutUs from './pages/AboutUs'

function App() {

  return (
    <>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/Products' element={<Products/>}/>
      <Route path='/ClothingSection' element={<Clothing/>}/>
      <Route path='/WinterClothingSection' element={<WinterClothing/>}/>
      <Route path='/CapsSection' element={<Caps/>}/>
      <Route path='/ShoesSection' element={<Shoes/>}/>
      <Route path='/product1' element={<Product1/>}/>
      <Route path='/product2' element={<Product2/>}/>
      <Route path='/product3' element={<Product3/>}/>
      <Route path='/product4' element={<Product4/>}/>
      <Route path='/product5' element={<Product5/>}/>
      <Route path='/product6' element={<Product6/>}/>
      <Route path='/product7' element={<Product7/>}/>
      <Route path='/product8' element={<Product8/>}/>
      <Route path='/product9' element={<Product9/>}/>
      <Route path='/product10' element={<Product10/>}/>
      <Route path='/product11' element={<Product11/>}/>
      <Route path='/product12' element={<Product12/>}/>
      <Route path='/product13' element={<Product13/>}/>
      <Route path='/product14' element={<Product14/>}/>
      <Route path='/product15' element={<Product15/>}/>
      <Route path='/product16' element={<Product16/>}/>
      <Route path='/product17' element={<Product17/>}/>
      <Route path='/product18' element={<Product18/>}/>
      <Route path='/product19' element={<Product19/>}/>
      <Route path='/product20' element={<Product20/>}/>
      <Route path='/product21' element={<Product21/>}/>
      <Route path='/product22' element={<Product22/>}/>
      <Route path='/product23' element={<Product23/>}/>
      <Route path='/product24' element={<Product24/>}/>
      <Route path='/product25' element={<Product25/>}/>
      <Route path='/product26' element={<Product26/>}/>
      <Route path='/product27' element={<Product27/>}/>
      <Route path='/product28' element={<Product28/>}/>
      <Route path='/product29' element={<Product29/>}/>
      <Route path='/product30' element={<Product30/>}/>
      <Route path='/product31' element={<Product31/>}/>
      <Route path='/product32' element={<Product32/>}/>
      <Route path='/product33' element={<Product33/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/AboutUs' element={<AboutUs/>}/>


    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
