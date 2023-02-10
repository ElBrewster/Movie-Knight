import "../css/Header.scss";
import { GiMountedKnight } from "react-icons/gi";
import { IconContext } from "react-icons";


export default function Header () {
    return (
        <header>
            <div>
                <IconContext.Provider value={{color: " #f6eedf", className: "horse-knight"}}>
                    <GiMountedKnight alt="knight logo"/>    
                </IconContext.Provider>
                <h1>&nbsp;&nbsp;MOVIE KNIGHT</h1>
            </div>
        </header>
    );
}