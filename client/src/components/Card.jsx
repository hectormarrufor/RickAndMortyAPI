import { useDispatch, useSelector } from "react-redux";
import { toggleFav } from "../redux/charSlice";

const Card = ({name, species, gender, id, image, onClose, fav}) => {
    const characters = useSelector(state => state.characters)
    const dispatch = useDispatch();
    const handleFav = () => {
        dispatch(toggleFav(id));
        
        
    }
    return (
        <div className="card">
            <button className="btn btn-close">X</button>
            <h3>{name}</h3>
            <p>{species}</p>
            <p>{gender}</p>
            <img src={image} alt={name} />
            <button className="btn btn-like" onClick ={handleFav}>like</button>
        </div>
    )
};

export default Card;
