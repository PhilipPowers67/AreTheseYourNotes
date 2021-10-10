const fs = require('fs');
const path = require('path');

function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirnamem, '../db/db.json'),
        JSON.stringify({ notesArray }, null, 2)
    )
    return;
}

module.exports = {createNewNote};