import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import './BecomeSeller.css'

const BecomeSeller = () => {
    return ( <>
    <nav className="navbar navbar-expand-lg bg-transparent">
        <div className="container">
            <Link className="navbar-brand" to='/'><span style={{color:'rgba(141, 52, 255, 1)'}}>L</span><span style={{color:'rgba(255, 0, 0, 1)'}}>uang</span> </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <div className="ms-auto me-auto w-50">
                <SearchBar/>
            </div>
            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                <Link className="nav-link active" to='/'>Eksplorasi</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to='/becomeseller'>Jadi Penjual</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to='/'>Masuk</Link>
                </li>        
            </ul>
            <form>
                <Link to="/">
                <button className="btn btn-sm btn-outline-secondary" type="button" style={{color:"#8D34FF",borderColor:"#8D34FF"}}>Daftar</button>
                </Link>
            </form>
            </div>
        </div>
    </nav>
        <div className="container">
            <div className="row">
                <img src={require('../assets/worker.png')} alt="..." />              
            </div>
        </div>
   
    <Footer/>

    </> );
}
 
export default BecomeSeller;