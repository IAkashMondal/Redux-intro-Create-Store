import {legacy_createStore} from "redux"
import Reducer from "./Reducer"

 export const store = legacy_createStore(Reducer,{count:10})