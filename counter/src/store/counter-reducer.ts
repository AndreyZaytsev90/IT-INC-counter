export const initialState = {
    maxValue: 0,
    startValue: 0,
    value: 0,
    isDisabled: true
}

export type InitialStateType = typeof initialState
export type ActionType = IncValueActionType | ResetValueActionType | StartValueActionType | isDisabledActionType

export const counterReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "INC-VALUE":
            return {
                ...state, value: state.value+1
            }
        case "RESET-VALUE":
            return {
                ...state, value: 0
            }
        case "START-VALUE":
            return {
                ...state, startValue: state.startValue = state.value
            }
        case "IS-DISABLED":
            return {
                ...state, isDisabled: true
            }
        default:
            return state
    }
}

export const incValueAC = () => ({type: "INC-VALUE"} as const)
export const resetValueAC = () => ({type: "RESET-VALUE"} as const)
export const startValueAC = () => ({type: "START-VALUE"} as const)
export const isDisabledAC = () => ({type: "IS-DISABLED"} as const)



type IncValueActionType = ReturnType<typeof incValueAC>
type ResetValueActionType = ReturnType<typeof resetValueAC>
type StartValueActionType = ReturnType<typeof startValueAC>
type isDisabledActionType = ReturnType<typeof isDisabledAC>


