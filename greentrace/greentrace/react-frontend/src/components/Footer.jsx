import React from 'react'
import logo from '../assets/logo f.png'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope,faArrowRight} from '@fortawesome/free-solid-svg-icons'
import {faInstagram,faFacebook,faTelegram,faTwitter} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <>
    <footer>
        <div className="row">
            <div className="col">
                <img src={logo} className='logo'></img>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum veniam reiciendis consequatur amet, nihil placeat voluptatibus quos, cum voluptates, corporis commodi saepe perferendis. Laborum accusantium explicabo tempora numquam accusamus libero.</p>
            </div>
            <div className="col">
                <h3>Office</h3>
                <p>ITPL Road</p>
                <p>Banglore</p>
                <p>Karnataka,India</p>
                <p className="email-id">abc@gmail.com</p>
                <h4>+91-118974841</h4>
            </div>
            <div className="col">
                <h3>Links</h3>
                <ul>
                    <li><Link to={''}>Home</Link></li>
                    <li><Link to={''}>Vison</Link></li>
                    <li><Link to={''}>Impact</Link></li>
                    <li><Link to={''}>Dashboard</Link></li>
                    <li><Link to={''}>User</Link></li>
                </ul>
            </div>
            <div className="col">
                <h3>Newsletter</h3>
                <form>
                    <FontAwesomeIcon className='far'icon={faEnvelope}/>
                    <input type='email' placeholder='Email'required></input>
                    <button type='submit'><FontAwesomeIcon className='fas'icon={faArrowRight}/></button>
                </form>
                <div className="social-icons">
                    <FontAwesomeIcon className='fab'icon={faFacebook}/>
                    <FontAwesomeIcon className='fab'icon={faTwitter}/>
                    <FontAwesomeIcon className='fab'icon={faTelegram}/>
                    <FontAwesomeIcon className='fab'icon={faInstagram}/>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer
