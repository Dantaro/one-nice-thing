import { SAVE_NOTE_LIST_ACTION } from 'store/action/NoteList'

export default (state = [], action) => {
    switch (action.type) {
        case SAVE_NOTE_LIST_ACTION:
            return action.noteList
        default:
            return state
    }
}
