import { useState } from "react";

const PopPesan = (props) => {
    const [jumlah,setJumlah]= useState(1)

    const tambahJumlah = () =>{
        setJumlah((prev) => prev + 1)
    }
    const kurangiJumlah = () =>{
        if(jumlah > 0){
            setJumlah((prev) => prev - 1)
        }
    }
    

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
                <div className="row mt-2 mb-3">
                    <div className="col fw-bold" style={{fontSize:"24px"}}>Biasa</div>
                    <div className="col" style={{fontSize:"24px"}}>Rp{props.price}</div>
                </div>
                <div className="row d-flex align-items-center">
                    <div className="col-9">
                        <h3 className="fw-normal p-0 m-0" style={{fontSize:"16px"}}>
                            Jumlah : <span className="fw-bold">{jumlah}</span> </h3>
                    </div>
                    <div className="col-1">
                        <button type="button" className="btn btn-secondary px-1 py-0 m-0" onClick={kurangiJumlah}
                        style={{ fontSize:'12px', borderColor:"#8D34FF", backgroundColor:"transparent", color:"red" }}>-</button>
                    </div>
                    <div className="col-1">
                        <button type="button" className="btn btn-secondary px-1 py-0 m-0" onClick={tambahJumlah}
                        style={{ fontSize:'12px', borderColor:"#8D34FF", backgroundColor:"transparent", color:"green"}}>+</button>
                    </div>
                </div>
                <div className="row mt-5 mb-2">
                    <div className="col fw-bold" style={{fontSize:"24px"}}>Total</div>
                    <div className="col" style={{fontSize:"24px"}}>Rp{props.price * jumlah}</div>
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