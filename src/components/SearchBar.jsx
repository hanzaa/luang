import './SearchBar.css'

const SearcBar = () => {
    return ( 
        <>
            <div className="container-fluid">
                <form className="d-flex" role="search">
                <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-secondary" type="submit">Cari</button>
                </form>
            </div>
        
        </>
     );
}
 
export default SearcBar;