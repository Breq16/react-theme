import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


import styles from "./Badges.module.scss"

export function Badge(props) {
    return (
        <div className={styles.badge} style={props.style}>
            {props.children}
        </div>
    )
}

export function IconBadge(props) {
    return (
        <Badge style={{display: "flex"}}>
            <FontAwesomeIcon icon={props.icon} className={styles.badgeIcon}/>
            <div>
                {props.children}
            </div>
        </Badge>
    )
}

export function Badges(props) {
    return (
        <div className={styles.badges}>
            {props.children}
        </div>
    )
}
