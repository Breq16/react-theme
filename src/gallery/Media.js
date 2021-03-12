import React from "react"

import styles from "./Media.module.scss"

const Video = (props) => (
    <video
        className={`${styles.video} ${props.className || ""}`}
        playsInline autoPlay muted loop disablePictureInPicture>
        <source src={props.src} type="video/webm" />
    </video>
)

const Image = (props) => (
    <div className={`${styles.image} ${props.className || ""}`}>
        <img src={props.src} alt="" loading="lazy" />
    </div>
)

const Tint = (props) => (
    <div className={styles.tint} style={{backgroundColor: props.color}} />
)

function Media(props) {
    if (props.video) {
        return <Video src={props.video} className={props.className} />
    } else if (props.image) {
        return <Image src={props.image} className={props.className} />
    } else {
        return <Image src="https://breq.keybase.pub/branding/pansexual.png" />
    }
}

export { Video, Image, Tint, Media }