interface AboutMePops{
    homepageClick?: ()=> void;
}

function AboutMe({homepageClick}: AboutMePops){
    return <div> 
            <h1 className="text-center">About me</h1>
            <h3 className="text-center">Comming Soon</h3>
            <button onClick={homepageClick}>Back</button>
        </div>
}
export default AboutMe;