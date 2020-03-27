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
    //   const {}
    console.log(this.state.allPost)
    let mappedAllPost = this.state.allPost.map((val, index) => {
      return <Blog val={val} updateBlogPost={this.updateBlogPost} />;
    });
    let mappedMyPost = this.state.myPost.map((val, index) => {
      
        //   <MyPost updateBlogPost={this.updateBlogPost} /> 
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
        {/* <nav>
          <button onClick={() => this.setState({ view: "allPost" })}>
            Public Space
          </button>
          <button onClick={() => this.setState({ view: "myPost" })}>
            My Post
          </button>
        </nav> */}
        {this.state.view === "allPost" ? (
          <>
            <h1>All Post</h1>
            {mappedAllPost}
            {mappedMyPost}
          </>
        ) : // this.state.view === 'myPost'
        // ?
        // <>
        // <h1>My Posts</h1>
        // {mappedMyPost}
        // </>
        // :
        null}
      </div>
    );
  }
}
export default ViewPost;
