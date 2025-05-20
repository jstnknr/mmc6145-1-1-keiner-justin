import { Link } from "react-router-dom";
import '../index.css'; 

export default function Header() {
    return (
        <header>
            <img src="/justinHead.gif" alt="a gif of Justin's head moving back and forth" className="logo" />
            <p>Justin Keiner</p>
             <nav>
                 <ul>
                     <li><Link to="/">Home</Link></li>
                     <li><Link to="/about">About</Link></li>
                     <li><Link to="/contact">Contact</Link></li>
                 </ul>
             </nav>
        </header>
    )
}