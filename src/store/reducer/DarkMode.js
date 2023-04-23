import { SAVE_DARK_MODE } from 'store/action/DarkMode'

export const DarkModeReducer = (state = true, action) => {
    switch (action.type) {
        case SAVE_DARK_MODE:
            return action.enabled
        default:
            return state
    }
}