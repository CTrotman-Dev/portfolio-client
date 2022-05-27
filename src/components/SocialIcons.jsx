import React from "react";

// import {SocialIcon} from 'react-social-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faGithub } from '@fortawesome/free-solid-svg-icons';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';



const SocialIcons = () => {

    return (
        <div className="social-icons">
      <FontAwesomeIcon className="social-icon" icon={faLinkedin} />
      <FontAwesomeIcon className="social-icon" icon={faGithub} />
            {/* <SocialIcon url="https://github.com/CTrotman-Dev"/>
        <SocialIcon url="https://uk.linkedin.com/in/craig-trotman-80237267?trk=people-guest_people_search-card&original_referer=https%3A%2F%2Fwww.linkedin.com%2F" /> */}
        </div>
    );
}

export default SocialIcons;