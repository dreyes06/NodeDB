import React, { Component } from "react";
import Blog from "./Blog";
import axios from "axios";
import MyPost from "./MyPost";

class ViewPost extends Component {
  constructor() {
    super();
    this.state = {
      allPost: [],
      myPost: [],
      view: "allPost"
    };
  }

  componentDidMount() {
    axios
      .get("/api/blog")
      .then(response => {
        console.log(response.data);
        this.setState({
          allPost: response.data[0],
          myPost: response.data[1]
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    let mappedAllPost = this.state.allPost.map((val, index) => {
        return <Blog val={val} updateBlogPost={this.updateBlogPost} />;
    });
    let mappedMyPost = this.state.myPost.map((val, index) => {
      
       
        return (
          <div className='blogpost' >
          <img className='img' src={val.img} alt="product" />
          <h2>{val.description}</h2>
          <h3>{val.link}</h3>
          <p>{val.handle}</p>
        </div>
      );
    });
    return (
      <div>
       
        {this.state.view === "allPost" ? (
          <div>
            
            {mappedAllPost}
            {mappedMyPost}
          </div>
        ) : 
        null}
      </div>
    );
  }
}
export default ViewPost;
