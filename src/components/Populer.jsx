import './Populer.css'
import { Link } from 'react-router-dom'


const Populer = () => {
    return ( <>
                
<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
        <div className="card">
            <img src={require("../assets/open-book.png")} className="d-block w-100" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
                <Link className="btn btn-primary" to='/'>Go somewhere</Link>
            </div>
        </div>
    </div>
    <div className="carousel-item">
        <div className="card">
            <img src={require("../assets/books.jpg")} className="d-block w-100" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Card title 2</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
                <Link className="btn btn-primary" to='/'>Go somewhere</Link>
            </div>
        </div>
    </div>
    <div className="carousel-item">
        <div className="card">
            <img src={require("../assets/books2.jpg")} className="d-block w-100" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Card title 3</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
                <Link className="btn btn-primary" to='/'>Go somewhere</Link>
            </div>
        </div>
    </div>
    
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

                
            

            </>
        );
}
 
export default Populer;