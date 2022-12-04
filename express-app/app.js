// const Joi = require('joi')
// const express = require('express')

// const app = express()

// app.use(express.json())

// const courses = [
//     {id: 1, name: 'course1'},
//     {id: 2, name: 'course2'},
//     {id: 3, name: 'course3'}
// ]

// app.get('/', (req, res) => {
//     res.send('Hello world')
// })

// app.get('/courses', (req, res) => {
//     res.send(courses)
// }) 

// app.get('/courses/:id', (req, res) => {
//     const course = courses.find(c => c.id === parseInt(req.params.id))
//     if(!course) res.status(404).send('cant find it')
//     res.send(course )
// })

// app.post('/courses', (req, res) => {
//     const {error} = validateCourse(req.body)
//     if(error) {
//         console.log(error)
//         return res.status(400).send(error.details[0].message)
//     }
//     const course = {
//         id: courses.length + 1,
//         name: req.body.name
//     }
//     courses.push(course)
//     res.send(course)
// })

// app.put('/courses/:id', (req, res) => {
//     const course = courses.find(c => c.id === parseInt(req.params.id))
//     if(!course) res.status(404).send('cant find it')

//     const {error} = validateCourse(req.body)
//     if(error) return res.status(400).send(error.details[0].message)
//     course.name = req.body.name
//     res.send(course)
// })

// app.delete('/courses/:id', (req, res) => {
//     const course = courses.find(c => c.id === parseInt(req.params.id))
//     if(!course) res.status(404).send('cant find it')

//     const index = courses.indexOf(course)
//     courses.splice(index, 1)

//     res.send(course)
// })

// function validateCourse(course){
//     const schema = Joi.object({
//         name: Joi.string().min(3).required()
//     })     
//     console.log('jfj')
//     return schema.validate(course)
// }

// const port = process.env.PORT || 3000
// app.listen(port, () => console.log(`listening on ${port}`))



const express = require('express')
const app = express()
// const bodyParser = require('body-parser')
const fs = require('fs')
const path = require('path')
const cors = require('cors')
app.use(cors())
app.use(express.json())
// app.use(express.static('public'))
app.set('view engine', 'ejs')


const routing = require('./routes/routeMe')
app.use('/files', routing)

const port = process.env.PORT || 8000
app.listen(port, () => console.log(`listening on ${port}`))
