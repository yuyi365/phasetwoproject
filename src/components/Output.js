import { Message } from 'semantic-ui-react'
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

import {
  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
  RedditIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

const Output = ({clickedMatch, currentNameOne, currentNameTwo}) => {

const styleSet = {
    width: "50%",
    marginLeft: "25%",
    marginTop: "30px",
    textAlign: "center",
    fontSize: "20px",
}
    
return (

  clickedMatch ? <Message style={styleSet} stackable>
    <h1 style={{color : "darkblue"}}>Your perfect night in awaits...</h1>
    <span style={{color : "darkblue"}}>{`${currentNameOne}`}</span><span> would go well with </span><span style={{color : "darkblue"}}>{`${currentNameTwo}`}</span>
    <br></br><br></br>
    <EmailShareButton url="http://localhost:3001/" subject="Check out the perfect activity for a night indoors" body={`The perfect night in: ${currentNameOne} would go well with ${currentNameTwo}`}>
    <span className="share-button"> <EmailIcon size={35} round={true} /></span>
    </EmailShareButton>

    <FacebookShareButton url="http://localhost:3001/" quote="Discover the perfect night in">
    <span className="share-button"> <FacebookIcon size={35} round={true}/></span>
    </FacebookShareButton>

    <LinkedinShareButton url="http://localhost:3001/" title={`The perfect night in: ${currentNameOne} would go well with ${currentNameTwo}`}>
    <span className="share-button"><LinkedinIcon size={35} round={true}/></span>
    </LinkedinShareButton>

    <RedditShareButton url="http://localhost:3001/" title={`The perfect night in: ${currentNameOne} would go well with ${currentNameTwo}`}>
    <span className="share-button"><RedditIcon size={35} round={true}/></span>
    </RedditShareButton>

    <TelegramShareButton url="http://localhost:3001/" title={`The perfect night in: ${currentNameOne} would go well with ${currentNameTwo}`}>
    <span className="share-button"><TelegramIcon size={35} round={true}/></span>
    </TelegramShareButton>

    <TwitterShareButton url="http://localhost:3001/" title={`The perfect night in: ${currentNameOne} would go well with ${currentNameTwo}`}>
    <span className="share-button"><TwitterIcon size={35} round={true}/></span>
    </TwitterShareButton>

    <WhatsappShareButton url="http://localhost:3001/" separator="   " title={`The perfect night in: ${currentNameOne} would go well with ${currentNameTwo}`}>
    <span className="share-button"><WhatsappIcon size={35} round={true}/></span>
    </WhatsappShareButton>
  
  </Message> : null

)
}

export default Output