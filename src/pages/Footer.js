import React from "react";
import '../App.css';

//
// React.forwardRef MUST be used for function compoment 
//
// const FooterContent = React.forwardRef((props, ref) => {
//   return (  
//   <div className="footer" ref={ref} style={{marginTop: props.addMarginTop}}>
//     <div className="row">
//       <div className="col-sm-6">
//         <ul>
//           <li>copy right: 2020</li>
//           <li>PetCare HUB Inc.</li>
//           <li>Email: maxkeim@email.com</li>
//           <li>Seoul Korea</li>
//         </ul>
//       </div>
//       <div className="col-sm-6">
//         <ul style={{
//           listStyleType: 'none',
//           fontSize: '1.2rem',
//         }}>
//           <li><i style={{color:'skyblue'}}
//             className="fab fa-facebook-square"></i> Facebook</li>
//           <li><i style={{color:'skyblue'}}
//             className="fab fa-twitter-square"></i> Twitter</li>
//           <li><i style={{color:'orangered'}} 
//             className="fab fa-google-plus-square"></i> Google</li>
//         </ul>
//       </div>
//     </div>
//   </div>
// )})

const FooterContent = React.forwardRef((props, ref) => {
  return (  
  <div className="footer" ref={ref} style={{marginTop: props.addMarginTop}}>
      <img src = "/images/white-logo.png" style={{width : "100px", marginBottom : "10px"}}></img>
      <p>Copy right &copy; 2020: 주식회사 피에스디엘, 경기도 대왕판교로815.</p>      
      <p>Email: sales@psdl.co.kr</p>      
      <p>Tel  : 031-xxxx-xxxx</p>            
    
  </div>
)})

export default class Footer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {marginTop: 10}
    this.footer = React.createRef()
  }

  render() {
    return (
      <FooterContent ref={this.footer} addMarginTop={this.state.marginTop} />
    )
  }
}