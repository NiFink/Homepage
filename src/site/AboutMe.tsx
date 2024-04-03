interface AboutMePops{
    homepageClick?: ()=> void;
}

function AboutMe({homepageClick}: AboutMePops){
    return <div  className="text-center">
            <div style={{height: "70px"}}></div> 
            <div className="position-relative overflow-hidden">
                <img src="./images/AboutMe.jpg" alt="..." className="w-100 justify-content-center align-items-center"></img>
            </div>
            <div className="pt-3">
                <h3 className="text-center ">Hey, I am a passionate developer and creator who has built this site to represent himself and showcase his world of programming, as well as personal projects. Dive in and explore Nils' captivating journey through the realm of technology, his innovative ideas, and his pursuit of excellence. From impressive programming ventures to insights into his life and passions - here, you can discover everything about Nils and his endeavors.
                Welcome to his digital stage!</h3>
            </div>            
            <div>
                <h1 className="text-center" id="contact">Contact</h1>
                <h3 className="text-center">If you have any questions, feel free to send me an email at nils@team-fink.de or direct message me on <a className="h3" href="https://www.linkedin.com/in/nils-fink-42220b257/">LinkedIn</a></h3>      
            </div>
            <button className="btn btn-dark" onClick={homepageClick}>Home</button>

        </div>

        
}
export default AboutMe;