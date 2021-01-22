import React from "react";

// reactstrap components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  CardBody,
  Card
} from "reactstrap";

// core components
import LandingPageNavbar from "../components/Navbar";
import {useSelector,useDispatch} from "react-redux"

function LandingPage() {

  const {data,loading} = useSelector((state)=>{
    return state
  })
  const dispatch =  useDispatch();


  const generateUrl = async (e) => {

    let uri = document.getElementById('url').value;
    let data = new URLSearchParams();
    data.append("url",uri);
    
    // Send URL to get encoded
    await fetch("http://localhost:5000/url/", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: data
    }).then(result => {
     return result.text()
    }).then(res => {
      console.log(res);
      dispatch({type:"GET_URL",payload:res});
      dispatch({type:"SET_LOADING",payload:false});
      document.getElementById('generated').value = "http://localhost:5000/bittyBit/" + res ; 
    })
    
    
    }





  return (
    <>  
     <LandingPageNavbar />
            <Container>
                <Card>
                    <CardBody>
                        <h3>Welcome to BittyBit URL!™ </h3>
                        Are you sick of posting URLs in emails only to have it break when sent causing the recipient to have to cut and paste it back together? Then you've come to the right place. By entering in a URL in the text field below, we will create a tiny URL that will not break in email postings and never expires.
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <InputGroup>
                        <Input id="url" placeholder="Please enter your url"></Input>
                            <button onClick={(e)=>generateUrl(e)}>Generate url</button>
                        </InputGroup>
                            
                            <Input id="generated" placeholder="Generated url"></Input>
                    </CardBody>
                </Card>
            </Container>
    </>
  );
}

export default LandingPage;
