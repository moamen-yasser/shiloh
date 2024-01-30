import { useEffect, useState } from 'react';
import './App.css';
import ScaleLoader from "react-spinners/ScaleLoader"
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Home';
import Projects from './Projects';
import NavBar from './NavBar';
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

function App() {
  const [loading,setloading] =useState(false);
  useEffect(() =>{
    setloading(true)
    setTimeout(() => {
      setloading(false)
    },3000);
  },[])

  return (
    <>
      <BrowserRouter>
      {loading ? 
      <div className='loader'>
        <ScaleLoader color={'#f87765'} loading={loading} height={100} margin={10} />
      </div> : 
      <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Projects" element={<Projects/>}/>
      </Routes>
      </>
    }
      </BrowserRouter>
    </>
  );
}

export default App;
