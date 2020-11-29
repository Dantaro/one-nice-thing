import { combineReducers } from 'redux'
import NoteListReducer from 'store/reducer/NoteList'
import { REPLACE_ROOT } from 'store/action/Root'

const appReducer = combineReducers({
    base: () => ({}),
    noteList: NoteListReducer,
})

const rootReducer = (state, action) => {
    if (action.type === REPLACE_ROOT) {
        state = action.newState
    }

    return appReducer(state, action)
}

export default rootReducer
