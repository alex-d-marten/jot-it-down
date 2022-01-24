const Note = require('../lib/Note')
const note = new Note('Test 1', 'Text 1', 0)

test('create a new note object', () => {

    expect(note.title).toBe('Test 1')
    expect(note.text).toBe('Text 1')
    expect(note.id).toBe(0)
})

test('get the title', () => {
    expect(note.getTitle()).toBe('Test 1')
})

test('get the text', () => {
    expect(note.getText()).toBe('Text 1')
})

test('get the id', () => {
    expect(note.getId()).toBe(0)
})