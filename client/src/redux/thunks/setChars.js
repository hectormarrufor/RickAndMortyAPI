import fetchChars from "../../helpers/fetchChars";
import { SET_CHARS } from "../charSlice";


const setChars = async (dispatch, pages) => {
    console.log(pages);
    
   dispatch(SET_CHARS( {characters: await fetchChars(pages), pages}))
    
    
}


export default setChars;