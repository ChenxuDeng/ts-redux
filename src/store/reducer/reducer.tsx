import action from '../action/actionInterface'
import {actionType} from "../action/actionType";

const initialState=0

const reducer=(state=initialState,action:action)=>{
    switch (action.type){
        case actionType.DEPOSIT:
            return state+action.amount
        case actionType.WITHDRAW:
            return state-action.amount
        case actionType.BANKRUPT:
            return 0
        default:
            return state
    }
}

export default reducer