import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProfilePic from '../assets/profile-pic.jpg';
import './ProfileInfo.css';
function ProfileInfo() {
    library.add(fas, fab);
    return (
        <div className='profile'>
            <img src={ProfilePic} alt='Profile picture' className='profile-pic' />
            <h2 className='profile-name'>Jack Oliver</h2>
            <h4 className='profile-title'>Graduate Computer Scientist</h4>
            <h5 className='profile-email'>Jackoliver361@gmail.com</h5>
            <div className='btn-group'>
                <button type='button' className='btn-email' ><FontAwesomeIcon icon="fa-solid fa-envelope" /> Email</button>
                <button type='button' className='btn-social'><FontAwesomeIcon icon={"fa-brands fa-linkedin"} /> LinkedIn</button>
            </div>
        </div >
    )
}
export default ProfileInfo;