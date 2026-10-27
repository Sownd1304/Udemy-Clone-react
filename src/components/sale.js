import sale from "../assets/images/sale img.jpg" 
// saleimg
function Saleimg(){
  return(
    <div class="sales">
        <img src={sale} alt="saleimg"></img>
        <div class="sale__box">
            <h2>Start learning today</h2>
            <p>Exclusive Affiliate discount with courses started at ₹549.00</p>
        </div>
    </div>
  )
}
export default Saleimg