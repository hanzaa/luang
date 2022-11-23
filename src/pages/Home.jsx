import './Home.css'
import NavBar from '../components/NavBar';
import SearcBar from '../components/SearchBar';

const Home = () => {
    return ( 
    <>
        <div className='home'>
            <NavBar/>
            <div className="container">
                <div className='row'>
                    <div className='col'>
                        <div className="row slogan">
                            <h3 >Ubah waktu <span style={{color:'rgba(141, 52, 255, 1)', fontStyle:'italic'}}>luang</span> menjadi <span style={{color:'rgba(255, 0, 0, 1)'}}>uang</span></h3>
                            <h5>Temukan layanan yang sesuai dengan keperluanmu</h5>
                        </div>
                        <div className="row">
                            <SearcBar/>
                        </div>
                    </div>
                    <div className="col"></div>
                </div>
            </div>
        </div>
    </> )
}
 
export default Home;