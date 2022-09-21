import React from 'react'
import s from './style.module.sass'
import Weekdaycard from '../WeekdayCard'

export default function CardContainer({ deals }) {

  const result = [
    {
      day_id: 'Monday',
      deals: []
    },
    {
      day_id: 'Friday',
      deals: []
    },
  ];

  deals.forEach(deal => {
    const cur_days = result.map(day => day.day_id);

    if (cur_days.includes(deal.day)) {
      const day = result.find(day => day.day_id === deal.day);
      day.deals.push(deal)
    } else {
      result.push({
        day_id: deal.day,
        deals: [deal]
      })
    }
  });
  console.log(result);

  return (
    <div className={s.box}>
      {
        result.map(day =>
          <Weekdaycard key={day.day_id}
            deals={day.deals}
            label={day.day_id} />)
      }
    </div>
  )
}
