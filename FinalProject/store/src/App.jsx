import { Routes, Route} from 'react-router-dom';
import './App.css'
import PromoBar from './components/PromoBar/PromoBar'
import NavegationBar from './components/NavegationBar/NavegationBar'
import FooterBar from './components/FooterBar/FooterBar'
import HomePage from './components/HomePage/HomePage'
import ProductList from './components/ProductList/ProductList'
import ProductPage from './components/ProductPage/ProductPage'


function App() {
 
  

  document.body.classList.add('preload')
  return (
    <>
      <PromoBar/> 
      <header className="bg-white">
        <NavegationBar/>
      </header>
      <main>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/ProductList/' element={<ProductList/>}></Route>
        <Route path='/Product/:id' element={<ProductPage/>}></Route> 
      </Routes>
      </main>
      <footer>
        <FooterBar/>
      </footer>
      <script src="js/script.js"></script>
    </>
  )

}

export default App
