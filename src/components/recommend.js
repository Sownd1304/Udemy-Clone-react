import one from "../assets/images/C1.jpg"
import two from "../assets/images/C2.jpg"
import four from "../assets/images/C4.jpg"
import three from "../assets/images/C3.jpg"
function Recommend(){
  return(
     <div className="recommeded">
        <h1 class="recommeded__title">Recommeded for you</h1>
        <p>Pick the best fit</p>
        <div class="recommeded__container">
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
    </div>
    </div>
    )
}

export default Recommend