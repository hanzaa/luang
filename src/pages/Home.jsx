import './Home.css';
import SearcBar from '../components/SearchBar';
import NavBar from '../components/NavBar';
import Populer from '../components/Populer';


const Home = () => {
    return ( 
        <>
        <div className='home'></div>
        <NavBar/>
        <div className="container">
            <div className='row welcome '>
                <div className='col'>
                    <div className="row slogan">
                        <h3 >Ubah waktu <span style={{color:'rgba(141, 52, 255, 1)', fontStyle:'italic'}}>luang</span> menjadi <span style={{color:'rgba(255, 0, 0, 1)'}}>uang</span></h3>
                        <h5>Temukan layanan yang sesuai dengan keperluanmu</h5>
                    </div>
                    <div className="row">
                        <SearcBar/>
                    </div>
                    
                </div>

                <div className="col d-none d-lg-block">
                    <img className='absolute gembok' src={require("../assets/gembok.png")} alt="" />
                    <img className='absolute qr' src={require("../assets/qr.png")} alt="" />
                    <img className='absolute code' src={require("../assets/code.png")} alt="" />
                    <img className='absolute coin' src={require("../assets/coin.png")} alt="" />
                    <img className='absolute play' src={require("../assets/play.png")} alt="" />
                    <img className='absolute eth' src={require("../assets/eth.png")} alt="" />
                </div>
            </div>
          
        </div>

        <div className="container-fluid populer">
            <div className="container py-5">
                <h1 className='fw-semibold pb-5' style={{fontSize:"41px"}}>Layanan Populer</h1>
                <Populer/>  
            </div>

        </div>

    </> )
}
 
export default Home;