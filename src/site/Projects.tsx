interface ProjectsPops{
    homepageClick?: ()=> void;
}

function Projects({}: ProjectsPops){
    return <div style={{paddingTop: "80px", marginLeft:"15px", marginRight:"15px"}}> 
            <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
                    <div className="card text-bg-dark mb-3">
                        <img src="./images/Californiagram.png" className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title"><b>Californiagram</b></h5>
                            <h6 className="card-subtitle mb-2 text-body-light">2024 | Typescript, Angular</h6>
                            <p className="card-text">An app showcasing California's beauty through captivating photo experiences.</p>
                            <a href="https://github.com/NiFink/Californiagram.git" className="btn btn-light">Go to Git</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card text-bg-dark mb-3">
                        <img src="./images/MyWebsite.jpg" className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title"><b>Homepage</b></h5>
                            <h6 className="card-subtitle mb-2 text-body-light">2024 | Typescript, React</h6>
                            <p className="card-text">Here, you can discover everything about Nils and his endeavors</p>
                            <a href="https://github.com/NiFink/homepage" className="btn btn-light">Go to Git</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card text-bg-dark mb-3">
                    <img src="./images/SpeisenOase-Logo.jpg" className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title"><b>Speisenoase</b></h5>
                        <h6 className="card-subtitle mb-2 text-body-light">2023 | Java, JavaFX, JSON</h6>
                        <p className="card-text">A small online marketplace for groceries and various other essentials.</p>
                        <a href="https://github.com/NiFink/Speisenoase" className="btn btn-light">Go to Git</a>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card text-bg-dark mb-3">
                        <img src="./images/Rayleigh.jpeg" className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title"><b>Rayleigh</b></h5>
                            <h6 className="card-subtitle mb-2 text-body-light">2022 | C#, Windows Forms</h6>
                            <p className="card-text">Your trusted voice assistant, ready to help and simplify your daily tasks with just a word.</p>
                            <a href="https://github.com/NiFink/Rayleigh" className="btn btn-light">Go to Git</a>

                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card text-bg-dark mb-3">
                        <img src="./images/LittleAdventure2.png" className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title"><b>A little Adventure</b></h5>
                            <h6 className="card-subtitle mb-2 text-body-light">2021 | C#, Windows Forms</h6>
                            <p className="card-text">A courageous knight valiantly defends his village against perilous creatures of darkness.</p>
                            <a href="https://github.com/NiFink/projektGame.git" className="btn btn-light">Go to Git</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
}
export default Projects;