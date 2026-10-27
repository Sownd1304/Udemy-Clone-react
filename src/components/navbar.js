// Navbar
function Navbar(){
  return(
    <div className="navbar">
        <div className="navbar__s1">
            <h1>Udemy</h1>
        </div>
        <div className="navbar__s2">
            <i className="fa-solid fa-magnifying-glass" style={{color: "rgb(0, 1, 3)"}}></i>
            <input type="text" placeholder="Search for anything"></input>
        </div>
        <div className="navbar__s3">
            <p>Trending Courses</p>
            <div className="mylearning">
                <p>My Learning</p>
                <div className="mylearning__popup">
                    <p>You did not add anything</p>
                </div>
        </div>
            
            <i className="fa-solid fa-cart-shopping" style={{color: "rgb(0, 1, 3);"}}></i>
            <i className="fa-solid fa-bell" style={{color: "rgb(0, 1, 3);"}}></i>
            <i className="fa-solid fa-user" style={{color: "rgb(0, 1, 3);"}}></i>
        </div>
        <div className="navbar__s4">
            <i className="fa-mosaic fa-solid fa-bars"></i>
            
        </div>

    </div>
  )
}
export default Navbar