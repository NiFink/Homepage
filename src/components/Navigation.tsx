interface NavigationProps {
    homepageClick?: () => void;
    projectClick?: () => void;
    contactClick?: () => void;
}

function Navigation({ homepageClick, projectClick, contactClick }: NavigationProps) {
    return (
        <div> 
            <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid justify-content-center">
                    <button className="btn" onClick={homepageClick}>
                        <img src="./images/Logo.jpeg" alt="NilsFink" width="40" height="40" />
                    </button>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav text-center">
                            <li className="nav-item">
                                <button className="nav-link active" aria-current="page" onClick={homepageClick}>Home</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link"  onClick={projectClick}>Projects</button>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://github.com/NiFink">Github</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://gitlab.mi.hdm-stuttgart.de/">GitLab</a>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link disabled" aria-disabled="true" onClick={contactClick}>Contact</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navigation;
