import { Button, Form, Message } from 'semantic-ui-react'
import { useState } from 'react';

const Contact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [comment, setComment] = useState("");

    const addComments = (newComment) => {
        setComment([
          ...comment,
          newComment
        ])
      }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const newData = 
        {
            name : name,
            comment : comment,
            email : email,
        }
        fetch(`${process.env.REACT_APP_API_URL}/contact`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(newData)
        })
        .then((r) => r.json())
        .then((newItem) => addComments(newItem))
        e.target.reset();
        alert("Thank you for your comments! I will reach out :)")
    }

    return (
    
        <>
        <Message 
            header="Interested in collaborating? Contact me here!"
            style={{textAlign : "center", width : "50%", alignItems: "center", marginLeft: "25%", marginTop: "5%", borderRadius: "30px", color: "grey"}}
            floating
        />
        
        <Form style={{marginLeft:"33%", justifyItems: "center"}} onSubmit={handleSubmit}>
            <Form.Field 
                style={{
                    textAlign : "center",
                    width: "50%",
                }}
        >
          <label style={{fontSize: "20px", padding: "3%", color: "white"}}>Your Name</label>
          <input placeholder='First and Last Name' required style={{textAlign : "center"}} onChange={(e) => setName(e.target.value)}/>
       
          <label style={{fontSize: "20px", padding: "3%", color: "white"}}>Your Email</label>
          <input placeholder='hello@gmail.com' required style={{textAlign : "center"}} onChange={(e) => setEmail(e.target.value)}/>
      
          <label style={{fontSize: "20px", paddingTop: "10%", paddingBottom: "5%", color: "white"}}>Message</label>
          <textarea type="text" placeholder='ex: Hello, here are some ideas...' required style={{textAlign : "center"}} onChange={(e) => setComment(e.target.value)}/>
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