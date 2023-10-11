import "./Home.css"
function Home(){
    return(
        <body>
            <div id="Homeback_img">
                
                <div id="back_img">
                    {/* <img src="building.jpg" alt="building"></img> */}
                    <div id="para">
                        <br></br>
                       <center>
                       <img src="vel.png" alt=""></img>
                       <p id="title"><p>Welcome to</p>
                       <span>MURUGA INFASTRUCTURE</span>
                       </p>
                       <center><p id="subtitle">Construction with customers in mind</p></center>
                       </center>
                    </div>
                </div>
            </div>
            <div id="homemaincontent">
                <br></br>
                <center><p>Future in safe Hands</p>
            
                <em>Built with diligence, <b>Muruga Infrasructure</b> renowned for the persistent delivery of value and
                <br></br>adaptation to changing customer needs over the years.</em>
                </center>
            </div>
            <div id="homebox">
                <div class="b">
                <center><p class="exp"><span>19</span><br></br>years of experience</p></center>
                </div>
                <div class="b">
                <center><p class="exp"><span>45.6</span><br></br>Lakhs Sft total built-up area</p></center>
                </div>
                <div class="b">
                <center><p class="exp"><span>1,503</span><br></br>Families Accomadated</p></center>
                </div>
                <div class="b">
                <center><p class="exp"><span>48</span><br></br>Projects in Tamilnadu</p></center>
                </div>
            </div>
            <div id="homeimg">
                <img src="office.jpg"alt="city"></img>
                <br></br>
            </div>
            <div id="mivi">
                <h1>Mission</h1>
                <p>We aim to go above and beyond customer expectations by introducing innovative & world-class construction solutions. Our vision is to contribute significantly to the construction domain by exceeding our own set benchmarks with every new initiative.</p>
                <h1>Vision</h1>
                <p>Our mission is to combine incredible living spaces with exceptional standards of quality, professionalism, and business ethics. Treating every project as a signature project, be it residential or commercial, offers peace of mind to our clients in every sense.</p>
            </div>
           
            {/* <marquee direction="down" height="200" width="500" bgcolor="orange" behaviour="alternate" loop="7" scroll="" amount="45" delay="400">Why choose us?</marquee> */}
            
        </body>
    );
}
export default Home;