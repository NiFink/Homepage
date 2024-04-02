interface ImpressumProps{
    homepageClick?: ()=> void;
}

function Imprint({homepageClick}: ImpressumProps){

    return <div  className="text-center" style={{padding:"70px"}}>
        <footer>
            <h2>Imprint</h2>
            <p><strong>Responsible for content according to § 55 Abs. 2 RStV (German Interstate Broadcasting Treaty):</strong><br />
            Nils Fink<br />
            Jägerstrasse<br />
            71665, Vaihingen an der Enz<br />
            nils@team-fink.de<br />
            </p>
            <p><strong>Disclaimer:</strong><br />
    Despite careful content control, we assume no liability for the content of external links. The operators of the linked pages are solely responsible for their content.</p>

    <p><strong>Copyright:</strong><br />
    The content and works provided on these web pages are governed by the copyright laws of Germany. Duplication, processing, distribution, or any form of commercialization of such material beyond the scope of the copyright law shall require the prior written consent of its respective author or creator.</p>

    <p><strong>Data Protection:</strong><br />
    This website does not collect or process any personal data from its users. You can browse anonymously without providing any personal information.</p>

    <p><strong>Image Credits:</strong><br />
    The images used on this website are sourced from Bing Generator, Nintendo, GitHub, and GitLab.</p>

        </footer>
    </div>
}
export default Imprint;