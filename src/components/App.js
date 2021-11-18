import { Route, Switch } from "react-router-dom";
import { useEffect, useContext } from "react";
import ContentContainter from './ContentContainter';
import NavBar from './NavBar';
import HeaderFile from './HeaderFile'
import Contact from "./Contact";
import AddNewPage from "./AddNewPage";
import { DataContext } from '../context/data'

import './App.css';
import particlesOptions from "./particles.json";

import { Particles } from "react-tsparticles";

const App = () => {

  const movieOptions = ['0111161', '15097216', '0068646', '0468569', '0071562', '0108052', '0167260', '0110912', '0060196', '0120737']
  let movieRandom = movieOptions[Math.floor(Math.random() * movieOptions.length)]

  const {setCocktail, setGame, setMovie, setBeer, food, setFood} = useContext(DataContext)

  const [comment, setComment] = useState([]);

  useEffect(() => {
      fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then((r) => r.json())
      .then((data) => {
          setCocktail(data.drinks[0]);
      })
      fetch("https://api.boardgameatlas.com/api/search?limit=100&username=trentellingsen&client_id=brAYmW2oQo")
      .then((r) => r.json())
      .then((data) => {
            setGame(data.games)
      })
      fetch(`https://www.omdbapi.com/?i=tt${movieRandom}&type=movie&apikey=319e819e&`)
      .then((r) => r.json())
      .then((data) => {
          setMovie(data);
      })
      fetch("https://api.punkapi.com/v2/beers/random")
        .then((r) => r.json())
        .then((data) => {
            setBeer(data[0])
        })
      fetch(`${process.env.REACT_APP_API_URL}/eats`)
      .then((r) => r.json())
        .then((data) => {
            setFood(data)
        })

  }, [])

  const addNewFood = (newFood) => {
    setFood([
      ...food,
      newFood
    ])
  }

  const addComments = (newComment) => {
    setComment([
      ...comment,
      newComment
    ])
  }

  return (
    <>
    <Particles className="particles" options={particlesOptions}/>
    
    <div className="App">
      <HeaderFile />
      <NavBar />
      <Switch>
        <Route exact path="/addnewfood">
          <AddNewPage 
            addNewFood={addNewFood}
          />
        </Route>
        <Route exact path="/contact">
          <Contact 
            addComments={addComments}
          />
        </Route>
        <Route exact path="/">
          <ContentContainter />
        </Route>
      </Switch>
      
    </div>
    </>
  );
}

export default App;
