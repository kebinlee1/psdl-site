import React from "react";
import "./Home.css";

class SectionAnimation extends React.Component {
constructor(props) {
super(props);
this.state = {
  animate: false
}
this.myRef = React.createRef()
this.int = null

this.onSeen = this.onSeen.bind(this)
}

componentDidMount() {
let that = this
this.int = setInterval(() => {
  let h = window.innerHeight * 3 / 4
  const rect = that.myRef.current.getBoundingClientRect()
  // console.log(that.props.name, h, rect.top)
  if (rect.top < h) that.onSeen()
}, 200)
}

componentWillUnmount() {
if (this.int) clearInterval(this.int)
console.log('cleared Interval')
}

onSeen(e) {
clearInterval(this.int)
this.setState({ animate: true })
}

render() {
const { animate } = this.state
const { child, bgColor } = this.props
let style = {
  margin: '0px 0 0',
  padding: this.props.padding || '40px 0',
  width: '100%',
  // background-image : "uri('images/"+bgColor+".jpg')",
  // backgroundImage : "url(" + "/images/about.jpg" + ")",
  backgroundColor: bgColor,
  // backgroundImage : "url(/images/about.jpg)",
}
return (
  <div ref={this.myRef} style={style}>
    <div className={animate ? 'slide' : 'slideanim'} >
      {child}
    </div>
  </div>
)
}
}

class MyComponent extends React.Component {
  constructor(props) {
    super(props)
    this.title = props.title || "Untitled"
    this.state = {
      marginTop: "10px",
      w: "100%",
      h: "500px",
      // bgColor: props.bgColor || "gray"
    }
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
        {/* <div><img src="/images/paris.jpg" style={{ width: "200px" }} />*/}

      </div>
    )
  }
}

const Wrap = function (props) {
  return (
    <div className="bg-tech" id={props.id}>
      {/* {props.child} */}
    </div>
  )
}

//-----------------------------------------------------------

const About = () => {
return (
    <div className="container" style={{ color: 'black' }}>
    <br />
    <div className="row">
      <div className="col-sm-6">
        {/* <h2><span style={{fontWeight: '900'}}>SOCIUM<sup>®</sup></span> 자가진단 Kits</h2> */}
        <h2>Security solution from PSDL</h2>
        <h5>A brief description of the main product. <br />
              A brief description of the main product.<br /><br />
              A brief description of the main product. <br />
              A brief description of the main product.<br />
        </h5>
        {/* <ul>
            <li>A brief description of the main product.</li>
            <li>사용이 간편합니다.</li>
            <li>집에서도 간단히 체크할 수 있습니다.</li>
          </ul> */}
      </div>
      <div className="col-sm-6" style={{ textAlign: "center" }}>
        <img src="./images/about.jpg" alt="about" width="100%" />
      </div>
    </div>
  </div>    
)
}

const Technology = () => {
  let style = {
    mTop: { marginTop: '30px' }
  }
  return (
    <div className="container" style={{ textAlign: 'center', color: 'black' }}>
      {/* <h2><span style={{fontWeight: '900'}}>SOCIUM<sup>®</sup></span> Kits 구성품</h2> */}
      <h2>TECHNOLOGY</h2>
      <p>-</p>
      <img src="/images/tech_1.png" width="100%" />
      <br />
      <div className="row">
        <div className="col-sm-3">
          <h4 style={style.mTop}>①</h4>
          <p> IoT 기기 내 전기신호에서 고품질 물리 난수를 추출하는 알고리즘</p>
        </div>

        <div className="col-sm-3">
          <h4 style={style.mTop}>②</h4>
          <p >무선 통신신호 기반 고품질, 초고속 물리난수 및 암호 키 생성 기술</p>
        </div>

        <div className="col-sm-3">
          <h4 style={style.mTop}>③</h4>
          <p >국제 암호 체계 기반 경량화 암∙복호화 시스템 개발</p>
        </div>
        <div className="col-sm-3">
          <h4 style={style.mTop}>④</h4>
          <p>종단간 데이터 보안 전송을 위한 암∙복호화 실시간 Refresh 시스템</p>
        </div>

      </div>
      <br />
    </div>
  )
}

