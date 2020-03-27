import React, { Component } from "react";
import axios from "axios";



class Blog extends Component {
  constructor() {
    super();
    this.state = {
      amendStatus: false,
      img: "",
      description: "",
      link: "",
      handle: ""
    };
  }

  changeAmendStatus = () => {
      this.setState({amendStatus: !this.state.amendStatus})
  }

  handleChange = e => {
      this.setState({[e.target.name]: e.target.value})
  }



  render() {
    
    return (
      <div>
        <img src={this.props.val.img} alt='product'/>
        <h1>{this.props.val.description}</h1>
        <p>{this.props.val.link}</p>
        <p>{this.props.val.handle}</p>
      </div>
    );
  }
}

export default Blog;
