interface HomepagePops{
    aboutmeClick?: ()=> void;
    projectsClick?: ()=> void;
}

function Homepage({aboutmeClick, projectsClick}: HomepagePops){
    const styletop ={paddingTop: "80px"}
    return (
    <div style={styletop}>     
        <h1 className="display-1 text-center">Welcome to the homepage of Nils Fink</h1>
        <div id="carouselExampleIndicators" className="carousel slide mt-5 p-2">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>            
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="./images/AboutMe.jpg" className="d-block w-100" alt="..." onClick={aboutmeClick}></img>
                </div>
                <div className="carousel-item">
                    <img src="./images/Projects2.jpg" className="d-block w-100" alt="..." onClick={projectsClick}></img>
                </div>
                <div className="carousel-item">
                    <a href="https://github.com/NiFink">
                        <img src="./images/Github.jpg" className="d-block w-100" alt="..." ></img>
                    </a>
                </div>
                <div className="carousel-item">
                    <a href="https://gitlab.mi.hdm-stuttgart.de/">
                        <img src="./images/GitLab.jpg" className="d-block w-100" alt="..." onClick={aboutmeClick}></img>
                    </a>
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
        <div className="pt-5">
            <div className="card text-bg-dark ">
                <div className="row g-0 justify-content-center align-items-center">
                    <div className="col-md-4 ">
                    <img src="./images/Californiagram.png" className="img-fluid rounded-start" alt="..." ></img>
                    </div>
                    <div className="col-md-8">
                    <div className="card-body ">
                        <div className="card-header">
                            Current project
                        </div>
                        <h1 className="card-title">Californiagram</h1>
                        <h5 className="card-text">A stunning app capturing and sharing the beauty of California through effortless and captivating photo experiences</h5>
                        <a href="https://github.com/NiFink/Californiagram" className="btn text-bg-light w-50 mx-auto">Go to Git</a>
                        <p className="card-text"><small className="text-bg-dark">Last updated 3 mins ago</small></p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="pt-3">
            <div className="card text-bg-dark ">
                <div className="row g-0 justify-content-center align-items-center">
                    <div className="col-md-8">
                        <div className="card-body">
                            <div className="card-header">
                                <h6>Latest project</h6>
                            </div>
                            
                            <h1 className="card-title">Homepage</h1>
                            <h5 className="card-text">Here, you can discover everything about Nils and his endeavors</h5>
                            <a href="https://github.com/NiFink/Californiagram" className="btn text-bg-light w-50 mx-auto">Go to Git</a>
                            <h6 className="card-text"><small className="text-bg-dark">Last updated 3 mins ago</small></h6>
                        </div>
                    </div>
                    <div className="col-md-4 ">
                        <img src="./images/Logo.jpeg" className="img-fluid rounded-start" alt="..." ></img>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
export default Homepage;