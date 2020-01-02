// ALL FILES SHARE A SINGLE GLOBAL NAMESPACE.

// READ EXISTING NOTES FROM LOCAL STORAGE
const getSavedNotes = function () {
    const notesJSON = localStorage.getItem('notes');

    if (notesJSON !== null) {
        return JSON.parse(notesJSON)
    } else {
        return []
    }
}

// SAVE THE NOTES TO LOCAL STORAGE
const saveNotes = function (notes) {
    localStorage.setItem('notes', JSON.stringify(notes));
}

// CREATE NOTE
const createNote = function(title, body) {
    notes.push({
        id: uuidv4(),
        title: title,
        body: body
    },);
    return varID = (notes[notes.length - 1].id)
}

// FUNCTION RENDERS & FILTERS NOTES FROM ARRAY OF OBJECTS // LOCALSTORAGE
const renderNotes = function (notes, filters) {
	const filteredNotes = notes.filter(function(note){
		return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
	})

	// USES DOC ID SELECTOR TO CLEAR HTML / PRINT FILTERED ELEMENTS
	document.querySelector('#notes').innerHTML = ''
	filteredNotes.forEach(function(note){
		generateNoteDOM(note);
	})
}

// GENERATES THE DOM STRUCTURE FOR A NOTE
const generateNoteDOM = function (note) {
    // ELEMENT CONSTRUCTORS
    const divElement = document.createElement('div');
    const p = document.createElement('a');
    const button = document.createElement('button');

    // SETS UP REMOVE NOTE BUTTON
    button.textContent = 'x';
    divElement.setAttribute('id', note.id);
    p.setAttribute('href', '/edit.html#'+ note.id);
    p.setAttribute('hash', note.id)

    // SETS UP NOTE TITLE TEXT
    if (note.title.length > 0) {
        p.textContent = note.title;
    } else {
        p.textContent = 'Unnamed Note';
    }

    // ELEMENT FUNCTIONS
    button.addEventListener('click', function(e){
        removeNote(note.id);
        saveNotes(notes);
        renderNotes(notes, filters);
    })

    // APPENDING CHILDREN
    divElement.appendChild(button);
    divElement.appendChild(p);

    document.querySelector('#notes').appendChild(divElement);
}


const removeNote = function(id){
    const indexNotes = notes.findIndex(function(note){
        return note.id === id
    })

    if (indexNotes > -1) {
        notes.splice(indexNotes, 1);
    }
}
