import React from 'react'
import s from './style.module.sass'
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Close() {
  return (
    <div>
        <button className={s.close}>
            <FontAwesomeIcon icon={faXmark} />
        </button>
        
    </div>
  
  )
}
