import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

//mengambil link API backend dari environement variable
const base_url = process.env.REACT_APP_URL_BACKEND


const NavBar = () => {

    const navigate = useNavigate()
    
    const handleLogout = async () => {
        // 1. Hapus localStorage
        localStorage.removeItem('id');
        localStorage.removeItem('username');
        localStorage.removeItem('email');
      
        // 2. Hit endpoint logout dengan body jwt yang didapat dari localstorage
        // dan setelah berhasil, beri alert sukses
        await axios.post(`${base_url}/logout`, {
            token: localStorage.getItem('token')
        })
        .then((res) => {
            localStorage.removeItem('token');
            alert('Logout Success');
            // 3. Kembalikan tampilan ke halaman home
            navigate('/')
        })
        
    }

    return ( <>
    <nav className="navbar navbar-expand-lg bg-transparent shadow-sm navbar-light " style={{paddingTop:"1.5%"}}>
        <div className="container">
            <Link className="navbar-brand fw-bold" style={{fontSize:"30px"}} to='/'><span style={{color:'rgba(141, 52, 255, 1)'}}>L</span><span style={{color:'rgba(255, 0, 0, 1)'}}>uang</span> </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <div className="ms-auto me-auto w-50">
                <SearchBar/>
            </div>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link active" to='/'>
                    <img src={require("../assets/star.png")} alt='...'></img>                
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/home'>
                    <img src={require("../assets/message.png")} alt='...'></img>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link fw-semibold" to='/pesanan' style={{fontSize:"20px",color:"#7C8DB0"}}>Pesanan</Link>
                </li> 
                <li className="nav-item dropdown me-5">
                    <img className="rounded-circle nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false" src={require("../assets/pp.jpg")} width="65rem"  alt='...'/>
                    <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" to="/account">Account</Link></li>
                        <li><Link className="dropdown-item" to="/">Another action</Link></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><button type="button" className="dropdown-item text-danger" onClick={handleLogout}>Log Out</button></li>
                    </ul>
                </li>       
            </ul>
            </div>
        </div>
        </nav>
    </> );
}
 
export default NavBar;