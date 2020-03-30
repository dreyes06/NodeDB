import React, { Component } from "react";
import StarRating from './StarRating'
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
      <div className='blogpost' >
        <img className='img' src={this.props.val.img} alt='product'/>
        <h2>{this.props.val.description}</h2>
        <p>{this.props.val.link}</p>
        <p>{this.props.val.handle}</p>
        <StarRating/>
      </div>
    );
  }
}

export default Blog;
