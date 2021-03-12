import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDoubleRight, faHamburger } from "@fortawesome/free-solid-svg-icons"

import Container from "./Container"

import styles from "./Navbar.module.scss"

export default function Navbar(props) {

    const [open, setOpen] = React.useState(false)

    const handleToggle = () => setOpen(!open)

    const links = Object.entries(props.links).map(([name, href]) => (
        <a href={href} key={name} className={styles.navbarLink}>
            <FontAwesomeIcon
                className={styles.navbarIcon}
                icon={faAngleDoubleRight}
            />
            {name}
        </a>
    ))

    const navLinksClassName = styles.navbarLinks + " " + (open ? "" : styles.collapsed)

    return (
        <div className={styles.navbarOuter}>
            <Container>
                <nav className={styles.navbarInner}>
                    <h1 className={styles.navbarBrand}>
                        <span>{props.brand}</span>
                        <button className={styles.navbarToggle} onClick={handleToggle}>
                            <FontAwesomeIcon icon={faHamburger} />
                        </button>
                    </h1>
                    <div className={navLinksClassName}>
                        {links}
                    </div>
                </nav>
            </Container>
        </div>
    )
}
