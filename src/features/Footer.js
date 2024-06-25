import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Footer =()=>{
    return (<div className="footer">
        <div className="footer-content">
            <div className="foot-list">
            <ul>
                <li>Terms of service</li>
                <li>Contact us</li>
                <li>Return and exchange</li>
                <li>Code of etics</li>
            </ul>
            <ul>
                <li>About us</li>
                <li>Сollaboration</li>
                <li>Information</li>
                <li>FAQs</li>
            </ul>
            <div className="social-media">
                <FaTwitter className="icon"/>
                <FaInstagram className="icon"/>
                <FaTelegram className="icon"/>
                <IoMdMail className="icon"/>
            </div>
            </div>
        </div>
    </div>)
}

export default Footer