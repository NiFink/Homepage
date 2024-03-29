interface AboutMePops{
    homepageClick?: ()=> void;
}

function AboutMe({homepageClick}: AboutMePops){
    const style = {padding: "60px"}
    return <div style={style}> 
            <h1 className="text-center">About me</h1>
            <h3 className="text-center">I am a passionate developer and creator who has built this site to represent himself and showcase his world of programming, as well as personal projects. Dive in and explore Nils' captivating journey through the realm of technology, his innovative ideas, and his pursuit of excellence. From impressive programming ventures to insights into his life and passions - here, you can discover everything about Nils and his endeavors.
Welcome to his digital stage!</h3>
            <button className="card text-bg-dark " onClick={homepageClick}>Back</button>
        </div>
}
export default AboutMe;