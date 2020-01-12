let notes = getSavedNotes();

saveNotes(notes);

// BLANK FILTER VAR
const filters = {
	searchText: '',
	sortBy: ''
}

// Calls the non-filtered renderNotes function to display array of objects
renderNotes(notes, filters);

// Passes text from <input> to the rendersNotes function
document.querySelector('#search-text').addEventListener('input', function (e) {
	filters.searchText = e.target.value
	renderNotes(notes, filters)
})

// EVENT LISTENER FOR BUTTON CLICK CLEARS <p> TAG IN <div id='notes'> SECTION
document.querySelector('#remove-all').addEventListener('click', function() {
	document.querySelectorAll('#notes').forEach(function(e) {
		e.remove();
		localStorage.clear();
		renderNotes(notes, filters);
	});
});

// TARGET FORM BY ID, PREVENTS NORMAL ACTION, TARGET ELEMENT BY NAME/ACCESS VALUE
document.querySelector('#form').addEventListener('submit', function(e){
	e.preventDefault();
	if (e.target.formEntry.value === "") {
		return window.alert('Please Enter Valid Note');
	} else {
		let placeholderValue = document.getElementById('input-note').value;
		createNote(placeholderValue, placeholderValue);
	}
	e.target.formEntry.value = "";
	saveNotes(notes);
	renderNotes(notes, filters);
	location.assign(`/edit.html#${varID}`);
})

// TARGET CHECK BOX
document.querySelector('#for-fun').addEventListener('change', function(e){
	console.log(e.target.checked);
})

// FILTERS NOTES FOR SEARCH 
document.querySelector('#filter-by').addEventListener('change', function(e){
	filters.sortBy = e.target.value;
	console.log(filters.sortBy);
	renderNotes(notes, filters)
})

// LIVE STORAGE
window.addEventListener('storage', function(e){
	if (e.key === 'notes') {
		// parse correct data and update notes
		notes = JSON.parse(e.newValue);

		// render the notes
		renderNotes(notes, filters);
	}
})