import React from "react";
// import ScrollAnimation from 'react-animate-on-scroll'
import "animate.css/animate.min.css"
import "./Home.css";


export default class StyleTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logMsg: ''
    };
  }

  componentDidMount() {
  }
  render() {
    const style = {
      wrapper: {
        backgroundColor: 'green',
        height:'500px',
        marginTop: '10px'
      },
      inner: {
        backgroundColor: 'white',
        margin:'auto', 
        // width:'200px', 
        // height:'200px'
      }
    }
    return (
      <div className="container" style={style.wrapper}>
        <div style={style.inner}>test</div>
      </div>
    );
  }

}
