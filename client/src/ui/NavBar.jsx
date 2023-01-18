import { NavLink } from "react-router-dom";
import SearchBar from "../components/SearchBar";

const NavBar = () => {
    
    return (
        <div className="nav-bar">
            <h2>Rick & Morty API</h2>

            <SearchBar />

            <ul className="nav-link">
                <NavLink to = '/favorites'>Favoritos</NavLink>
                <NavLink to = '/'>Home</NavLink>
            </ul>
        </div>
    )
};

export default NavBar;
