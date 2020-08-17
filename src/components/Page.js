import React from "react";

export default class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      minH: 0
    };
    this.page = React.createRef()
    this.setMinHeight = this.setMinHeight.bind(this)
  }

  componentDidMount() {
    this.setState({ loaded: true })
    this.setMinHeight()
  }

  setMinHeight(){    
    let pageRect = this.page.current.getBoundingClientRect()
    // let rects = this.page.getClientRects()) // other getRect API

    // (document.body.clientHeight - pageRect.height) = header + footer height
    let contentMinH = window.innerHeight - (document.body.clientHeight - pageRect.height)    
    
    // alway same unless header and footer are not changed
    if(contentMinH > 0) this.setState({minH: contentMinH}) 
  }

  render() {
    let style = {
      bgDefault: { backgroundColor: 'skyblue' },
      autoHeight: {minHeight: this.state.minH+'px'}
    }
    let headerBg = (this.props.headerImage && this.state.loaded) ? this.props.headerImage : style.bgDefault
    return (
      <div ref={this.page} className="container page" style={style.autoHeight}>
        <div className="header" style={headerBg}>
          <h1 className="title">{this.props.title}</h1>
        </div>
        <div className="content">
          {this.props.children}          
        </div>
      </div>
    );
  }

}
