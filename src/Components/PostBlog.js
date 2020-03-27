import React, { Component } from 'react'
import axios from 'axios'


class PostBlog extends Component {
 constructor() {
     super()
     this.state = {
         img: '',
         description: '',
         link: '',
         handle: ''
     }
 }
 
 handleChange = e => {
     this.setState({[e.target.name]: e.target.value})
 }

 handleClick = () => {
    const {img, description, link, handle} = this.state
    axios.post('/api/blog', {
        img,
        description,
        link,
        handle
    }).then(response => {
        this.setState({
            img: '',
            description: '',
            link: '',
            description: ''
        })
    }).catch(error => {
        console.log(error)
    })
 }
    
    
    render() {
        const {img, description, link, handle} = this.state
        return (
            <div>
                <img src={img} alt='' />
                <input type='text' placeholder='Image' name='img' onChange={this.handleChange} value={img} />
                <input type='text' placeholder='Description' name='description' onChange={this.handleChange} value={description} />
                <input type='text' placeholder='Link' name='link' onChange={this.handleChange} value={link} />
                <input type='text' placeholder='Platform: Handle' name='handle' onChange={this.handleChange} value={handle} /> 
                <button onClick={this.handleClick} >Create</button>
            </div>
        )
    }
}


export default PostBlog
