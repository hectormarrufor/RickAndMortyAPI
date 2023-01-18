import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Cards from "./components/Cards";
import Favorites from "./pages/Favorites";
import setChars from "./redux/thunks/setChars";
import NavBar from "./ui/NavBar";

const App = () => {
        
    return (
        <div className="app">
            <NavBar />
            <Routes>
                <Route path = '/' element ={<Cards />}/>
                <Route path = '/favorites' element ={<Favorites />}/>
            </Routes>
            
        </div>
    )
};

export default App;
