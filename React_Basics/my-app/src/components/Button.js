import React, { useState } from 'react'
import styles from "./Button.module.css"

export default function Button(props) {
  const [isOn, setIsOn] = useState(false);
  return (
    <div className={isOn ? styles.isOn : styles.isOff} onClick={() => {
      setIsOn(!isOn);
    }}>{props.name} is {props.age} {props.age == 1 ? "year" : "years"} old and is {isOn ? "On" : "Off"}</div>
  )
}
