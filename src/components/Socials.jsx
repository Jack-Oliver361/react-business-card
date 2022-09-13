import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Socials.css';


function Socials() {

    return (
        <div className='social-container'>
            <a href="https://twitter.com/JaackOliver" target="_blank"><FontAwesomeIcon icon="fa-brands fa-twitter" className='twitter-icon' /></a>
            <a href="https://www.instagram.com/jackoliver361/" target="_blank"><FontAwesomeIcon icon="fa-brands fa-instagram" className='twitter-icon' /></a>
            <a href="https://github.com/Jack-Oliver361" target="_blank"><FontAwesomeIcon icon="fa-brands fa-github" className='twitter-icon' /></a>
            <a href="https://docs.google.com/document/d/14_nUOFqnlVo7EkhvGRYk9UYkPnATSDTg/preview" target="_blank"><FontAwesomeIcon icon="fa-solid fa-file-pdf" className='twitter-icon' /></a>
        </div>
    )
}

export default Socials;
