import "../css/Footer.scss";
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { BsDot } from "react-icons/bs";

export default function Footer () {
    return (
        <footer>
            <p>Find Us:&nbsp;&nbsp;Karrar
            <BsDot />
            <SiGithub type="button" className="github"/>&nbsp;
            <SiLinkedin className="linkedin"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;El
            <BsDot />
            <SiGithub className="github"/>&nbsp;
            <SiLinkedin className="linkedin"/>&nbsp;&nbsp;
            </p>
        </footer>
    )
}