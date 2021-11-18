import { createContext, useState } from "react";

// Context
const DataContext = createContext();

// Provider
const DataProvider = ({children}) => {

    const [cocktail, setCocktail] = useState(null);
    const [game, setGame] = useState(null);
    const [movie, setMovie] = useState(null);
    const [beer, setBeer] = useState(null);
    const [food, setFood] = useState(null);

    return (

        <DataContext.Provider
            value={{
                cocktail,
                setCocktail,
                game,
                setGame,
                movie,
                setMovie,
                beer,
                setBeer,
                food,
                setFood
            }}
        >{children}</DataContext.Provider>

    )
}

export { DataContext, DataProvider}