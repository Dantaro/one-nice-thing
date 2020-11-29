import { SAVE_RELEASE_NOTE_VIEW } from 'store/action/ReleaseNotes'

export const ReleaseNotesViewedReducer = (state = '', action) => {
    switch (action.type) {
        case SAVE_RELEASE_NOTE_VIEW:
            return action.version
        default:
            return state
    }
}
