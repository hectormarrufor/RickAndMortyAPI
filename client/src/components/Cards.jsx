import { setAutoFreeze } from "immer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleLoading } from "../redux/charSlice";
import setChars from "../redux/thunks/setChars";
import Card from "./Card";

const Cards = () => {
    const dispatch = useDispatch();
    const {pages, characters, searchTerms} = useSelector((state) => state.charReducer);

    useEffect(() => {
        document.title = "Rick & Morty API";
      }, []);
    
    
    let selectedCharacters = [...characters];
    
     
    searchTerms.length >= 1 && searchTerms.forEach(term => {
        selectedCharacters = selectedCharacters.filter(char => char.name.toLowerCase().includes(term.toLowerCase()) || char.species.toLowerCase().includes(term.toLowerCase()) || char.gender.toLowerCase().includes(term.toLowerCase()))
    });

    // console.log(selectedCharacters);
    
    const fetch20more = async () => {
        dispatch(toggleLoading());
        await setChars(dispatch, pages + 1);
        dispatch(toggleLoading());
    }
    
    if (searchTerms[0] != ''){
        return (
            <div className="cards">
                {selectedCharacters.map((personaje) => <Card key = {personaje.id} {...personaje}/>)}
            </div>
        )
    }
    else {
        return (
            <div className="cards">
                <button onClick={fetch20more}>Cargar 20 personajes mas</button>
                {characters.map((personaje) => <Card key = {personaje.id} {...personaje}/>)}
                <button onClick={fetch20more}>Cargar 20 personajes mas</button>
            </div>
        )
    }

    
};

export default Cards;
