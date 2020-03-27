import React, { Component } from "react";
import axios from "axios";

class MyPost extends Component {
  constructor() {
    super();
    this.state = {
      amendStatus: false,
      img: "",
      description: "",
      link: "",
      handle: "",
      updateBlogPost: true,
      myPost: []
    };
  }

  changeAmendStatus = () => {
    this.setState({ amendStatus: !this.state.amendStatus });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount() {
    axios
      .get("/api/blog/myPost")
      .then(response => {
        console.log(response.data);
        this.setState({
          myPost: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  updateBlogPost = (id) => {
    const { description, link, handle } = this.state;
    axios
      .put(`/api/blog/${id}`, { description, link, handle })
      .then(response => {
        this.setState({ amendStatus: !this.state.amendStatus, myPost: response.data });
        // this.props.updateBlogPost(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

deletePost = (id)=> {
    console.log(id)
    axios
    .delete(`api/blog/${id}`)
    .then(response => {
        this.setState({ myPost: response.data})
    }).catch(error => {
        console.log(error)
    })
}

  render() {
    
    return (
      <div>
        {this.state.myPost.map(val => {
          return (
            <div>
              <img src={val.img} alt="product" />
              <h1>{val.description}</h1>
              <p>{val.link}</p>
              <p>{val.handle}</p>
              <button onClick={this.changeAmendStatus}>Edit</button>
              <button onClick={() => {this.deletePost(val.id)}}>Scratch</button>
              {
              this.state.amendStatus === true ? (
                <section>
                  <input
                    type="text"
                    placeholder="Description"
                    name="description"
                    onChange={this.handleChange}
                  />
                   <input
                    type="text"
                    placeholder="Link"
                    name="link"
                    onChange={this.handleChange}
                  />
                   <input
                    type="text"
                    placeholder="Handle"
                    name="handle"
                    onChange={this.handleChange}
                  />
                  <button onClick={() => {this.updateBlogPost(val.id)}}>Save</button>
                </section>
              ) : null}
            </div>
          );
        })}
        
      </div>
    );
  }
}

export default MyPost;
