import { BrowserRouter,Routes,Route } from "react-router-dom";
import Welcome from './pages/Welcome';
import Home from "./pages/Home";
import Product from "./pages/Product";
import BecomeSeller from "./pages/BecomeSeller";
import Fake from "./pages/Fake";
import Pesanan from "./pages/Pesanan";
import Account from "./pages/Account";
import Category from "./pages/Category";
import Forget from "./pages/Forget";
import ChangePassword from "./pages/ChangePassword";


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Welcome/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/account' element={<Account/>}></Route>
        <Route path='/category' element={<Category/>}></Route>
        <Route path='/product/:id' element={<Product/>}></Route>
        <Route path='/pesanan' element={<Pesanan/>}></Route>
        <Route path='/forget' element={<Forget/>}></Route>
        <Route path='/changepass' element={<ChangePassword/>}></Route>
        <Route path='/becomeseller' element={<BecomeSeller/>}></Route>
        <Route path='/fake' element={<Fake/>}></Route>
      </Routes>
    </BrowserRouter>
    
  

  )
}

export default App;
