const PopOTP = (props) => {
    return ( <>
    <div className="pop d-flex align-items-center justify-content-center">
        <div className="container login p-4 pt-3 m-5 ">
            <div className="row d-flex justify-content-center">
                <h3 className='fw-bold text-center py-5' style={{fontSize:"20px"}}>Please Check The OTP Code Sent to Your Email Inbox or Spam</h3>
            </div>

            <button type="submit" className="btn btn-primary w-100 fw-bold" 
            style={{background:"#FF0000",fontSize:"18px"}} onClick={()=> props.popOTP(false)}>OK</button>
        </div>
    </div>
    </> );
}
 
export default PopOTP;