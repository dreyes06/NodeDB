const express = require('express')

const { getPost, getMyPost, postPost, updatePost, removePost} = require('./Controllers/taggedController')

const app = express()

app.use(express.json())

app.get('/api/blog', getPost)
app.get('/api/blog/myPost', getMyPost)
app.post('/api/blog', postPost)
app.put('/api/blog/:id', updatePost)
app.delete('/api/blog/:id', removePost)

const PORT = 6000
app.listen(PORT, () => console.log('Port is running on 6000'))