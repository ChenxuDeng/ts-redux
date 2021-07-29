import {actionType} from "./actionType";

export const deposit=(amount:number)=>{
    return{
        type:actionType.DEPOSIT,
        amount:amount
    }
}

export const withdraw=(amount:number)=>{
    return{
        type:actionType.WITHDRAW,
        amount:amount
    }
}

export const bankrupt=()=>{
    return{
        type:actionType.BANKRUPT
    }
}