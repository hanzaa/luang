import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const NavBar = () => {
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
                <Link className="nav-link active" to='/eksplorasi'>
                <img src={require("../assets/star.png")} alt='...'></img>                
                </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to='/home'>
                <img src={require("../assets/message.png")} alt='...'></img>
                </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link fw-semibold" to='/home' style={{fontSize:"20px",color:"#7C8DB0"}}>Pesanan</Link>
                </li> 
                <li>
                <Link>
                <img src={require("../assets/pp.jpg")} width="50rem" className="rounded-circle" alt='...'/>
                </Link>
                </li>       
            </ul>
            </div>
        </div>
        </nav>
    </> );
}
 
export default NavBar;