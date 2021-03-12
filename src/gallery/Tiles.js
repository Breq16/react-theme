import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDoubleRight, faCalendarAlt } from "@fortawesome/free-solid-svg-icons"

import { Media, Tint } from "./Media.js"

import styles from "./Tiles.module.scss"

function Title(props) {
    return (
        <div className={styles.title}>
            <h1>{props.title}</h1>
            <p>{props.subtitle}</p>
        </div>
    )
}

const Cta = (props) => (
    <div className={styles.cta}>
        <span>{props.cta}</span>
        &nbsp;&nbsp;
        <FontAwesomeIcon icon={faAngleDoubleRight} />
    </div>
)

const DateInfo = (props) => (
    <div className={styles.dateinfo}>
        <FontAwesomeIcon icon={faCalendarAlt} />
        &nbsp;&nbsp;
        <span>{props.date}</span>
    </div>
)


export function Tile(props) {
    return (
        <div className={styles.tileOuter}>
            <a className={styles.tileLink} href={props.url}>
                <div className={styles.tileInner}>
                    <Media className={styles.media} image={props.image} video={props.video} />
                    <Tint color={props.color} />
                    <Title title={props.title} subtitle={props.subtitle} />
                    <Cta cta="More" />
                    {props.date & <DateInfo date={props.date} />}
                </div>
            </a>
        </div>
    )
}


export function Tiles(props) {
    return (
        <div className={styles.tileContainer}>
            {props.children}
        </div>
    )
}
