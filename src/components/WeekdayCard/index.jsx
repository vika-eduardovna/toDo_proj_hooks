import React from 'react'
import s from './style.module.sass'
import CardDeal from '../CardDeal'
import Close from '../UI/Close'
import { week_label } from './weekLabels'

export default function Weekdaycard({label, deals, deleteDeal, deleteDay }) {
    return (
        <div className={s.container}>
            <div className={s.label}>
                {week_label[label]}
            </div>
            <div className={s.deals}>
                {
                    deals.map(deal => <CardDeal key={deal.id} {...deal} deleteDeal={deleteDeal}/>)
                }
            </div>

            <div className={s.close} >
                <Close onClick={() => deleteDay(label)}/>
            </div>
        </div>
    )
}
