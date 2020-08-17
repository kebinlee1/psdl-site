import React from "react";
import "./Home.css";

const Technology = function (props) {
  const style = {
    marginTop: "10px",
    width: "100%",
    height: "500px",
    backgroundColor: props.bgColor || "gray"
  }
  return (
    <div style={style}>
      <h2>{props.title}</h2>
    </div>
  )
}

class MyComponent extends React.Component {
  constructor(props) {
    super(props)
    this.title = props.title || "Untitled"
    this.state = {
      marginTop: "10px",
      w: "100%",
      h: "500px",
      bgColor: props.bgColor || "gray"
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {

  }
  handleClick() {
    (this.state.bgColor === "red")
      ? this.setState({ bgColor: "green" })
      : this.setState({ bgColor: "red" })
  }

  render() {
    const style = {
      marginTop: this.state.marginTop,
      width: this.state.w,
      height: this.state.h,
      backgroundColor: this.state.bgColor,
    }
    return (
      <div className="col-sm-8" id={this.props.id} style={style}>
        <h2 onClick={this.handleClick}>{this.title}</h2>
        <div style={{
          marginLeft: "auto",
          marginRight: "auto",
          width: "50%", height: "400px",
          textAlign: 'center'
        }}>
          <img src="/images/paris.jpg" style={{ width: "200px" }} />
        </div>
      </div>
    )
  }
}


const Wrap = function (props) {
  return (
    <div id={props.id} style={{ padding: "50px", backgroundColor: props.bgColor || "gray" }}>
      {props.child}
    </div>
  )
}









export default class StyleTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
  }

  componentDidMount() {
    // setTimeout(()=>this.setState({loaded: true}), 2000).ju
    this.setState({ loaded: true })
  }
  render() {
    const jumboH = 800
    const myStyle = {
      jumbo: {height: jumboH + "px"},
      text: {marginTop: jumboH/4 + "px"},      
    }
    return (
      <>
        <div className="jumbotron bg-cover" style={myStyle.jumbo}>
          <div style={myStyle.text}>
            <h1>Welcome to PSDL</h1>
              <p>Platform-based integrated information security service that provides</p>
              <p>network and server security services easily and conveniently.</p>
          </div>
        </div>

        <div className="container">
          <Wrap title="TECHNOLOGY" id="technology" bgColor="yellow"
            child={<MyComponent title="Technology" />} />




            
          <Wrap title="SOLUTION" id="solution" bgColor="blue"
            child={<MyComponent title="Solution" />} />
          <Wrap title="Company" id="company" bgColor="orange"
            child={<MyComponent title="Company" />} />
          <Wrap title="Contact" id="contact" bgColor="skyblue"
            child={<MyComponent title="Contact" />} />
        </div>
      </>
    );
  }
}
