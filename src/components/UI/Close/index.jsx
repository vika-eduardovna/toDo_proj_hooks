import React from 'react'
import s from './style.module.sass'
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Close(props) {

  return (
    <div>
      <button {...props} className={s.close}>
        <FontAwesomeIcon icon={faXmark} />
      </button>

    </div>

  )
}
