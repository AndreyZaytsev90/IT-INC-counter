import {Dispatch} from "redux";
import {AppDispatch, AppThunk} from "./store";

export const initialState = {
    maxValue: 0,
    startValue: 0,
    value: 0,
    message: ''
    //isDisabled: true
}

export type InitialStateType = typeof initialState
export type ActionType =
    IncValueActionType
    | ResetValueActionType
    | ValueActionType
    | StartValueActionType
    | MaxValueActionType
    | SetMessageActionType //| isDisabledActionType

export const counterReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "INC-VALUE":
            return {
                ...state, value: state.value + 1
            }
        case "RESET-VALUE":
            return {
                ...state, value: action.startValue
            }
        case "SET-VALUE":
            return {
                ...state, value: action.value
            }
        case "SET-START-VALUE":
            return {
                ...state, startValue: action.startValue
            }
        case "SET-MAX-VALUE":
            return {
                ...state, maxValue: action.maxValue
            }
        case "SET-MESSAGE":
            return {
                ...state, message: action.message
            }
        default:
            return state
    }
}

export const incValueAC = (value: number) => ({type: "INC-VALUE", value} as const)
export const resetValueAC = (startValue: number) => ({type: "RESET-VALUE", startValue} as const)
export const startValueAC = (startValue: number) => ({type: "SET-START-VALUE", startValue} as const)
export const valueAC = (value: number) => ({type: "SET-VALUE", value} as const)
export const maxValueAC = (maxValue: number) => ({type: "SET-MAX-VALUE", maxValue} as const)
export const setMessageAC = (message: string) => ({type: "SET-MESSAGE", message} as const)
//export const isDisabledAC = (value: boolean) => ({type: "IS-DISABLED", value} as const)

//Thunk

export const maxValueTC = (value: number): AppThunk => (dispatch: AppDispatch) => {
    localStorage.setItem('counterMaxValue', JSON.stringify(value))
    dispatch(maxValueAC(value))
}

export const startValueTC = (value: number): AppThunk => (dispatch: AppDispatch) => {
    localStorage.setItem('counterStartValue', JSON.stringify(value))
    dispatch(startValueAC(value))
}

export const setMaxValueFromLocalStorageTC = (): AppThunk => (dispatch: AppDispatch) => {
    let maxValueAsString = localStorage.getItem('counterMaxValue')
    if (maxValueAsString) {
        let newMaxValue = JSON.parse(maxValueAsString)
        dispatch(maxValueAC(newMaxValue))
    }
}

export const setStartValueFromLocalStorageTC = (): AppThunk => (dispatch: AppDispatch) => {
    let startValueAsString = localStorage.getItem('counterStartValue')
    if (startValueAsString) {
        let newStartValue = JSON.parse(startValueAsString)
        dispatch(startValueAC(newStartValue))
    }
}


type IncValueActionType = ReturnType<typeof incValueAC>
type ResetValueActionType = ReturnType<typeof resetValueAC>
type ValueActionType = ReturnType<typeof valueAC>
type StartValueActionType = ReturnType<typeof startValueAC>
type MaxValueActionType = ReturnType<typeof maxValueAC>
type SetMessageActionType = ReturnType<typeof setMessageAC>
//type isDisabledActionType = ReturnType<typeof isDisabledAC>


