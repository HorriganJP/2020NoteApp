// SETS NOTEID TO HASH - SUBSTRING() TAKES TWO ARGUMENTS FOR START AND END
const noteHash = location.hash.substring(1);
let notes = getSavedNotes();

// RETURNS TRUE IF NOTE EXISTS IN ARRAY
let note = notes.find(function(note){
    return note.id === noteHash;
})

// IF NOTE.ID DOESN'T EXIST, REDIRECT TO INDEX PAGE
if (note.id === undefined) {
    location.assign('/index.html')
}


const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')

// LOADS IN NOTE TITLE AND BODY TO FORMS
titleElement.value = note.title;
bodyElement.value = note.body;

// WHEN NOTE IS SUBMITTED, UPDATE NOTES ARRAY, ALERT NOTE HAS CHANGED
titleElement.addEventListener('input', function(e){
    newNoteTitle = titleElement.value;
    note.title = newNoteTitle;
    saveNotes(notes);
})

bodyElement.addEventListener('input', function(e){
    newNoteBody = bodyElement.value
    note.body = newNoteBody;
    saveNotes(notes);
})

// DELETE NOTE, SAVE NOTE, REDIRECT TO INDEX
document.querySelector('#note-remove').addEventListener('click', function(e){
    removeNote(note.id);
    saveNotes(notes);
    location.assign('/index.html');
})


// STORAGE ONLY FIRES FOR OTHER TABS
window.addEventListener('storage', function(e){
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue);

        // RETURNS TRUE IF NOTE EXISTS IN ARRAY
        let note = notes.find(function(note){
            return note.id === noteHash;
        })

        // IF NOTE.ID DOESN'T EXIST, REDIRECT TO INDEX PAGE
        if (note.id === undefined) {
            location.assign('/index.html')
        }
         
        titleElement.value = note.title;
        bodyElement.value = note.body;
    }
})
