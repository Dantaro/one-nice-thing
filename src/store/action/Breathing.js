export const BREATHING_STATE = 'BREATHING_STATE'

export const saveBreathingState = (breathingState) => ({
    type: BREATHING_STATE,
    breathingState,
})
