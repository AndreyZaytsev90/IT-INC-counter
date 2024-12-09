import {AppRootStateType} from "../bll/store";

export const loadState = () => {
    try {
        const allState = localStorage.getItem('counter-state') //получаем весь стэйт
        if (allState === null) {
            return undefined
        }
        return JSON.parse(allState)
    } catch (error) {
        return undefined
    }
}

export const saveState = (state: AppRootStateType) => {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem('counter-state', serializedState)
    }catch (error) {
        return undefined
    }

}