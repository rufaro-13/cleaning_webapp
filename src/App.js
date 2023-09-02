
import './App.css';
import Layout from './components/Layout';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Services from './pages/Services';
import Bathroom from './pages/BathRoom'

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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
