import React from "react"

import Navbar from "./Navbar"
import Container from "./Container"
import Footer from "./Footer"

export default function Page(props) {
    const pageStyle = {
        height: "100vh",
        display: "flex",
        flexDirection: "column"
    }

    return (
        <div style={pageStyle}>
            <Navbar brand={props.brand} links={props.links}>
            </Navbar>
            <Container style={{flexGrow: 1}}>
                {props.children}
            </Container>
            <Footer author={props.author} copyright={props.copyright} repo={props.repo} contact={props.contact} />
        </div>
    )
}
