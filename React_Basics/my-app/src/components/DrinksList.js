import React, { useState } from "react";
import styles from "./DrinksList.module.css"

export default function DrinkList(props) {
    return (
        <div className={styles.main}>
            <div>{props.drink1}</div>
            <div>{props.drink2}</div>
            <div>{props.drink3}</div>
        </div>
    )
}