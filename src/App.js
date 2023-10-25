
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
import Deep from './pages/Deep'
import Tailored from './pages/Tailored'
function App() {
  return (
    <BrowserRouter basename='/'>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route forceRefresh={true} index element = {<Home/>}></Route>
        <Route forceRefresh={true} path='/about' element= {<About/>}></Route>
        <Route forceRefresh={true} path='/contact' element= {<Contact/>}></Route>
        <Route forceRefresh={true} path='/services' element={<Services/>}></Route>
        <Route forceRefresh={true} path='/bathroom_cleaning' element={<Bathroom/>}></Route>
        <Route forceRefresh={true} path='/kitchen_cleaning' element={<Kitchen/>}></Route>
        <Route forceRefresh={true} path='/office_cleaning' element={<Office/>}></Route>
        <Route forceRefresh={true} path='/restaurant_cleaning' element={<Restaurant/>}></Route>
        <Route forceRefresh={true} path='/quote' element={<Quote/>}></Route>
        <Route forceRefresh={true} path='/event_cleaning' element={<AfterEvent/>}></Route>
        <Route forceRefresh={true} path='/carpet_cleaning' element={<Carpet/>}></Route>
        <Route forceRefresh={true} path='/window_cleaning' element={<WIndow/>}></Route>
        <Route forceRefresh={true} path='/deep_cleaning' element={<Deep/>}></Route>
        <Route forceRefresh={true} path='/tailored_cleaning' element={<Tailored/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
