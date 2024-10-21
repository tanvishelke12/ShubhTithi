import './App.css';
import { Home } from './Components/Home/Home'
import { About } from './Components/About/About'
import { Navigation } from './Components/Naviagtion/Navigation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './Components/Footer/Footer';
import { CartItems } from './Components/CartItems/CartItems';
import { Popular } from './Components/Popular/Popular';
import { ShopCategory } from './Components/Pages/ShopCategory';
import SinglePage from './Components/Pages/SinglePage';
import SignupLogin from './Components/SignUpLogin/SignupLogin';
import Contact from './Components/Contact/Contact';



function App() {
  return (
  <BrowserRouter>
<div>
<Navigation/>
<Routes>
<Route path='/' Component={Home}/> 
<Route path='/about' Component={Contact}/> 
<Route path='/contact' Component={About}/> 

<Route path='/men' element={<ShopCategory category ="Men"/>}/> 
<Route path='/men/wedding' element={<ShopCategory category ="Men Wedding"/>}/> 
<Route path='/men/reception' element={<ShopCategory category ="Men Reception"/>}/> 
<Route path='/men/assessories' element={<ShopCategory category ="Men Assessories"/>}/> 

<Route path='/women' element={<ShopCategory category ="Women"/>}/> 
<Route path='/women/wedding' element={<ShopCategory category ="Women Wedding"/>}/> 
<Route path='/women/reception' element={<ShopCategory category ="Women Reception"/>}/> 
<Route path='/women/assessories' element={<ShopCategory category ="Women Assessories"/>}/> 


<Route path='/SinglePage' element={<SinglePage/>}>
    <Route path=':productId' element={<SinglePage/>}/>
</Route>

<Route path='/login' element={<SignupLogin/>}/> 
<Route path='/cart' Component={CartItems}/> 
{/* <Route path='/addcart' Component={CartItems}/>  */}

</Routes>

{/* <Footer/> */}
</div>
</BrowserRouter>

  );
}

export default App;
