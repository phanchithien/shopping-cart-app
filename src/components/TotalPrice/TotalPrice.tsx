import { FunctionComponent } from "react"
import classes from './totalprice.module.scss'
import { CurrencyFormatter } from "../CurrencyFormatter"

interface Props {
    amount: number
}

export const TotalPrice: FunctionComponent<Props> = ({ amount }) => {
    return (
        <div className={classes.totalPrice}>Total: {<CurrencyFormatter amount={amount}/>}</div>
    )
}