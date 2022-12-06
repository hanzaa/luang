const PopPesan = (props) => {
    return ( <>
    <div className="pop d-flex align-items-start justify-content-end" style={{ background: "rgba(0,0,0,0.7)"}}>
        <div className="container login m-5 p-2 ">
            <div className="row px-3 pt-2" style={{borderBottom: "1px solid black"}} >
                <div className="col-10">
                    <h3 className="fw-bold" style={{fontSize:"20px"}}>Pilihan Pesanan</h3>
                </div>
                <div className="col-2">
                    <div className="btn btn-close ms-auto  d-flex align-items-center justify-content-center" 
                    onClick={()=> props.popPesan(false)} >X</div>
                </div>
            </div>

            <div className="row  m-3 p-1" style={{border:"solid black 1px",borderRadius:"8px"}}>
                <div className="row">
                    <div className="col fw-bold" style={{fontSize:"24px"}}>Biasa</div>
                    <div className="col" style={{fontSize:"24px"}}>Rp25.000</div>
                </div>
                <div className="row pt-4">
                    <p>Saya akan membuatkan logo sederhana untukmu</p>
                </div>
                <div className="row">
                    <h3 className="fw-bold" style={{fontSize:"16px"}}>Jumlah Pesanan : 1</h3>
                </div>
            </div>

            <div className="row px-3">
                <button type="button" className="btn btn-secondary fw-bold" 
                style={{letterSpacing:"1px", fontSize:"16px"}}>Lanjut</button>
            </div>
        </div>
    </div>
    </> );
}
 
export default PopPesan;