import { BrowserRouter,Routes,Route } from "react-router-dom";
import Welcome from './pages/Welcome';
import Home from "./pages/Home";
import Product from "./pages/Product";
import BecomeSeller from "./pages/BecomeSeller";

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Welcome/>}></Route>
        <Route path='/product' element={<Product/>}></Route>
        <Route path='/becomeseller' element={<BecomeSeller/>}></Route>
      </Routes>
    </BrowserRouter>
    
  

  )
}

export default App;
