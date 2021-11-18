import { Button, Form, Message } from 'semantic-ui-react'

const Contact = () => {

    
    return (
    
        <>
        <Message 
            header="Interested in collaborating? Contact me here!"
            style={{textAlign : "center", width : "50%", alignItems: "center", marginLeft: "25%", marginTop: "5%", borderRadius: "30px", color: "grey"}}
            floating
        />
        
        <Form style={{marginLeft:"33%", justifyItems: "center"}}>
            <Form.Field 
                style={{
                    textAlign : "center",
                    width: "50%",
                }}
        >
          <label style={{fontSize: "20px", padding: "3%", color: "white"}}>Your Name</label>
          <input placeholder='First and Last Name' required style={{textAlign : "center"}}/>
       

      
          <label style={{fontSize: "20px", paddingTop: "10%", paddingBottom: "5%", color: "white"}}>Message</label>
          <textarea type="text" placeholder='ex: Hello, here are some ideas...' required style={{textAlign : "center"}}/>
        </Form.Field>
        
        <div style={{marginLeft:"18%"}}>
        <Button type='submit' id="submitButton">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        
        Submit
        </Button>
        </div>
      </Form>
   
      <div style={{padding:"3%"}}></div>
      </>
    )
}

    export default Contact