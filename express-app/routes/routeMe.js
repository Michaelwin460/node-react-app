const { json } = require('body-parser')
const express = require('express')
const fs = require('fs')
const router = express.Router()
const path = require('path')
let type

router.get('/', (req, res) => {
    fs.readdir('./views', function (err, files) {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }
    type = path.extname
    const list = files.map((file) => {
        type = path.extname(file)? path.extname(file):'folder'
       return {
        name: file, 
        type: type
    }
})
    console.log(list);
    res.send(JSON.stringify(list))
  })
})

router.get('/info/:fileName', (req, res) => {
    fs.stat(`../express-app/views/${req.params.fileName}`, (err, data) => {
        if(err){throw new Error(err)}
        const info = {
            name: req.params.fileName,
            type: path.extname(req.params.fileName) ? path.extname(req.params.fileName) : 'folder',
            creation: data.birthtime,
            size: data.size
        }
        console.log(data);
        
        res.send(JSON.stringify(info))
    })
})

router.get('/show/:fileName', (req, res) => {
    // res.header('Content-type', 'text/html');
    // res.sendFile(path.join(__dirname + `${req.params.fileName}`));
    res.render(`${req.params.fileName}`)
    // fs.readFile(`./views/${req.params.fileName}`, function(err, data) {
    // console.log('ah');
    // res.header({'Content-Type': 'text/html'});
    // res.send(data)
    // });
})

router.put('/rename/:fileName', (req, res) => {
    const endPoint = req.params.fileName.split('.')[1]
    fs.rename(`../views/${req.params.fileName}`, `../views/${req.headers.name}.${endPoint}`, (err) => {
        if(err){throw err}
        res.send(`the name has been changed reload to show`)
    })
})

router.delete('/delete/:fileName', (req, res) => {
    fs.unlink(`../views/${req.params.fileName}`, (err) => {
        if(err){throw err}
        res.send('The file has been deleted')
    })
})


module.exports = router

