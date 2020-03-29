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
    console.log(this.state.allPost);
    console.log(this.state.allPost)
    let mappedAllPost = this.state.allPost.map((val, index) => {
      return <Blog val={val} updateBlogPost={this.updateBlogPost} />;
    });
    let mappedMyPost = this.state.myPost.map((val, index) => {
      
       
        return (
          <div>
          <img src={val.img} alt="product" />
          <h1>{val.description}</h1>
          <p>{val.link}</p>
          <p>{val.handle}</p>
        </div>
      );
    });
    return (
      <div>
       
        {this.state.view === "allPost" ? (
          <div>
            <h1>All Post</h1>
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
