import one from "../assets/images/C1.jpg"
import two from "../assets/images/C2.jpg"
import four from "../assets/images/C4.jpg"
import three from "../assets/images/C3.jpg"
import five from "../assets/images/C5.jpg"
import six from "../assets/images/C6.jpg"
import seven from "../assets/images/C7.jpg"
import eight from "../assets/images/c8.jpg"

function Product(){
    return(
        <div class="popular">
        <h1 class="popular__title">Most popular</h1>
        <p class="popular__des">Pick the best fit</p>
        <div class="popular__container">
            <div class="coursecard">
                <img src={one} alt=""></img>
                <h2>Web Development Bootcamp</h2>
                <p>Col Steele</p>
                <p>3.2 ⭐⭐⭐</p>
                <p>₹499 <del> ₹1999</del></p>
            </div>
            <div class="coursecard">
                <img src={two} alt=""></img>
                <h2>Master UI/UX Designing with Figma</h2>
                <p>Col Steele</p>
                <p>4.8 ⭐⭐⭐⭐</p>
                <p>₹799 <del> ₹4599</del></p>
            </div>
            <div class="coursecard">
                <img src={three} alt=""></img>
                <h2>Python and Data Masterclass</h2>
                <p>Col Steele</p>
                <p>4.8 ⭐⭐⭐⭐</p>
                <p>₹889 <del> ₹2099</del></p>
            </div>
            <div class="coursecard">
                <img src={four} alt=""></img>
                <h2>Basic to Advance Java Training</h2>
                <p>Col Steele</p>
                <p>4.0 ⭐⭐⭐⭐</p>
                <p>₹699<del> ₹8999</del></p>
        </div>
        <div class="coursecard">
                <img src={five} alt=""></img>
                <h2>Html Bootcamp</h2>
                <p>Col Steele</p>
                <p>3.2 ⭐⭐⭐</p>
                <p>₹499 <del> ₹1999</del></p>
            </div>
            <div class="coursecard">
                <img src={six} alt=""></img>
                <h2>Advance C++ Programming</h2>
                <p>Col Steele</p>
                <p>4.8 ⭐⭐⭐⭐</p>
                <p>₹799 <del> ₹4599</del></p>
            </div>
            <div class="coursecard">
                <img src={seven} alt=""></img>
                <h2>Full Stack Development</h2>
                <p>Col Steele</p>
                <p>4.8 ⭐⭐⭐⭐</p>
                <p>₹889 <del> ₹2099</del></p>
            </div>
            <div class="coursecard">
                <img src={eight} alt=""></img>
                <h2>Software Testing Selenium</h2>
                <p>Col Steele</p>
                <p>4.0 ⭐⭐⭐⭐</p>
                <p>₹699<del> ₹8999</del></p>
            </div>
        </div>
        </div>
    )
}
export default Product