const fetchChars = async (page = 1) => {
   
    
    const chars = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
        .then(res => res.json())
        .then(res => {        
            let result = res.results.map(char => {
                return({
                    name: char.name,
                    species: char.species,
                    gender: char.gender,
                    id: char.id,
                    image: char.image,
                    fav: false
                }
                )
            })
            
            return result
        }
    );
   
    
    return chars;
}

export default fetchChars;