import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../redux/charSlice";

const SearchBar = () => {
    let searchInput = useRef();
    const dispatch = useDispatch();
    const value = useSelector(state => state.charReducer.searchTerms)
    const handleChange = (e) => {
        const input = e.target.value.trim();
        const searchTerms = input.split(' ');
        dispatch(setSearch(searchTerms))
        
    }
    const handleClick = () => {
        dispatch(setSearch(''));
        searchInput.current.value = '';
    }
    useEffect(() => {
      document.title = `Rick & Morty API - ${searchInput.current.value}`
    })
    
    
    return (
        <div className="search-bar">
            <label htmlFor="search">Buscar: </label>
            <input type="text" name="search" onChange={handleChange} ref = {searchInput}/>
            <button onClick={handleClick}>X</button>
        </div>
    )
};

export default SearchBar;
