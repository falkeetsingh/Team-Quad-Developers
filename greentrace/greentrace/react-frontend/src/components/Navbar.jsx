
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from "../assets/logo f.png"
import {faHouseChimneyWindow, faTableColumns,faEye,faUser} from '@fortawesome/free-solid-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons';


const scrollToTop=()=>{
    window.scrollTo(0,0);
}
const Navbar = () => {
  return (
    <>
    <nav>
        <div className="logo">
            <img src={logo}></img>
        </div>
        <ul>
            <li className="list">
                <Link to={"/#Home"} onClick={scrollToTop}>
                <span className="icon"><FontAwesomeIcon icon={faHouseChimneyWindow}/></span>
                <span className="text">Home</span>
                </Link>
            </li>
            <li className="list">
                <a href="/#Vision">
                <span className="icon"><FontAwesomeIcon icon={faEye}/></span>
                <span className="text">Vision</span>
                </a>
            </li>
            <li className="list">
                <a href="/#Impact">
                <span className="icon"><FontAwesomeIcon icon={faReact}/></span>
                <span className="text">Impact</span>
                </a>
            </li>
            <li className="list">
                <Link to={"/Dashboard"} onClick={scrollToTop}>
                <span className="icon"><FontAwesomeIcon icon={faTableColumns}/></span>
                <span className="text">DashBoard</span>
                </Link>
            </li>
            <li className="list">
                <Link to={"/signUp"} onClick={scrollToTop}>
                <span className="icon"><FontAwesomeIcon icon={faUser}/></span>
                <span className="text">User
                
                </span>
                </Link>
            </li>
        </ul>
    </nav>
    </>
  )
}

export default Navbar
