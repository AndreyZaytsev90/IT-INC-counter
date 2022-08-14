export const initialState = {
  maxValue: 0,
  startValue: 0,
  value: 0,
  message: ''
  //isDisabled: true
}

export type InitialStateType = typeof initialState
export type ActionType = IncValueActionType | ResetValueActionType | ValueActionType | StartValueActionType | MaxValueActionType | SetMessageActionType //| isDisabledActionType

export const counterReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
  switch (action.type) {
    case "INC-VALUE":
      return {
        ...state, value: state.value + 1
      }
    case "RESET-VALUE":
      return {
        ...state, value: 0
      }
    case "VALUE":
      return {
        ...state, value: action.value
      }
      case "START-VALUE":
      return {
        ...state, startValue: action.startValue
      }
    case "MAX-VALUE":
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

export const incValueAC = () => ({type: "INC-VALUE"} as const)
export const resetValueAC = () => ({type: "RESET-VALUE"} as const)
export const startValueAC = (startValue: number) => ({type: "START-VALUE", startValue} as const)
export const valueAC = (value: number) => ({type: "VALUE", value} as const)
export const maxValueAC = (maxValue: number) => ({type: "MAX-VALUE", maxValue} as const)
export const setMessageAC = (message: string) => ({type: "SET-MESSAGE", message} as const)
//export const isDisabledAC = (value: boolean) => ({type: "IS-DISABLED", value} as const)


type IncValueActionType = ReturnType<typeof incValueAC>
type ResetValueActionType = ReturnType<typeof resetValueAC>
type ValueActionType = ReturnType<typeof valueAC>
type StartValueActionType = ReturnType<typeof startValueAC>
type MaxValueActionType = ReturnType<typeof maxValueAC>
type SetMessageActionType = ReturnType<typeof setMessageAC>
//type isDisabledActionType = ReturnType<typeof isDisabledAC>


