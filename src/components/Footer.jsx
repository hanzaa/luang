const Footer = () => {
    return ( <>
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
    <div className="container-fluid" style={{background:"white",margin:"0",padding:"0"}}>
        <div className="container">
            <footer className="py-4" style={{fontSize:"24px"}}>
                <span style={{color:'rgba(141, 52, 255, 1)', fontWeight:"700",fontSize:"24px"}}>L</span><span style={{color:'rgba(255, 0, 0, 1)',fontWeight:"700",fontSize:"24px"}}>uang
                </span> <span className="ps-4" style={{fontSize:"14px"}}> © Luang National tbk. 2022</span>
            </footer>
        </div>
    </div>
    </> );
}
 
export default Footer;