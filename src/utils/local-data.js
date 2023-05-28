let notes = [
  {
    id: 'notes-1',
    title: 'Basket',
    body: '<b>Basket</b> adalah olahraga yang dimainkan antara dua tim yang terdiri dari lima pemain. Tujuan utama dari permainan ini adalah memasukkan bola ke dalam keranjang lawan untuk mencetak poin.',
    createdAt: '2023-05-20',
    archived: false
  },
  {
    id: 'notes-2',
    title: 'Voli',
    body: 'Voli diciptakan oleh seorang instruktur pendidikan jasmani bernama William G. Morgan pada tahun 1895 di Holyoke, Massachusetts, Amerika Serikat.',
    createdAt: '2023-05-20',
    archived: false
  }
]

function getAllNotes() {
  return notes
}

function getNote(id) {
  const foundedNote = notes.find((note) => note.id === id)
  return foundedNote
}

function getActiveNotes() {
  const activeNotes = notes.filter((note) => !note.archived)
  return activeNotes
}

function getArchivedNotes() {
  const archivedNotes = notes.filter((note) => note.archived)
  return archivedNotes
}

function addNote({ title, body }) {
  notes = [...notes, {
    id: `notes-${+new Date()}`, title: title || '(untitled)', body, createdAt: new Date().toISOString(), archived: false
  }]
}

function deleteNote(id) {
  notes = notes.filter((note) => note.id !== id)
}

function archiveNote(id) {
  notes = notes.map((note) => {
    if (note.id === id) {
      return { ...note, archived: true }
    }
    return note
  })
}

function unarchiveNote(id) {
  notes = notes.map((note) => {
    if (note.id === id) {
      return { ...note, archived: false }
    }

    return note
  })
}

function editNote({ id, title, body }) {
  const noteToEdit = notes.find((note) => note.id === id)
  noteToEdit.title = title
  noteToEdit.body = body

  notes = notes.map((note) => {
    if (note.id === id) {
      return note
    }
    return note
  })
}

export {
  getAllNotes,
  getActiveNotes,
  getArchivedNotes,
  deleteNote,
  editNote,
  getNote,
  archiveNote,
  unarchiveNote,
  addNote
}
