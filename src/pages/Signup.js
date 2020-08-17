import React from "react";
import Page from "../components/Page"

const Contents = (props) => {  
  return (
    <div>
      <h2>Signup Form here</h2>
    </div>
  )
}

export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // isAuthenticated: false,
      // userHasAuthenticated: false,
    };
  }

  componentDidMount() {
  }

  render() {
    const style = {
      headerImage: {backgroundImage: 'url(/image-header/dog-bw.jpg)'}
    }
    return (      
      <form>
      <Page title="Login Page" headerImage={style.headerImage} />
      <br></br>
      <h3>Sign Up</h3>
      <div className="form-group">
        <label> First name</label>
        <input type="email" className="form-control" placeholder="First name" />
      </div>

      <div className="form-group">
        <label>Last name</label>
        <input type="email" className="form-control" placeholder="Last name" />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input type="password" className="form-control" placeholder="Enter password" />
      </div>

      <button type="submit" className="btn btn-primary btn-block">sign up</button>
      <p className="forgot-password text-right">
        Already registerd <a href="#"> sign in?</a>
      </p>
    </form>



      
    );
  }

}
