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
  Card,
  Row,
  Col,
} from "reactstrap";

// core components
import LandingPageNavbar from "../components/Navbar";
import LandingPageHeader from "../components/Header";
import DefaultFooter from "../components/Footer";
import CreateUrl from "../actions/actions";

function LandingPage() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);


  const generateUrl = async (e) => {

    let uri = document.getElementById('url').value;
    console.log(uri);
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
      document.getElementById('generated').value = "http://localhost:5000/bittyBit/" + res ; 
    })
    
    
    }

  }

 


  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
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
