import { FunctionComponent, useState } from "react"

export type Operation = 'increase' | 'decrease'

import classes from './quantifier.module.scss'

interface Props {
    removeProductCallback : (productId: number) => void
    handleUpdateQuantity: (producId: number, operation: Operation) => void
    productId: number
}

export const Quantifier: FunctionComponent<Props> = ({ removeProductCallback, handleUpdateQuantity, productId }) => {
    const [value, setValue] = useState<number>(1)

    const reduce = ():void => {
        handleUpdateQuantity(productId, 'decrease')

        setValue(prevState => {
            const updateState = prevState - 1
            if (updateState === 0) {
                removeProductCallback(productId)
            }
            return updateState
        })
    }

    const increase = ():void => {
        handleUpdateQuantity(productId, 'increase')
        setValue(prevState => prevState + 1)
    }
    
    return (
        <div>
            <input type="button" value="-" className={classes.buttonMinus} onClick={reduce} />
            <input 
                type="number" 
                step="1"
                max=""
                value={value}
                onChange={e => setValue(parseInt(e.target.value))}
                className={classes.quantityField}
            />
            <input type="button" value="+" className={classes.buttonPlus} onClick={increase} />
        </div>
    )
}
