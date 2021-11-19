import { Link } from 'react-router-dom'
import { Container, Grid, Divider, Button } from 'semantic-ui-react'

const NavBar = () => {

    const buttonStyle = {
        width: "20%",
        margin: "2%",
        borderRadius: "30px",
    }

    return (
        <div>
      <Grid textAlign='center' stackable>

        <Button className="navButton" style={buttonStyle} as={Link} to="/">
            Home
        </Button>

        <Button className="navButton" style={buttonStyle} as={Link} to="/addnewfood">
            Add New Food
        </Button>

        <Button className="navButton" style={buttonStyle} as={Link} to="/contact">
            Contact
        </Button>

      </Grid>
      
      <Divider />
    </div>
    )
}

export default NavBar
