let noteTitle;
let noteText;
let saveNoteBtn;
let newNoteBtn;
let noteList;
let deleteNoteBtn;

if (window.location.pathname === '/api/notes') {
  noteTitle = document.querySelector('.note-title');
  noteText = document.querySelector('.note-textarea');
  saveNoteBtn = document.querySelector('.save-note');
  newNoteBtn = document.querySelector('.new-note');
  noteList = document.querySelector('.list-group');
  // deleteNoteBtn = document.querySelectorAll('.delete-note');
}

// Show an element
const show = (elem) => {
  elem.style.display = 'inline';
};

// Hide an element
const hide = (elem) => {
  elem.style.display = 'none';
};

// activeNote is used to keep track of the note in the textarea
let activeNote = {};

const getNotes = () =>
  fetch('/notes', {
    method: 'GET',
    headers: {
      
      'Content-Type': 'application/json',
    },
  });

const saveNote = (note) => {
  console.log(note)
  fetch('/notes', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(note),
  })
  .then(() => {
    location.reload()
  });
}

/* Delete note code not working
 const deleteNote = (id) =>
  fetch(`/notes/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });

// Delete the clicked note
const handleNoteDelete = (e) => {
  // Prevents the click listener for the list from being called when the button inside of it is clicked
  e.stopPropagation();

  const noteId = e.target.getAttribute('data-note')
  console.log(noteId)

  deleteNote(noteId).then(() => {
    renderActiveNote();
    location.reload();
  });
}; */

// async function to render the active notes to the right hand column to view the note text
// If the plus is clicked then the right hand defaults back to entry for a user
async function renderActiveNote() {
  hide(saveNoteBtn);
  if (typeof activeNote === 'string') {
    const response = await getNotes()
    const notes = await response.json()
    noteTitle.setAttribute('readonly', true);
    noteText.setAttribute('readonly', true);
    noteTitle.value = notes[activeNote].title
    noteText.value = notes[activeNote].text
  } else {
    noteTitle.removeAttribute('readonly');
    noteText.removeAttribute('readonly');
    noteTitle.value = '';
    noteText.value = '';
  }
};

// function to save the new note to the db.json via the saveNote fetch request
const handleNoteSave = () => {
  const newNote = {
    title: noteTitle.value,
    text: noteText.value,
  };
  saveNote(newNote)
};

// Sets the activeNote and displays it
const handleNoteView = (e) => {
  e.preventDefault();
  activeNote = e.target.parentElement.getAttribute('data-note')
  renderActiveNote();
};

// Sets the activeNote to an empty object and allows the user to enter a new note
const handleNewNoteView = (e) => {
  activeNote = {};
  renderActiveNote();
};

// show save button when text entered in note title or text area
const handleRenderSaveBtn = () => {
  if (noteTitle.value.trim() || noteText.value.trim()) {
    show(saveNoteBtn);
  } else {
    hide(saveNoteBtn);
  }
};

if (window.location.pathname === '/api/notes') {
  saveNoteBtn.addEventListener('click', handleNoteSave);
  newNoteBtn.addEventListener('click', handleNewNoteView);
  noteTitle.addEventListener('keyup', handleRenderSaveBtn);
  noteText.addEventListener('keyup', handleRenderSaveBtn);
  noteList.addEventListener('click', handleNoteView);
  // deleteNoteBtn.forEach(item => {item.addEventListener('click', handleNoteDelete)})
}