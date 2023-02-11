import "../css/Footer.scss";
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { BsDot } from "react-icons/bs";

export default function Footer () {
    return (
        <footer>
            <p>Created By:&nbsp;&nbsp;Karrar
            <BsDot />
            <a href="https://github.com/KarrarQ" aria-label="Go to Karrar's github page" className="anchor">
                <SiGithub type="button" className="github"/>&nbsp;
            </a>
            <a href="https://www.linkedin.com/in/karrar-qasim-b6307024b/" aria-label="Go to Karrar's linked-in page" className="anchor">
                <SiLinkedin className="linkedin"/>
            </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;El
            <BsDot />
            <a href="https://github.com/ElBrewster" aria-label="Go to El's github page" className="anchor">
                <SiGithub className="github"/>&nbsp;
            </a>
            <a href="https://www.linkedin.com/in/el-brewster-9817b0255/" aria-label="Go to El's linked-in page" className="anchor">
                <SiLinkedin className="linkedin"/>&nbsp;&nbsp;
            </a>
            </p>
        </footer>
    )
}