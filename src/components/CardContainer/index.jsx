import React from 'react'
import s from './style.module.sass'
import Weekdaycard from '../WeekdayCard'
import EmptyDeals from '../NoDeals';

export default function CardContainer({ deals, deleteDeal, deleteDay }) {

  const result = [];

  deals.forEach(deal => {
    const day = result.find(day => day.day_num === deal.day);

    if (day !== undefined) {
      day.deals.push(deal);
    } else {
      result.push({
        day_num: deal.day,
        deals: [deal]
      })
    }
  });


  result.sort((a, b) => +a.day_num - +b.day_num);

  return (
    <div className={s.box}>
      {
        deals.length === 0
          ? <EmptyDeals />
          : result.map(day =>
            <Weekdaycard key={day.day_num}
              deals={day.deals}
              label={day.day_num}
              deleteDeal={deleteDeal}
              deleteDay={deleteDay} />)
      }
    </div>
  )
}
