import { combineReducers } from 'redux'
import NoteListReducer from 'store/reducer/NoteList'

export default combineReducers({
    base: () => ({}),
    noteList: NoteListReducer,
})
