let blogPost = require('../../post.json')
let allPost = []
let myPost= []

let id = 7

const getPost = (req, res) => {
    allPost.push(blogPost, myPost)
    res.status(200).send(allPost)
}

const getMyPost = (req, res) => {
    res.status(200).send(myPost)
}

const postPost = (req, res) => {
    const {img, description, link, handle} = req.body
    
    const newPost = {
        id: id,
        img: img,
        description: description,
        link: link,
        handle: handle
    }
    myPost.push(newPost)
    id++

    allPost.push(blogPost, myPost)

    res.status(200).send(allPost)
}


const updatePost = (req, res) => {
    const id = req.params.id
    const {description, link, handle} = req.body
    const blogIndex = myPost.findIndex(newPost => newPost.id === +id)
    myPost[blogIndex].description = description || myPost[blogIndex].description
    myPost[blogIndex].link = link || myPost[blogIndex].link
    myPost[blogIndex].handle = handle || myPost[blogIndex].handle

    res.status(200).send(myPost)
}

const removePost = (req, res) => {
    const {id} = req.params
    const removedIndex = myPost.findIndex(newPost => newPost.id === +id)
    myPost.splice(removedIndex, 1)

    res.status(200).send(myPost)
}






module.exports = {
    getPost,
    postPost,
    updatePost,
    removePost,
    getMyPost
}