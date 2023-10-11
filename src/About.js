import "./About.css";
function About() {
    return(
        <body>
            <div id="vedioabt">
                <center><h1>Our projects</h1></center>
            <video controls="autoplay" id="vid">
            <source src="vedio.mp4" type="video/mp4"></source>
            </video>           
            </div>
            <div id="abtbox">
                <div class="abt">
                    <div class="abtceo"><img src="chief.jpeg"alt="ajith"></img></div>
                    <div class="abtin"><h1>Ajith-CEO</h1><p>Ajith Kumar (born 1 May 1971) is an Indian actor who works predominantly in Tamil cinema. To date, he has starred in over 61 films, and his awards include four Vijay Awards, three Cinema Express Awards, three Filmfare Awards South and three Tamil Nadu State Film Awards. In addition to his acting career, Ajith is also a sports car racer and participated in the MRF Racing series (2010). He became a race car driver, competing in circuits around India in places such as Mumbai, Chennai and Delhi. He is one among very few Indians to race in the International arena and in Formula championships. Based on the annual earnings of Indian celebrities, he was included in the Forbes India Celebrity 100 list three times</p></div>
                </div>
                <div class="abt">
                <div class="abtceo"><img src="executive.jpeg"alt="Mariana"></img></div>
                    <div class="abtin"><h1>Mariana-Executive</h1><p>Mariana was executive and playback singer who works in Tamil films.[1] The son of singer Shoba Chandrasekhar, Vijay debuted in the lead role in early 1990s, appearing in Naalaiya Theerpu, directed by his father S. A. Chandrasekhar.[2] He has sung for composers including but not limited to, Deva, Ilaiyaraaja, Yuvan Shankar Raja, Vidyasagar, Sirpy, Bharani, S. A. Rajkumar, Ramana Gogula, D. Imman, Devi Sri Prasad, Harris Jayaraj, G. V. Prakash Kumar, Anirudh Ravichander, Santhosh Narayanan, A. R. Rahman and Thaman S.[3][4] He is one of the most prolific singers among Tamil actors</p></div>
                </div>
                <div class="abt">
                    <div class="abtceo"><img src="emp.jpeg"alt="surya"></img></div>
                    <div class="abtin"><h1>Surya-Manager</h1><p>Saravanan Sivakumar (born 23 July 1975), known by his stage name Suriya, is an Indian actor and film producer. He primarily works in Tamil cinema where he is one of the highest paid actors.[3][4][5][6] He has received numerous awards including two National Film Awards,[7] six Filmfare Awards South, three Tamil Nadu State Film Awards and two South Indian International Movie Awards.[8] Suriya has featured six times in the Celebrity 100 list of Forbes India, which takes into account the earnings of Indian celebrities.</p></div>
                </div>
            </div>
        </body>
    );
}
export default About;