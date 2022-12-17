const notesContainerEl = document.getElementById("app");
const btnEl = document.getElementById("btn");

getNotes().forEach((note) => {
  const noteEl = createNoteEl(note.id, note.content);
  notesContainerEl.insertBefore(noteEl, btnEl);
});

btnEl.addEventListener("click", () => addNote());

function getNotes() {
  return JSON.parse(localStorage.getItem("note-ap") || "[]");
}

function saveNotes(notes) {
  localStorage.setItem("note-ap", JSON.stringify(notes));
}

function createNoteEl(id, content) {
  const element = document.createElement("textarea");

  element.classList.add("note");
  element.value = content;
  element.placeholder = "Empty Note";

  element.addEventListener("input", () => {
    updateNote(id, element.value);
  });

  element.addEventListener("dblclick", () => {
    const noteDelete = confirm("Want to Delete the note?");
    if (noteDelete) {
      deleteNote(id, element);
    }
  });

  return element;
}

function addNote() {
  const notes = getNotes();
  const noteObj = {
    id: Math.floor(Math.random() * 100000),
    content: "",
  };

  const noteEl = createNoteEl(noteObj.id, noteObj.content);
  notesContainerEl.insertBefore(noteEl, btnEl);

  notes.push(noteObj);
  saveNotes(notes);
}

function updateNote(id, newContent) {
  const notes = getNotes();
  const target = notes.filter((note) => note.id == id)[0];

  target.content = newContent;
  saveNotes(notes);
}

function deleteNote(id, element) {
  const notes = getNotes().filter((note) => note.id != id);

  saveNotes(notes);
  notesContainerEl.removeChild(element);
}
