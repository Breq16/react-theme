import React from "react"

import styles from "./Slides.module.scss"

import { Media, Tint } from "./Media.js"

function Title(props) {
    return (
        <div className={styles.title}>
            <h1>{props.title}</h1>
            <p>{props.subtitle}</p>
        </div>
    )
}

export function Slide(props) {
    return (
        <div className={styles.slideOuter}>
            <a href={props.url} target="_blank" rel="noreferrer" className={styles.slideLink}>
                <div className={styles.slideInner}>
                    <Media className={styles.media} image={props.image} video={props.video} />
                    <Tint color={props.color} />
                    <Title title={props.title} subtitle={props.subtitle} />
                </div>
            </a>
        </div>
    )
}

export function Slides(props) {
    return (
        <div className={styles.slides}>
            {props.children}
        </div>
    )
}
