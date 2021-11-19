import { Grid, Button } from 'semantic-ui-react';
import TileContent from './TileContent';
import SecondTileContent from './SecondTileContent';

const Tiles = ({currentNameOne, currentImageOne, currentDescriptionOne, currentNameTwo, currentImageTwo, currentDescriptionTwo, handleClickOne, handleClickTwo, catOne, catTwo, handleComparison, displayItem, clickedMatch, handleTryAgain, tryAgain}) => {

  const styleSet = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
  }

    return (

      <Grid container columns={3} stackable>

        <Grid.Column style={styleSet}>
        <TileContent
          currentNameOne={currentNameOne}
          currentImageOne={currentImageOne}
          currentDescriptionOne={currentDescriptionOne}
          handleClickOne={handleClickOne}
          displayItem={displayItem}
          catOne={catOne}
          catTwo={catTwo}
          clickedMatch={clickedMatch}
          tryAgain={tryAgain}
        />
        </Grid.Column>

        <Grid.Column style={styleSet}>

          {!clickedMatch ? <Button size="massive"
            onClick={handleComparison}
            className={clickedMatch ? "disabled ui button" : "ui button"}
            id={tryAgain ? null : "matchButton"}
            style = {{ borderRadius: "30px" }}
          >Find A Match</Button>

          : <Button size="massive"
            onClick={handleTryAgain}
            className={tryAgain ? "disabled ui button" : "ui button"}
            id={tryAgain ? null : "tryAgain"}
            style = {{ borderRadius: "30px" }}
          >Try Again</Button>}

        </Grid.Column>

        <Grid.Column style={styleSet}>
        <SecondTileContent
          currentNameTwo={currentNameTwo}
          currentImageTwo={currentImageTwo}
          currentDescriptionTwo={currentDescriptionTwo}
          handleClickTwo={handleClickTwo}
          displayItem={displayItem}
          catOne={catOne}
          catTwo={catTwo}
          clickedMatch={clickedMatch}
        />
        </Grid.Column>

      </Grid>
    )
}

export default Tiles