const Sol = () => {
  let style = {
    mTop: { padding: "20px 0", textAlign: 'center' }
  }

  return (
    <div className="container" style={{ textAlign: 'center', color: 'black' }}>
      {/* <h2><span style={{fontWeight: '900'}}>SOCIUM<sup>®</sup></span> Kits 구성품</h2> */}
      <h2>Solution</h2>
      <p>-</p><br />

      <div>
        <h4 style={style.mTop}>Security IC</h4>
        <img src="/images/sol_1.png" width="70%" /><br/><br/>
        <p> IoT 기기 내 전기신호에서 고품질 물리 난수를 추출하는 알고리즘</p>
      </div>


      <h4 style={style.mTop}>Module</h4>
      <div className="row">
        <div className="col-sm-6">
          <img src="/images/sol_2.png" width="60%" />
        </div>
        <div className="col-sm-6">
          <p> IoT 기기 내 전기신호에서 고품질 물리 난수를 추출하는 알고리즘</p>
          <p> IoT 기기 내 전기신호에서 고품질 물리 난수를 추출하는 알고리즘</p>
          <p> IoT 기기 내 전기신호에서 고품질 물리 난수를 추출하는 알고리즘</p>
          <p> IoT 기기 내 전기신호에서 고품질 물리 난수를 추출하는 알고리즘</p>
          <p> IoT 기기 내 전기신호에서 고품질 물리 난수를 추출하는 알고리즘</p>
        </div>
      </div>

      <br />
    </div>
  )
}

const Company = () => {
  let style = {
    mTop: { padding: "20px 0", textAlign: 'center' }
  }

  return (
    <div className="container" style={{ textAlign: 'center', color: 'black' }}>
      {/* <h2><span style={{fontWeight: '900'}}>SOCIUM<sup>®</sup></span> Kits 구성품</h2> */}
      <h2>Company</h2>
      <p>-</p><br />

      <div>
        <h4 style={style.mTop}>Vision</h4>
        <img src="/images/solution.jpg" width="70%" />
        {/* <p> Company version is this</p> */}
        <h4 style={style.mTop}>Mission</h4>
        <img src="/images/solution.jpg" width="70%" />
        {/* <p> Company Mission is this</p> */}
      </div>
      <br />
    </div>
  )
}

const Contact = () => {
  let style = {
    mTop: { padding: "20px 0", textAlign: 'center' }
   }

  return (
    <div className="container" style={{ textAlign: 'center', color: 'black' }}>
      {/* <h2><span style={{fontWeight: '900'}}>SOCIUM<sup>®</sup></span> Kits 구성품</h2> */}
      <h2>CONTACT US</h2>
      <p>-</p><br />

      <div>
        <img src="/images/contect.png" width="100%" />
        <br/><br/>
        <p>address : Information Security Cluster 4th 466, Pangyo Second TechnoValley 815,Daewangpangyo-ro, Sujeong-gu, Seongnam-si, Gyeonggi-do, Republic of Korea</p>
      </div>  
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
        jumbo: { height: jumboH + "px" },
      text: { marginTop: jumboH / 4 + "px" },
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

        <div className="content">

          <Wrap title="TECHNOLOGY" id="technology" bgColor="yellow"/>
           {/* <div className="bg-cover1" style={myStyle.jumbo}> */}
          <SectionAnimation child={<About/>} bgColor='white'/>
          <SectionAnimation id= "technology" child={<Technology/>} bgColor='lightgray'/>
          <SectionAnimation id= "solution" child={<Sol/>} bgColor='white'/>
          <SectionAnimation id= "company" child={<Company/>} bgColor='lightgray'/>
          <SectionAnimation id= "company" child={<Contact/>} bgColor='white'/>          

          {/*          
          <Wrap title="SOLUTION" id="solution" bgColor="blue"
            child={<MyComponent title="Solution" />} />
          <Wrap title="Company" id="company" bgColor="orange"
            child={<MyComponent title="Company" />} />
          <Wrap title="Contact" id="contact" bgColor="skyblue"
            child={<MyComponent title="Contact" />} /> */}
        </div>
      </>
    );
  }
}
