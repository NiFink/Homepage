interface ContactProps{
    homepageClick?: ()=> void;
}

function Contact({homepageClick}: ContactProps){
    return <div> 
            <h1 className="text-center">Contact me</h1>
            <button onClick={homepageClick}>Back</button>
        </div>
}
export default Contact;