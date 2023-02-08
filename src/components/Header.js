import "../css/Header.scss";
import logo from "../assets/logo.svg";
import { GiMountedKnight } from "react-icons/gi";


export default function Header () {
    return (
        <header>
            <div>
                <GiMountedKnight alt="knight logo"/>
                <h1>Movie Knight</h1>
            </div>
        </header>
    );
}