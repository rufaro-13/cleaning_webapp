
import './App.css';
import Layout from './components/Layout';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Services from './pages/Services';
import Bathroom from './pages/BathRoom'
import Kitchen from './pages/Kitchen'
import Office from './pages/Office'
import Restaurant from './pages/Restaurant'
import Quote from './components/Quote'
import AfterEvent from './pages/AfterEvent'
import Carpet from './pages/Carpet'
import WIndow from './pages/WIndow'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element = {<Home/>}></Route>
        <Route  path='/about' element= {<About/>}></Route>
        <Route  path='/contact' element= {<Contact/>}></Route>
        <Route  path='/services' element={<Services/>}></Route>
        <Route  path='/bathroom' element={<Bathroom/>}></Route>
        <Route  path='/kitchen' element={<Kitchen/>}></Route>
        <Route  path='/office' element={<Office/>}></Route>
        <Route  path='/restaurant' element={<Restaurant/>}></Route>
        <Route  path='/quote' element={<Quote/>}></Route>
        <Route  path='/event' element={<AfterEvent/>}></Route>
        <Route  path='/carpet' element={<Carpet/>}></Route>
        <Route  path='/window' element={<WIndow/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
