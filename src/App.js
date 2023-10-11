import "./App.css";
import {BrowserRouter as Router,Link,Routes,Route} from "react-router-dom";
import Service from "./Service";
import Home from "./Home";
import About from "./About";
function ram() {
  return (
    <body>
        <Router>
        <div id="nav_home">
        <Link to="/Service" class="nav">Services</Link>
        <Link to="/About" class="nav">About</Link>
        <Link to="/" class="nav">Home</Link>
        <img src="vel.png" alt=""class="navi"></img>
        <h2 id="logoh" class="navi">MURUGA <br></br>INFASTRUCTURE</h2>
        {/* <img id="applogo" src="logo.jpg" alt=""></img> */}
        </div>
          <Routes>
            <Route>
              <Route path="Service" element={<Service></Service>}></Route>
              <Route path="About"element={<About></About>}></Route>
              <Route path="/" element={<Home></Home>}></Route>
            </Route>
          </Routes>
        </Router>
        <div id="footer">
                <div class="foot"><h1>get in touch</h1>
                <h3>Phone no:</h3>
                <p>+91 9999912345</p><p>+91 9911991199</p><p>+91 2323454567</p>
                </div>
                <div class="foot1"><h1>contact</h1>
                <h3>Company Address:</h3>
                <p>Muruga Infrasructure, Girivala path, Thiruparankundram, Madurai, Tamilnadu</p>
                <h4>Email id:Murugainfrastructure@gmail.com</h4>
                </div>
                <div class="foot1"><h1>Social Media</h1>
                <p>Connect through <br></br>these social media platform😍😍</p>
                <img src="whatsapp.png"alt="whatsapp" class="footimg"></img>
                <img src="facebook.png"alt="face"class="footimg"></img>
                <img src="insta.png" alt="insta"class="footimg"></img>
                <img src="linkedin.png" alt="linked"class="footimg"></img>
                <img src="twitter.png"alt="twit"class="footimg"></img></div>
                <br></br>
                <div class="foot1"> <iframe width="300" height="300" src="https://www.youtube.com/embed/-gcbsu6JYOE?si=XGy9b6d7VDQN-CUE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
            </div>
                <div id="footmap">
                <p>view me on Google maps</p>
                    <iframe title="googlemaps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6839.764717154162!2d78.06428090794547!3d9.883167182382088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00cfcfd8c9335b%3A0xae30a9cabfd07874!2sThiruparankundram%2C%20Tamil%20Nadu!5e1!3m2!1sen!2sin!4v1695885882810!5m2!1sen!2sin" width="700" height="400" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div> 
                   <div id="footcontent"><p> subjected to &copy; copyright of Muruga Infrasructure </p></div>

    </body>
  );
}
export default ram;