const router = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');

//get/api/notes: read db.json file and return all saved notes as json
router.get('/notes', (req, res) => {
    console.info(`${req.method} request recieved for notes`);
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
})

//post/api/notes receive new note to save and add to db.json
router.post('/notes', (req, res) => {
    const {title, text} = req.body;

    if(req.body) {
        const newNote = {
            title,
            text
        };
        readAndAppend(newNote, './db/db.json');
        res.json('Note added')
    } else {
        res.error('Error in adding note');
      }
})



module.exports = router