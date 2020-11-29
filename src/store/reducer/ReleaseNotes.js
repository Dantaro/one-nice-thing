import { SAVE_RELEASE_NOTE_VIEW } from 'store/action/ReleaseNotes'

export const ReleaseNotesViewedReducer = (state = [], action) => {
    switch (action.type) {
        case SAVE_RELEASE_NOTE_VIEW:
            const newState = state.map((x) => x)
            newState.push(action.version)
            return newState
        default:
            return state
    }
}
