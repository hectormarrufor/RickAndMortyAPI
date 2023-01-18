import { createSlice } from '@reduxjs/toolkit';
import fetchChars from '../helpers/fetchChars';

const initialState = {
    characters: await fetchChars(),
    isLoading: false,
    pages: 1,
    searchTerms: ['']
};

export const charSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {
        SET_CHARS: (state, action) => {
            console.log(action.payload);
            
            
            
            state.characters = state.characters.concat(action.payload.characters);

            state.pages = action.payload.pages
            
            
            
        },
        toggleLoading: (state) => {
            
            
            state.isLoading == false ? state.isLoading = true : state.isLoading = false;
        },
        setSearch: (state, action) => {
            state.searchTerms = action.payload
        },
        toggleFav: (state, action) => {
            
            
            for(let char of state.characters){
                if (char.id === action.payload){
                    
                    
                    char.fav == false ? char.fav = true : char.fav = false

                    break;
                }
                
                
            }
            
        }
    },
});

// Action creators are generated for each case reducer function
export const { SET_CHARS, toggleLoading, setSearch, toggleFav } = charSlice.actions

export default charSlice.reducer