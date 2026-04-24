import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Services from "./component/Services";
import Contact from "./component/Contact";
import Gallery from "./component/Gallery";
import Nav from "./component/Nav";
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <>
      {/* <h1>React Project</h1> */}
   {/*    <BrowserRouter> → Controls routing
<Nav /> → Placed outside 
<Routes> → renders on every page
<Routes> → Only switches page content */}

<BrowserRouter>
<Nav /> 
 <Routes>
 
  <Route path='/' element={<Home/>} />
  <Route path='/about' element={<About/>} />
  <Route path='/services' element={<Services/>} />
  <Route path='/contact' element={<Contact/>} />
  <Route path='/gallery' element={<Gallery/>} />
 </Routes>
</BrowserRouter>
    </>
  );
}

export default App;
