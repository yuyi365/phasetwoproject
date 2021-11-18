import {useContext} from 'react'
import { Card, Image, Button } from 'semantic-ui-react'
import { DataContext } from '../context/data';

const SecondTileContent = ({currentNameTwo, currentImageTwo, currentDescriptionTwo, handleClickTwo, displayItem, catOne, catTwo, clickedMatch}) => {

    const {cocktail, game, movie, beer, food} = useContext(DataContext)
    
    const styleSet = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }

    return (
    <div>

    
    {!clickedMatch && 
    
    <Card> <Card.Content
            style={{ textAlign: "center", fontSize: "25px"}}
        > 
            Pick another activity...
        </Card.Content> 
    
    <Button.Group 
                widths='5'
                style={styleSet}
            >
                <Button value="beer" onClick={handleClickTwo} className={cocktail === null || beer === null || game === null || food === null || movie === null || catOne === "beer" || catTwo === "beer" ? "ui disabled button" : "ui button"}>🍺</Button>
                <Button value="movie" onClick={handleClickTwo} className={cocktail === null || beer === null || game === null || food === null || movie === null || catOne === "movie" || catTwo === "movie" ? "ui disabled button" : "ui button"}>🎬</Button>
                <Button value="cocktail" onClick={handleClickTwo} className={cocktail === null || beer === null || game === null || food === null || movie === null || catOne === "cocktail" || catTwo === "cocktail" ? "ui disabled button" : "ui button"}>🍸</Button>
                <Button value="game" onClick={handleClickTwo} className={cocktail === null || beer === null || game === null || food === null || movie === null || catOne === "game" || catTwo === "game" ? "ui disabled button" : "ui button"}>🎲</Button>
                <Button value="food" onClick={handleClickTwo} className={cocktail === null || beer === null || game === null || food === null || movie === null || catOne === "beer" || catTwo === "beer" ? "ui disabled button" : "ui button"}>🍔</Button>
            </Button.Group> 
    </Card>}
        
        
        {displayItem ?
        
        <Card>
            <Image src={currentImageTwo} 
                style={{ 
                    height: "300px",
                    maxWidth: "100%",
                    borderRadius: "100px"
                }}
            />
            <Card.Content>
            <Card.Header
                style={{ textAlign: "center"}}
            >{currentNameTwo}</Card.Header>
            <Card.Description
                style={{ height: "30px", overflow: "auto", textAlign: "center"}}
            >{currentDescriptionTwo}</Card.Description>
            </Card.Content>
        </Card> : null}
    </div>
    )
}

export default SecondTileContent
