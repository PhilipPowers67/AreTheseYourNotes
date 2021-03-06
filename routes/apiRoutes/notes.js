const router = require('express').Router();
const { notes } = require('../../db/db.json');
const fs = require('fs');
const path = require('path');
const { createNewNote } = require('../../lib/notes');

router.get('/notes', (req, res) => {
    res.json(notes);
})

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();

    const note = createNewNote(req.body, notes);

    res.json(req.body);
});



module.exports = router;