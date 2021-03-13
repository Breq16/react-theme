import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDoubleRight, faHamburger } from "@fortawesome/free-solid-svg-icons"

import Container from "./Container"

import styles from "./Navbar.module.scss"

const LinkIcon = (props) => <FontAwesomeIcon className={styles.navbarIcon} icon={faAngleDoubleRight} />

function DefaultLinks(props) {
    const links = props.links.map(({name, href}) => (
        <a href={href} key={name} className={styles.navbarLink}>
            <LinkIcon />
            {name}
        </a>
    ))

    return <div className={props.className}>{links}</div>
}

function CustomLinks(props) {
    const Link = props.component

    const links = props.links.map(({name, href}) => (
        <Link href={href} key={name}>
            <a className={styles.navbarLink}>
                <LinkIcon />
                {name}
            </a>
        </Link>
    ))

    return <div className={props.className}>{links}</div>
}

export default function Navbar(props) {
    const [open, setOpen] = React.useState(false)

    const handleToggle = () => setOpen(!open)

    const navLinksClassName = styles.navbarLinks + " " + (open ? "" : styles.collapsed)

    let links, brand
    if (props.component) {
        let Link = props.component
        links = <CustomLinks className={navLinksClassName} component={Link} links={props.links} />
        brand = <Link href="/"><a className={styles.navbarBrandLink}>{props.brand}</a></Link>
    } else {
        links = <DefaultLinks className={navLinksClassName} links={props.links} />
        brand = <a href="/" className={styles.navbarBrandLink}>{props.brand}</a>
    }

    return (
        <div className={styles.navbarOuter}>
            <Container>
                <nav className={styles.navbarInner}>
                    <h1 className={styles.navbarBrand}>
                        {brand}
                        <button className={styles.navbarToggle} onClick={handleToggle}>
                            <FontAwesomeIcon icon={faHamburger} />
                        </button>
                    </h1>
                    {links}
                </nav>
            </Container>
        </div>
    )
}
