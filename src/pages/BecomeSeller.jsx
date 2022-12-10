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
        <div className="container-fluid footer">
        <div className="container">
            <div className="row pb-5">
                <div className="col">
                    <h5>Kategori</h5>
                    <h3>Grafis & Desain</h3>
                    <h3>Digital Marketing</h3>
                    <h3>Video & Animasi</h3>
                    <h3>Musik & Audio</h3>
                    <h3>Programming & Teknologi</h3>
                    <h3>Data</h3>
                    <h3>Bisnis</h3>
                    <h3>Fotografi</h3>
                </div>
                <div className="col">
                    <h5>Tentang</h5>
                    <h3>Kebijakan Privasi</h3>
                    <h3>Terms of Service</h3>
                </div>
                <div className="col">
                    <h5>Dukungan</h5>
                    <h3>Bantuan & Dukungan</h3>
                    <h3>Kepercayaan & Keamanan</h3>
                </div>
                <div className="col">
                    <h5>Komunitas</h5>
                    <h3>Event</h3>
                    <h3>Forum</h3>
                </div>
            </div>
        </div>
    </div>
        <Footer/>

    </> );
}
 
export default BecomeSeller;