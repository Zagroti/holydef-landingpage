import React,{Component} from 'react';
import logo from './../Assets/images/logo.png'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faLinkedinIn , faInstagram , faFacebookF} from '@fortawesome/free-brands-svg-icons'

library.add(faLinkedinIn,faInstagram , faFacebookF)

class Footer extends Component{

    render(){
        return(

                <div className="footer bgColor3" >
                    <div className="logo" >
                        <img src={logo} alt="لوگو"/>
                    </div>
                    <div className="socialIcon">
                        <p>
                            <FontAwesomeIcon className="footerIcon" icon={['fab', 'linkedin-in']} />
                            <FontAwesomeIcon className="footerIcon" icon={['fab', 'facebook-f']} />
                            <FontAwesomeIcon className="footerIcon" icon={['fab', 'instagram']} />
                        </p>
                        <p>@ {new Date().getFullYear()} دفاع مقدس</p>

                    </div>
                </div>

        );
    }
}

export default Footer;