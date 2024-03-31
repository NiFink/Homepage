interface AboutMePops{
    homepageClick?: ()=> void;
}

function AboutMe({homepageClick}: AboutMePops){
    const style = {padding: "70px"}
    return <div  className="text-center">
        <div style={{height: "70px"}}></div> 
            <h1>About me</h1>
            <h3 className="text-center">I am a passionate developer and creator who has built this site to represent himself and showcase his world of programming, as well as personal projects. Dive in and explore Nils' captivating journey through the realm of technology, his innovative ideas, and his pursuit of excellence. From impressive programming ventures to insights into his life and passions - here, you can discover everything about Nils and his endeavors.
                Welcome to his digital stage!</h3>
            <h1 className="text-center" id="contact">Contact</h1>
            <h3 className="text-center">If you have any questions feel free to send me an Email at nils@team-fink.de or direct Message me on </h3>
            <a className="" href="https://www.linkedin.com/in/nils-fink-42220b257/">LinkedIn</a>
        </div>
}
export default AboutMe;