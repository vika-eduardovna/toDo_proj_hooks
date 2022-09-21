import React from 'react'
import s from './style.module.sass'
import Close from '../UI/Close'

export default function CardDeal({ descr, importance, day }) {

  const importance_style = {
    backgroundColor: importance === 'very important' ? '#5d9f85' : '#e6abc8'
  }
  return (
    <div style={importance_style} className={s.card}>
      {descr}
      <div className={s.close}>
        <Close />
      </div>

    </div>

  )
}
