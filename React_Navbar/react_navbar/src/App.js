import './App.css';
import Navbar from './Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from "./Home"
import Pricing from "./Pricing"
import About from "./About"

function App() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/pricing' element={<Pricing />}></Route>
          <Route path='/about' element={<About />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;