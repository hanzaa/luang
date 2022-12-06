const PopRegister = (props) => {
    return ( <>
        <div className="pop d-flex align-items-center justify-content-center">
        <div className="container login p-4 pt-3 m-5 ">
            <div className="btn btn-secondary btn-close ms-auto  d-flex align-items-center justify-content-center" 
            onClick={()=> props.popRegister(false)} style={{background:"#FF0000",color:"black"}}>x</div>
            
            <div className="row d-flex justify-content-center">
                <h3 className='fw-bold d-flex justify-content-center pt-1' style={{fontSize:"24px"}}>Gabung ke Luang</h3>
            </div>
            <form >
                <div class="mb-3 pt-1">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control w-100" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="masukan email"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Username</label>
                    <input type="text" class="form-control w-100" id="exampleInputPassword1" placeholder="masukan username"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control w-100" id="exampleInputPassword1" placeholder="password"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
                    <input type="password" class="form-control w-100" id="exampleInputPassword1" placeholder="confirm password"/>
                </div>
                <button type="submit" class="btn btn-primary w-100 fw-bold" style={{background:"#FF0000",fontSize:"23px"}}>lanjut</button>
                <p className='fw-light d-flex justify-content-center pt-1'>Sudah punya akun? .<span className='link-danger' onClick={()=> {props.popLogin(true) ;props.popRegister(false)}}>masuk</span> .</p>
            </form>
        </div>
    </div>
    </> );
}
 
export default PopRegister;