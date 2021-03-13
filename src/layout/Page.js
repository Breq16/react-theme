import React, { Fragment } from "react"

import Navbar from "./Navbar"
import Container from "./Container"
import Footer from "./Footer"

export default function Page(props) {
    const pageStyle = {
        minHeight: "100%",
        display: "flex",
        flexDirection: "column"
    }

    return (
        <div style={{minHeight: "100vh"}}>
            <Navbar brand={props.brand} component={props.linkComponent} links={props.links} />
            <div style={pageStyle}>
                <Container style={{flexGrow: 1}}>
                    {props.children}
                </Container>
                <Footer author={props.author} copyright={props.copyright} repo={props.repo} contact={props.contact} />
            </div>
        </div>
    )
}
