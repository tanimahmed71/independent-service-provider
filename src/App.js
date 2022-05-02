import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from "./Components/Home/Home"
import Header from './Components/Header/Header';
import CheckOut from './Components/Checkout/CheckOut';
import Blogs from "./Components/Blogs/Blogs"
import About from "./Components/About/About";
import Registration from "./Components/Registration/Registration";
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div className="App">
    <Header></Header>
    <Routes>
      <Route path="/home"element={<Home> </Home>}></Route>
      <Route path="/checkout"element={<CheckOut></CheckOut>}></Route>
      <Route path="/blogs"element={<Blogs></Blogs>}></Route>
      <Route path="/about"element={<About></About>}></Route>
      <Route path="/login"element={<Registration></Registration>}></Route>
    </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
