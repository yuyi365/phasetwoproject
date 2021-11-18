import React, {useState, useContext} from 'react'
import Tiles from './Tiles'
import Output from './Output'
import { DataContext } from '../context/data';

const ContentContainter = () => {

    const {cocktail, game, movie, beer, food} = useContext(DataContext)

    // states for first tile
    const [currentNameOne, setCurrentNameOne] = useState(null);
    const [currentImageOne, setCurrentImageOne] = useState('https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png');
    const [currentDescriptionOne, setCurrentDescriptionOne] = useState(null);

    // states for second tile
    const [currentNameTwo, setCurrentNameTwo] = useState(null);
    const [currentImageTwo, setCurrentImageTwo] = useState('https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png');
    const [currentDescriptionTwo, setCurrentDescriptionTwo] = useState(null);

    const [catOne, setCatOne] = useState(null);
    const [catTwo, setCatTwo] = useState(null);

    const [displayItem, setDisplayItem] = useState(false);

    // state for if the "match button" is clicked, or not
    const [clickedMatch, setClickedMatch] = useState(false);
    const [tryAgain, setTryAgain] = useState(false);

    const titleCase = (str) => {
        let splitStr = str.split(' ');
        for (let i = 0; i < splitStr.length; i++) {
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
        }
        return splitStr.join(' '); 
     }

     const handleComparison = () => {
        if (currentNameOne && currentNameTwo !== null) {
          setDisplayItem((displayItem) => !displayItem)
          setClickedMatch((clickedMatch) => !clickedMatch)
        } else {
          return alert("Please select two activity types")
        }
      }

      const handleTryAgain = () => {
        setTryAgain((tryAgain) => !tryAgain)
        window.location.reload(false);
      }
  
    const handleClickOne = (e) => {
        setCatOne(e.target.value);
        if (e.target.value === "cocktail") {
            setCurrentNameOne(cocktail.strDrink)
            setCurrentImageOne(cocktail.strDrinkThumb)
        } else if (e.target.value === "game") {
            let randomGame = Math.floor(Math.random() * 100)
            const gameNameNew = game[randomGame].handle;
            const gameNameNewRemove = gameNameNew.replace(/-/g, " ");
            setCurrentNameOne(titleCase(gameNameNewRemove))
            setCurrentImageOne(game[randomGame].image_url)
            setCurrentDescriptionOne(game[randomGame].description_preview)
        } else if (e.target.value === "movie") {
            setCurrentNameOne(movie.Title)
            setCurrentImageOne(movie.Poster)
            setCurrentDescriptionOne(movie.Plot)
        } else if (e.target.value === "beer") {
            setCurrentNameOne(beer.name)
            setCurrentImageOne('https://www.mashed.com/img/uploads/2016/11/beer-glass.jpg')
            setCurrentDescriptionOne(beer.description)
        } else if (e.target.value === "food") {
            let randomFood = Math.floor(Math.random() * 10)
            setCurrentNameOne(food[randomFood].name)
            setCurrentImageOne(food[randomFood].image)
        }
    }

    const handleClickTwo = (e) => {
        setCatTwo(e.target.value);
        if (e.target.value === "cocktail") {
            setCurrentNameTwo(cocktail.strDrink)
            setCurrentImageTwo(cocktail.strDrinkThumb)
        } else if (e.target.value === "game") {
            let randomGame = Math.floor(Math.random() * 100)
            const gameNameNew = game[randomGame].handle;
            const gameNameNewRemove = gameNameNew.replace(/-/g, " ");
            setCurrentNameTwo(titleCase(gameNameNewRemove))
            setCurrentImageTwo(game[randomGame].image_url)
            setCurrentDescriptionTwo(game[randomGame].description_preview)
        } else if (e.target.value === "movie") {
            setCurrentNameTwo(movie.Title)
            setCurrentImageTwo(movie.Poster)
            setCurrentDescriptionTwo(movie.Plot)
        } else if (e.target.value === "beer") {
            setCurrentNameTwo(beer.name)
            setCurrentImageTwo('https://www.mashed.com/img/uploads/2016/11/beer-glass.jpg')
            setCurrentDescriptionTwo(beer.description)
        } else if (e.target.value === "food") {
            let randomFood = Math.floor(Math.random() * 10)
            setCurrentNameTwo(food[randomFood].name)
            setCurrentImageTwo(food[randomFood].image)
        }
    }

    return (
        <div style={{
            paddingBottom : "5%",
            marginTop: "3%",
        }}>

            <Tiles 
                currentNameOne={currentNameOne}
                currentImageOne={currentImageOne}
                currentDescriptionOne={currentDescriptionOne}
                currentNameTwo={currentNameTwo}
                currentImageTwo={currentImageTwo}
                currentDescriptionTwo={currentDescriptionTwo}
                handleClickOne={handleClickOne}
                handleClickTwo={handleClickTwo}
                catOne={catOne}
                catTwo={catTwo}
                handleComparison={handleComparison}
                displayItem={displayItem}
                clickedMatch={clickedMatch}
                handleTryAgain={handleTryAgain}
                tryAgain={tryAgain}
            />

            <Output 
                clickedMatch={clickedMatch}
                currentNameOne={currentNameOne}
                currentNameTwo={currentNameTwo}
            />
        </div>
    )
}

export default ContentContainter
