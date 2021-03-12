import React from "react"

import styles from "./Heading.module.scss"

export default function Heading(props) {
    return (
        <div className={styles.heading}>
            <h1>{props.title}</h1>
            <p>{props.subtitle}</p>
        </div>
    )
}