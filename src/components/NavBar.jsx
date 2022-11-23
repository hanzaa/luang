import './NavBar.css'

const NavBar = ()=>{
    return(
        <>
        <nav class="navbar navbar-expand-lg bg-transparent navbar-dark sticky-top">
        <div class="container">
            <a class="navbar-brand"><span style={{color:'rgba(141, 52, 255, 1)'}}>L</span><span style={{color:'rgba(255, 0, 0, 1)'}}>uang</span> </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                <a class="nav-link active" href="#about">Eksplorasi</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#projects">Jadi Penjual</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#contact">Masuk</a>
                </li>        
            </ul>
            <form>
                <button class="btn btn-sm btn-outline-light" type="button">Daftar</button>
            </form>
            </div>
        </div>
        </nav>
        </>
    )
}

export default NavBar