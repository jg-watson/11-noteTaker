const router = require('express').Router();
const  path = require('path')

//get/notes: return notes.html
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
})



//get *: return index.html
router.get('*', (req,res) => {
   res.sendFile(path.join(__dirname, '../public/index.html'))
})

module.exports = router;