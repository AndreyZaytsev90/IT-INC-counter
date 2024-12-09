import {applyMiddleware, combineReducers, legacy_createStore, UnknownAction} from "redux";
import {counterReducer} from "./counter-reducer";
import {thunk, ThunkAction, ThunkDispatch} from "redux-thunk";
import {useDispatch} from "react-redux";
import {loadState, saveState} from "../utils/localstorage-utils";

const rootReducer = combineReducers({
    counter: counterReducer
})


/*let preloaderState
const allState = localStorage.getItem('counter-state') //получаем весь стэйт
if(allState){
    preloaderState = JSON.parse(allState)
}*/
//export const store = legacy_createStore(rootReducer, preloaderState, applyMiddleware(thunk)) // preloaderState- записываем в стэйт
export const store = legacy_createStore(rootReducer, loadState(), applyMiddleware(thunk)) // loadState()- загрузка из localstorage

store.subscribe(()=> { // подписываеся
    //localStorage.setItem('counter-state', JSON.stringify(store.getState()))
    saveState({ // запись в localstorage
        counter: store.getState().counter
    })
})

export type AppRootStateType = ReturnType<typeof rootReducer>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, UnknownAction>;
export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, UnknownAction>
export const useAppDispatch = () => useDispatch<AppDispatch>();

type AppStoreType = typeof store