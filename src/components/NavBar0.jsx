import './NavBar0.css'
import { Link } from 'react-router-dom'

const NavBar0 = (props)=>{
    return(
        <>
        <nav className="navbar navbar-expand-lg bg-transparent navbar-dark">
        <div className="container">
            <Link className="navbar-brand" to='/'><span style={{color:'rgba(141, 52, 255, 1)'}}>L</span><span style={{color:'rgba(255, 0, 0, 1)'}}>uang</span> </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                <Link className="nav-link active" to='/'>Eksplorasi</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to='/becomeseller'>Jadi Penjual</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to='/' onClick={() => {props.popLogin(true)}}>Masuk</Link>
                </li>        
            </ul>
            <form>
                <button className="btn btn-sm btn-outline-light" type="button" onClick={()=>{props.popRegister(true)}} >Daftar</button>
            </form>
            </div>
        </div>
        </nav>
        </>
    )
}

export default NavBar0