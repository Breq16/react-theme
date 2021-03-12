import React from 'react'
import { faKeybase } from "@fortawesome/free-brands-svg-icons"

import { Page, Badges, IconBadge, Badge, Slides, Slide, Tiles, Tile, YouTube, Code, Heading, LabelInput, Form, LabelDropdown, Button, FormGrid, LabelTextArea } from "@breq/react-theme"
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

    const [state, setState] = React.useState("")
    const [droppy, setDroppy] = React.useState("hello")
    const [texty, setTexty] = React.useState("Hi\nmultiline!")

    const defaultDroppy = {
        hello: "Hello!",
        world: "World!"
    }


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
            <hr />
            <h1>Code</h1>
            <Code code={"import time"} language="python" />
            <hr />
            <h1>Heading</h1>
            <Heading title="Heading" subtitle="This is my heading" />
            <hr />
            <h1>Forms</h1>
            <Form>
                <FormGrid>
                    <LabelInput label="Test Input" value={"DISABLED"} onChange={setState} disabled />
                    <LabelDropdown label="Droppy" value={droppy} options={defaultDroppy} onChange={setDroppy} />
                    <LabelTextArea label="Tinder Bio" value={texty} onChange={setTexty} />
                </FormGrid>
                <br />
                <Button onClick={alert}>Haii!</Button>
                <Button onClick={alert}>Sup?</Button>
                <br />
            </Form>
        </Page>
    )
}

export default App
