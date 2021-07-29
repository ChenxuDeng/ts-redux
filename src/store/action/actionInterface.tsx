import {actionType} from "./actionType";

interface deposit{
    type:actionType.DEPOSIT,
    amount:number
}

interface withdraw{
    type:actionType.WITHDRAW,
    amount:number
}

interface bankrupt{
    type:actionType.BANKRUPT
}

type action=deposit|withdraw|bankrupt

export default action