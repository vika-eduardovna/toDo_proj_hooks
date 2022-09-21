import React from 'react'
import s from './style.module.sass'
import CardDeal from '../CardDeal'
import Close from '../UI/Close'

export default function Weekdaycard({ label, deals }) {
    return (
        <div className={s.container}>
            <div className={s.label}>
                {label}
            </div>
            <div className={s.deals}>
                {
                    deals.map(deal => <CardDeal key={deal.id} {...deal} />)
                }
            </div>

            <div className={s.close}>
                <Close />
            </div>
        </div>
    )
}
