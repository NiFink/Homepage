interface AboutMePops{
    homepageClick?: ()=> void;
}

function AboutMe({homepageClick}: AboutMePops){
    return <div  className="text-center">
        <div style={{height: "80px"}}></div> 
            <h1>About me</h1>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col justify-content-center align-items-center">
                    <img src="./images/Nils_Fink_Bewerbungsfoto.jpg" alt="..." width={"400px"}/>
                </div>
                <div className="col justify-content-center align-items-center">
                    <h3 className="text-center ">Hey, I am a passionate developer and creator who has built this site to represent himself and showcase his world of programming, as well as personal projects. Dive in and explore Nils' captivating journey through the realm of technology, his innovative ideas, and his pursuit of excellence. From impressive programming ventures to insights into his life and passions - here, you can discover everything about Nils and his endeavors.
                    Welcome to his digital stage!</h3>
                </div>            
            </div>
            <div>
                <h1 className="text-center" id="contact">Contact</h1>
                <h3 className="text-center">If you have any questions, feel free to send me an email at nils@team-fink.de or direct message me on <a className="h3" href="https://www.linkedin.com/in/nils-fink-42220b257/">LinkedIn</a></h3>      
            </div>
            <button className="btn btn-dark" onClick={homepageClick}>Home</button>
        </div>
}
export default AboutMe;