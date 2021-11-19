import { Header } from 'semantic-ui-react';

const HeaderFile = () => {

    const styleHeader = {
        textAlign : "center",
        fontSize : "30px",
        paddingTop : "50px",
    }

    const headerTitle = {
        color : "white",
        fontFamily: "Audiowide",
        fontSize: "3.5vw"
    }

    return (
        <Header style={styleHeader}>
            <h1 style={headerTitle}>Discover Your Perfect Night In!</h1>
        </Header>
    )
}

export default HeaderFile
