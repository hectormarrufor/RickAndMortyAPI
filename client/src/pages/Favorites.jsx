import { useEffect } from "react";
import { useSelector } from "react-redux";
import Card from "../components/Card";

const Favorites = () => {
    const favorited = useSelector(state => state.charReducer.characters.filter(char => char.fav === true))
    useEffect(() => {
      document.title = "Rick & Morty API - Favorites";
    }, []);
    
    
    return (
        <div className="cards">
            {favorited.map((personaje) => <Card key = {personaje.id} {...personaje}/>)}
        </div>
    )
};

export default Favorites;
