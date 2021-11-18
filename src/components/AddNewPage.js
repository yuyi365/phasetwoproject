import React, {useState} from 'react'
import { Button, Form, Message, Container } from 'semantic-ui-react'

const FormExampleForm = ({addNewFood}) => {

const [foodName, setFoodName] = useState("");
const [foodImage, setFoodImage] = useState("");

const styleSet = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}

const handleSubmit = (e) => {
    e.preventDefault();
    const newData = 
    {
        name : foodName,
        image : foodImage,
    }
    fetch('https://phase-2-backend.herokuapp.com/eats', {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(newData)
    })
    .then((r) => r.json())
    .then((newItem) => addNewFood(newItem))
    e.target.reset();
    alert("Thank you for your submission!")
}

return (

    <>
    <Message 
        header="In case you are craving something new to eat, please add a new food item here!"
        style={{textAlign : "center", width : "50%", alignItems: "center", marginLeft: "25%", marginTop: "5%", marginBottom: "5%", borderRadius: "30px", color: "grey"}}
        floating
    />

<Container style={{backgroundColor : "grey", padding: "5%", borderRadius: "200px"}}>
  <Form style = {styleSet} onSubmit={handleSubmit}>
    <Form.Field 
        style={{
            padding:"5%",
            textAlign : "center",
            width: "40%",
        }}
    >
      <label style={{fontSize: "20px", padding: "3%"}}>Product Name</label>
      <input placeholder='ex: fries, gummy worms' required style={{textAlign : "center"}} onChange={(e) => setFoodName(e.target.value)}/>
    </Form.Field>

    <Form.Field
        style={{
            padding:"5%",
            textAlign : "center",
            width: "40%"
        }}
    >
      <label style={{fontSize: "20px", padding: "3%"}}>Link to Image</label>
      <input placeholder='ex: https://fries.png' required style={{textAlign : "center"}} onChange={(e) => setFoodImage(e.target.value)}/>
    </Form.Field>

    
    <Button type='submit' id="submitButton">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    
    Submit
    </Button>

  </Form>
  </Container>
  <div style={{padding:"3%"}}></div>
  </>
)

}

export default FormExampleForm
