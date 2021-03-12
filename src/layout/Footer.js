import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { faCopyright } from "@fortawesome/free-regular-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

import Container from "./Container"

import styles from "./Footer.module.scss"

const ContactLink = (props) => (
    <span className={styles.contactLink}>
        <FontAwesomeIcon icon={props.icon} />
        &nbsp;
        <a href={props.link} target="_blank" rel="noreferrer">
            {props.children}
        </a>
    </span>
)

export default function Footer(props) {

    const contact = props.contact.map((link) => (
        <li key={link.text}>
            <ContactLink icon={link.icon} link={link.link}>
                {link.text}
            </ContactLink>
        </li>
    ))

    return (
        <footer className={styles.footer}>
            <Container>
                <br />
                <br />
                <p>
                    made with <FontAwesomeIcon icon={faHeart} /> by {props.author},
                    <span> </span>
                    <ContactLink icon={faCopyright}>{props.copyright},</ContactLink>
                    <span> </span>
                    <ContactLink icon={faGithub} link={`https://github.com/${props.repo}`}>{props.repo}</ContactLink>
                </p>
                <br />
                <ul className={styles.contactList}>
                    {contact}
                </ul>
                <br />
                <br />
            </Container>
        </footer>
    )
}
