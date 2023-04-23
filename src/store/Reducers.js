import { combineReducers } from 'redux'
import NoteListReducer from 'store/reducer/NoteList'
import { ReleaseNotesViewedReducer } from 'store/reducer/ReleaseNotes'
import { DarkModeReducer } from 'store/reducer/DarkMode'
import { REPLACE_ROOT } from 'store/action/Root'

const appReducer = combineReducers({
    base: () => ({}),
    noteList: NoteListReducer,
    releaseNotesViewed: ReleaseNotesViewedReducer,
    darkMode: DarkModeReducer
})

const rootReducer = (state, action) => {
    if (action.type === REPLACE_ROOT) {
        state = action.newState
    }

    return appReducer(state, action)
}

export default rootReducer
