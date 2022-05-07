import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from "./Components/Home/Home"
import Header from './Components/Header/Header';
import CheckOut from './Components/Checkout/CheckOut';
import Blogs from "./Components/Blogs/Blogs"
import About from "./Components/About/About";
import Registration from "./Components/Registration/Registration";
import Footer from './Components/Footer/Footer';
import NotFound from './Components/NorFound/NotFound';
import Login from './Components/Login/Login';
import RequireAuth from './Components/NorFound/RequireAuth/RequireAuth';
function App() {
  return (
    <div className="App">
    <Header></Header>
    <Routes>
      <Route path="/"element={<Home> </Home>}></Route>
      <Route path="/home"element={<Home> </Home>}></Route>
      <Route path="/checkout"element = {
        <RequireAuth>
          <CheckOut></CheckOut>
        </RequireAuth>
      }></Route>
      <Route path="/blogs"element={<Blogs></Blogs>}></Route>
      <Route path="/about"element={<About></About>}></Route>
      <Route path="/registration"element={<Registration></Registration>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="*"element={<NotFound></NotFound>}></Route>
    </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
