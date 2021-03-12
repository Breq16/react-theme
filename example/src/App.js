import React from 'react'
import { faKeybase } from "@fortawesome/free-brands-svg-icons"

import { Page, Badges, IconBadge, Badge, Slides, Slide, Tiles, Tile, YouTube } from '@breq/react-theme'
import '@breq/react-theme/dist/index.css'

const links = {
    github: "https://github.com/breq16"
}

const contact = [
    {
        text: "breq",
        icon: faKeybase,
        link: "https://keybase.io/breq"
    }
]

const App = () => {
    return (
        <Page brand="@breq/react-theme" links={links} contact={contact} author="breq" copyright="2021" repo="Breq16/react-theme">
            <h1>Hello World!</h1>
            <hr />
            <h1>Badges</h1>
            <Badges>
                <Badge>
                    <h1>My Badge</h1>
                    <p>This is a test</p>
                </Badge>
                <IconBadge icon={faKeybase}>
                    <h1>Icon Badge!!</h1>
                    <p>Flashy shiny icon</p>
                </IconBadge>
            </Badges>
            <hr />
            <h1>Slides</h1>
            <Slides>
                <Slide url="https://breq.dev/" video="https://www.w3schools.com/html/mov_bbb.mp4" title="This is a slide" subtitle="With a video" />
                <h1>There's another slide below</h1>
                <Slide url="https://keybase.io/breq" image="https://placekitten.com/1920/1080" title="Here's another slide" subtitle="With a cat image!!" />
            </Slides>
            <hr />
            <h1>Tiles</h1>
            <Tiles>
                <Tile url="https://breq.dev/projects" image="https://placekitten.com/1000/1000" title="Tile!!" subtitle="Yes, tile." date="2021" />
                <Tile url="https://breq.dev/featured" title="Tile with default image" subtitle="bc I'm lazy." />
            </Tiles>
            <hr />
            <h1>YouTube</h1>
            <YouTube id="qihG6AGjkRk" />
        </Page>
    )
}

export default App
