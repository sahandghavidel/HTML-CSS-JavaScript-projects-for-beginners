const notesContainer = document.getElementById("app");
const addNoteButton = notesContainer.querySelector(".add-note");

getNotes().forEach(note => {
    const noteElement = createNoteElement(note.id, note.content);
    notesContainer.insertBefore(noteElement, addNoteButton);
});

addNoteButton.addEventListener("click", () => addNote());

function getNotes(){
    return JSON.parse(localStorage.getItem("note-ap") || "[]");
}

function saveNotes(notes){
    localStorage.setItem("note-ap", JSON.stringify(notes));
}

function createNoteElement(id, content){
    const element = document.createElement("textarea");

    element.classList.add("note");
    element.value = content;
    element.placeholder = "Empty Note";

    element.addEventListener("change", () => {
        updateNote(id, element.value);
    });

    element.addEventListener("dblclick", () => {
        const noteDelete = confirm("Want to Delete the note?")
        if (noteDelete) {
            deleteNote(id, element);
        }
    });

    return element;
}

function addNote(){
    const notes = getNotes();
    const noteObj = {
        id: Math.floor(Math.random()*100000),
        content: ""
    };

    const noteElement = createNoteElement(noteObj.id, noteObj.content);
    notesContainer.insertBefore(noteElement, addNoteButton);


    notes.push(noteObj);
    saveNotes(notes);
}

function updateNote(id, newContent) {
    const notes = getNotes();
    const target = notes.filter(note=>note.id == id)[0];

    target.content = newContent;
    saveNotes(notes);
}

function deleteNote(id, element) {
    const notes = getNotes().filter(note => note.id != id);

    saveNotes(notes);
    notesContainer.removeChild(element);
}

