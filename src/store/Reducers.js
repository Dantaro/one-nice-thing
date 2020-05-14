import { combineReducers } from 'redux'
import NoteListReducer from './reducer/NoteList'

export default combineReducers({
    base: () => ({}),
    noteList: NoteListReducer,
})
