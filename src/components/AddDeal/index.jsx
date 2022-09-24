import React from 'react'
import s from './style.module.sass'
import Select from 'react-select'
import Button from '../UI/index'

export default function AddDeal({ createDeal }) {
  const days = [
    { value: 1, label: 'Monday' },
    { value: 2, label: 'Tuesday' },
    { value: 3, label: 'Wednesday' },
    { value: 4, label: 'Thursday' },
    { value: 5, label: 'Friday' },
    { value: 6, label: 'Saturday' },
    { value: 7, label: 'Sunday' }
  ];

  const importance = [
    { value: 'not important', label: 'not important' },
    { value: 'very important', label: 'very important' }
  ];

  const submit = e => {
    e.preventDefault();
    const { day, importance, descr } = e.target;
    createDeal(descr.value, importance.value, day.value);
  }
  return (
    <form onSubmit={submit} className={s.container}>
      <div className={s.selects_container}>
        <Select placeholder='Choose the day..' name='day' options={days} />
        <Select placeholder='Importance' name='importance' options={importance} />
        <textarea name='descr' className={s.description} placeholder='write something here...'></textarea>
      </div>
      <Button>Add</Button>
    </form>
  )
}
