import React, { useState, useEffect, useRef } from 'react';

interface NavigationProps {
    homepageClick?: () => void;
    projectClick?: () => void;
    aboutmeClick?: () => void;
    imprintClick?: () => void;
}

function Navigation({ homepageClick, projectClick, aboutmeClick, imprintClick}: NavigationProps) {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    const navbarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
                setIsNavbarOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleNavbar = () => {
        setIsNavbarOpen(!isNavbarOpen);
    };

    const handleAboutMeClick = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
        if (aboutmeClick) {
            aboutmeClick();
        }
        setIsNavbarOpen(false);
    };

    return (
        <div>
            <nav className={`navbar fixed-top navbar-expand-lg bg-body-tertiary ${isNavbarOpen ? 'show' : ''}`} data-bs-theme="dark" ref={navbarRef}>
                <div className="container-fluid">
                    <button className="btn" onClick={toggleNavbar}>
                        <img src="./images/Logo.jpeg" alt="NilsFink" width="40" height="40" />
                    </button>

                    <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${isNavbarOpen ? 'show' : ''}`} id="navbarNav">
                        <ul className="navbar-nav ">
                            <li className="nav-item">
                                <button className="nav-link active w-100" aria-current="page" onClick={homepageClick}>Home</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link w-100" onClick={projectClick}>Projects</button>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://github.com/NiFink">Github</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://gitlab.mi.hdm-stuttgart.de/">GitLab</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link w-100" href="#contact" onClick={handleAboutMeClick}>Contact</a>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link w-100" onClick={imprintClick}>Impressum</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navigation;
