interface HomepagePops{
    aboutmeClick?: ()=> void;
    projectsClick?: ()=> void;
}

function Homepage({aboutmeClick, projectsClick}: HomepagePops){

    return (
    <div>     
        <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>            
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="/homepage/src/images/AboutMe.jpg" className="d-block w-100" alt="..." onClick={aboutmeClick}></img>
                </div>
                <div className="carousel-item">
                    <img src="/homepage/src/images/AboutMe.JPG" className="d-block w-100" alt="..." onClick={projectsClick}></img>
                </div>
                <div className="carousel-item">
                    <img src="/src/images/Git.jpg" className="d-block w-100" alt="..." onClick={aboutmeClick}></img>
                </div>
                <div className="carousel-item">
                    <img src="./images/Git.jpg" className="d-block w-100" alt="..." onClick={aboutmeClick}></img>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev" >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div> 
        <div>
            <h1 className="display-1 text-center">Welcome to the homepage of Nils Fink</h1>
            <h2 className="text-center">a passionate developer and creator who has built this site to represent himself and showcase his world of programming, as well as personal projects. Dive in and explore Nils' captivating journey through the realm of technology, his innovative ideas, and his pursuit of excellence. From impressive programming ventures to insights into his life and passions - here, you can discover everything about Nils and his endeavors. </h2>
            <h1>Welcome to his digital stage!</h1>
        </div> 
    </div>
    );
}
export default Homepage;