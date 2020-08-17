import React from "react";
import Page from "../components/Page"
import { Form, Button } from "react-bootstrap"


class Contents extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        email:"dkaisos3@naver.com", password:"1231231"

      };
      this.submit=this.submit.bind(this)
      this.changeHandler=this.changeHandler.bind(this)
      this.postdata=this.changeHandler.bind(this)
      
    }

    postdata(){
      fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({          
          'email': this.state.email,
          'password': this.state.password
        })
      })
      .then(response => response.json())
      .then(response => {
        console.log(response)
      })

    }
    
    componentDidMount(){
    }
    submit(e){
      e.preventDefault();
         
      console.log("email:",this.state.email);   
      console.log("password:",this.state.password);   
      this.postdata();
    }
    changeHandler(e){

      if(e.target.name =="email"){
        this.setState({email : e.target.value});
      }
      if(e.target.name=="password"){
        this.setState({password : e.target.value});  
      }

      console.log(e.target.value);
    }
    
    render(){
      const style = {
        // inputcenter: { textAlign: 'center' }
      }
      return (
        <div>
          <h2>Login Form here</h2>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email"
                name ="email"
                onChange={this.changeHandler}
                value= {this.state.email}/>
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.</Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password"
                name ="password"
                onChange={this.changeHandler}
                value= {this.state.password} />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit" name ="submitbutton"
               onClick={this.submit}>Submit</Button>
          </Form>

        </div>
      );
    }
  }



export default class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
  }
  render() {
    const style = {
      headerImage: { backgroundImage: 'url(/image-header/dogs.jpg)' }
    }
    return (
      <Page title="Login Page" headerImage={style.headerImage} children={<Contents />} />
    );
  }
}
