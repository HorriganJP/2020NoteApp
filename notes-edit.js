// SETS NOTEID TO HASH - SUBSTRING() TAKES TWO ARGUMENTS FOR START AND END
const noteHash = location.hash.substring(1);
let notes = getSavedNotes();

// RETURNS TRUE IF NOTE EXISTS IN ARRAY
let note = notes.find(function(note){
    return note.id === noteHash;
})

// CONFIRMS NOTE EXISTS
const confirmNote = function() {
    note = notes.find(function(note){
        if (note.id === noteHash) {
            return note.id === noteHash;
        } else {
            pageRedirect();
        }
    })
}

// PAGE REDIRECT FUNCTION
const pageRedirect = function() {  
    location.assign('/index.html')
};

const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')
const spanTime = document.querySelector('#span-time');

// UPDATES TIME IN SPAN WITH LAST EDITED:
const updateTimeFunct = function(updatedAt) {
    return spanTime.textContent = `Last Edited: ${moment(updatedAt).fromNow()}`;
}

// LOADS IN NOTE TITLE AND BODY TO FORMS
titleElement.value = note.title;
bodyElement.value = note.body;
updateTimeFunct(note.updatedAt);

// WHEN NOTE IS SUBMITTED, UPDATE NOTES ARRAY
titleElement.addEventListener('input', function(e){
    newNoteTitle = titleElement.value;
    note.title = newNoteTitle;
    note.updatedAt = moment().valueOf();
    updateTimeFunct(note.updatedAt);
    saveNotes(notes);
})

bodyElement.addEventListener('input', function(e){
    newNoteBody = bodyElement.value
    note.body = newNoteBody;
    note.updatedAt = moment().valueOf();
    updateTimeFunct(note.updatedAt);
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
        if (notes.length === 0) {
            pageRedirect();
        }
        // IF NOTE DOESN'T EXIST, REDIRECT TO INDEX PAGE
        confirmNote();        
         
        titleElement.value = note.title;
        bodyElement.value = note.body;
        spanTime.textContent = updateTimeFunct(note.updatedAt);
    }
})