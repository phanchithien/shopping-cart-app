import { FunctionComponent } from "react"
import classes from './currency-formatter.module.scss'

interface Props {
    amount: number
}

export const CurrencyFormatter: FunctionComponent<Props> = ({ amount }) => {
    const formatterAmount = amount.toLocaleString('en-GB', {
        style: 'currency',
        currency: 'GBP'
    })

    return <span className={classes.currency}>{formatterAmount}</span>
}