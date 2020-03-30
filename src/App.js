import React, { Component } from "react";
import Tagged from "./Components/Tagged";
import ViewPost from "./Components/ViewPost";
import PostBlog from "./Components/PostBlog";
import MyPost from "./Components/MyPost";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      view: "public space"
    };
  }
  render() {
    return (
      <div className="App">
        <Tagged />

        <div>
          <nav>
            {this.state.view === "public space" ? (
              <div className='navbar' >
                <h1 className='currentpage' >Public Space</h1>
                <nav className='buttonsnav'>
                <button className='navbuttons' onClick={() => this.setState({ view: "inspire" })}>
                  Inspire
                </button>
                <button className='navbuttons' onClick={() => this.setState({ view: "my post" })}>
                  My post
                </button>
                </nav>
              </div>
            ) : null}
            {this.state.view === "inspire" ? (
              <div className='navbar' >
                <h1 className='currentpage' >Inspire</h1>
                <nav className='buttonsnav' >
                <button className='navbuttons' onClick={() => this.setState({ view: "public space" })}>
                  Public Space
                </button>
                <button className='navbuttons' onClick={() => this.setState({ view: "my post" })}>
                  My post
                </button>
                </nav>
              </div>
            ) : null}
            {this.state.view === "my post" ? (
              <div className='navbar'>
                <h1 className='currentpage'  >My Post</h1>
                <nav className='buttonsnav' >
                <button className='navbuttons' onClick={() => this.setState({ view: "public space" })}>
                  Public Space
                </button>
                <button className='navbuttons' onClick={() => this.setState({ view: "inspire" })}>
                  Inspire
                </button>
                </nav>
              </div>
            ) : null}
          </nav>
        </div>
        {this.state.view === "public space" ? (
          <ViewPost view={this.state.view} />
        ) : this.state.view === "inspire" ? (
          <PostBlog />
        ) : this.state.view === "my post" ? (
          <MyPost />
        ) : null}
      </div>
    );
  }
}

export default App;
